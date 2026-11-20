import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where form enquiries are delivered. Deliberately separate from the address
// shown on the site (the CMS contact email), which stays as it is.
// Several addresses can be given, separated by commas; everyone listed gets
// the same email and can see the others.
const CONTACT_FORM_TO = (process.env.CONTACT_FORM_TO || "Info@perspectivetester.com")
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization: string;
  orgType?: string;
  service: string;
  budget?: string;
  website?: string;
  message: string;
}

function buildHtmlEmail(data: ContactPayload): string {
  const optionalRows = [
    data.phone && `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Phone</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(data.phone)}</td></tr>`,
    data.orgType && `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Org Type</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(data.orgType)}</td></tr>`,
    data.budget && `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Budget</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(data.budget)}</td></tr>`,
    data.website && `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Website</td><td style="padding:8px 12px;color:#1f2937;"><a href="${escapeHtml(data.website)}" style="color:#2563eb;">${escapeHtml(data.website)}</a></td></tr>`,
  ].filter(Boolean).join("\n");

  return `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#0f172a;padding:24px 32px;border-radius:8px 8px 0 0;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">New Contact Inquiry</h1>
    <p style="margin:4px 0 0;color:#94a3b8;font-size:14px;">${escapeHtml(data.service)}</p>
  </div>
  <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:24px 32px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Name</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Email</td><td style="padding:8px 12px;color:#1f2937;"><a href="mailto:${escapeHtml(data.email)}" style="color:#2563eb;">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Organization</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(data.organization)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;white-space:nowrap;">Service</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(data.service)}</td></tr>
      ${optionalRows}
    </table>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
    <p style="font-weight:600;color:#374151;margin:0 0 8px;">Message</p>
    <p style="color:#1f2937;line-height:1.6;margin:0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
  </div>
</div>`.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(data: ContactPayload, subject: string) {
  // Instantiate lazily so a missing optional key does not prevent a build.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact/resend] RESEND_API_KEY is not set");
    return false;
  }
  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM_EMAIL,
      to: CONTACT_FORM_TO,
      replyTo: data.email,
      subject,
      html: buildHtmlEmail(data),
    });
    if (error) {
      console.error("[contact/resend] Failed to send email:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact/resend] Unexpected error:", err);
    return false;
  }
}

// Slack's mrkdwn treats &, < and > as control characters.
function slackEscape(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function postToSlack(data: ContactPayload) {
  // Server-only on purpose: a NEXT_PUBLIC_ variable would put the webhook URL
  // in the page's JavaScript, where anyone could copy it and post to Slack.
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return false;

  const field = (label: string, value?: string) =>
    value ? [{ type: "mrkdwn", text: `*${label}:*\n${slackEscape(value)}` }] : [];

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `New inquiry from ${data.firstName} ${data.lastName} (${data.organization})`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: `New Inquiry: ${data.service}`, emoji: true },
          },
          {
            type: "section",
            fields: [
              ...field("Name", `${data.firstName} ${data.lastName}`),
              ...field("Email", data.email),
              ...field("Organization", data.organization),
              ...field("Service", data.service),
              ...field("Phone", data.phone),
              ...field("Org Type", data.orgType),
              ...field("Budget", data.budget),
              ...field("Website", data.website),
            ],
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: `*Message:*\n${slackEscape(data.message)}` },
          },
        ],
      }),
    });
    if (!res.ok) {
      console.error("[contact/slack] Webhook returned", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact/slack] Unexpected error:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.firstName || !body.lastName || !body.email || !body.organization || !body.service || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subject = `New Inquiry: ${body.service} — ${body.firstName} ${body.lastName} (${body.organization})`;

    // Email (Resend) and Slack go out together. The enquiry counts as
    // received if at least one of them gets through; each failure is logged.
    const [emailSent, slackSent] = await Promise.all([
      sendEmail(body, subject),
      postToSlack(body),
    ]);

    if (!emailSent && !slackSent) {
      return NextResponse.json(
        { error: "Failed to send inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
