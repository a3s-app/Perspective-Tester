import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Info@perspectivetester.com";
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

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: body.email,
      subject,
      html: buildHtmlEmail(body),
    });

    if (error) {
      console.error("[contact/resend] Failed to send email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/resend] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
