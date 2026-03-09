"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Send, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Info@perspectivetester.com";

const budgetOptions = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 - $15,000" },
  { value: "15k-50k", label: "$15,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-plus", label: "$100,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const serviceOptions = [
  { value: "a3s", label: "A3S - Accessibility as a Service" },
  { value: "p15r", label: "P15R Platform" },
  { value: "audit", label: "Accessibility Audit" },
  { value: "remediation", label: "Remediation Support" },
  { value: "vpat", label: "VPAT / ACR Documentation" },
  { value: "training", label: "Training & Consulting" },
  { value: "other", label: "Other" },
];

const orgTypeOptions = [
  { value: "government", label: "Government Agency" },
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "enterprise", label: "Enterprise" },
  { value: "nonprofit", label: "Non-profit" },
  { value: "small-business", label: "Small Business" },
  { value: "other", label: "Other" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState("");
  const [orgType, setOrgType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add select values that aren't captured by native form data
    formData.set("service", service);
    if (orgType) formData.set("orgType", orgType);
    if (budget) formData.set("budget", budget);

    // FormSubmit configuration
    formData.set("_subject", `New Inquiry: ${service} - ${formData.get("firstName")} ${formData.get("lastName")} (${formData.get("organization")})`);
    formData.set("_captcha", "false");
    formData.set("_template", "table");

    try {
      // Send to FormSubmit (email)
      const formSubmitPromise = fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const serviceName = formData.get("service") as string;
      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      const email = formData.get("email") as string;
      const organization = formData.get("organization") as string;
      const phone = formData.get("phone") as string;
      const orgTypeVal = formData.get("orgType") as string;
      const budgetVal = formData.get("budget") as string;
      const website = formData.get("website") as string;
      const message = formData.get("message") as string;

      // Send email via Resend (server-side, fire and forget)
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: phone || undefined,
          organization,
          orgType: orgTypeVal || undefined,
          service: serviceName,
          budget: budgetVal || undefined,
          website: website || undefined,
          message,
        }),
      }).catch(() => {
        // Resend failure is non-critical, FormSubmit is the primary delivery
      });

      // Send to Slack webhook (if configured)
      const slackWebhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;
      if (slackWebhookUrl) {
        const slackBlocks = {
          text: `New inquiry from ${firstName} ${lastName} (${organization})`,
          blocks: [
            {
              type: "header",
              text: { type: "plain_text", text: `New Inquiry: ${serviceName}`, emoji: true },
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*Name:*\n${firstName} ${lastName}` },
                { type: "mrkdwn", text: `*Email:*\n${email}` },
                { type: "mrkdwn", text: `*Organization:*\n${organization}` },
                { type: "mrkdwn", text: `*Service:*\n${serviceName}` },
                ...(phone ? [{ type: "mrkdwn", text: `*Phone:*\n${phone}` }] : []),
                ...(orgTypeVal ? [{ type: "mrkdwn", text: `*Org Type:*\n${orgTypeVal}` }] : []),
                ...(budgetVal ? [{ type: "mrkdwn", text: `*Budget:*\n${budgetVal}` }] : []),
                ...(website ? [{ type: "mrkdwn", text: `*Website:*\n${website}` }] : []),
              ],
            },
            {
              type: "section",
              text: { type: "mrkdwn", text: `*Message:*\n${message}` },
            },
          ],
        };

        fetch(slackWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slackBlocks),
        }).catch(() => {});
      }

      const response = await formSubmitPromise;

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setSubmitted(true);
    } catch {
      setError(
        `There was a problem sending your inquiry. Please try again or email us directly at ${CONTACT_EMAIL}.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Contact Us</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Let&apos;s Talk About Your Accessibility Needs
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Whether you need a managed accessibility service, a compliance
                platform, or expert consulting, we&apos;re here to help. Tell us
                about your project and we&apos;ll get back to you within one business
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
            {/* Form */}
            <div className="rounded-xl border bg-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Thank you for reaching out
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    We&apos;ve received your inquiry and will get back to you
                    within one business day. In the meantime, feel free to
                    explore our products.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/a3s">
                        Explore A3S
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/manage">
                        Explore P15R
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      Request a Consultation
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fill out the form below and our team will reach out to
                      discuss your accessibility goals.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      <span className="text-destructive font-semibold">*</span>{" "}
                      indicates a required field.
                    </p>
                  </div>

                  <div aria-live="assertive" aria-atomic="true">
                    {error && (
                      <div
                        role="alert"
                        className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                      >
                        {error}
                      </div>
                    )}
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">
                        First name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Jane"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">
                        Last name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Smith"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">
                        Work email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@organization.gov"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone number <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Organization + type */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="organization">
                        Organization <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="City of Springfield"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="orgType">Organization type <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Select
                        name="orgType"
                        value={orgType}
                        onValueChange={setOrgType}
                        disabled={loading}
                      >
                        <SelectTrigger className="w-full" aria-label="Organization type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {orgTypeOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Service + Budget */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">
                        Service interested in{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        name="service"
                        value={service}
                        onValueChange={setService}
                        required
                        disabled={loading}
                      >
                        <SelectTrigger className="w-full" aria-label="Service interested in">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="budget">Project budget <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Select
                        name="budget"
                        value={budget}
                        onValueChange={setBudget}
                        disabled={loading}
                      >
                        <SelectTrigger className="w-full" aria-label="Project budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Website URL */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="website">Website URL <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://www.example.gov"
                      disabled={loading}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">
                      Tell us about your project{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your accessibility needs, timeline, number of pages/applications, or any specific compliance requirements..."
                      className="min-h-[120px]"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <ArrowRight aria-hidden="true" />
                        </>
                      )}
                    </Button>
                    <div aria-live="polite" className="sr-only">
                      {loading ? "Sending your inquiry, please wait." : ""}
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Contact info */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  Get in Touch
                </h3>
                <div className="mt-4 flex flex-col gap-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  Explore Our Services
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/a3s"
                    className="group flex items-center justify-between rounded-lg border bg-secondary/50 px-4 py-3 transition-colors hover:bg-secondary"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">A3S</p>
                      <p className="text-xs text-muted-foreground">
                        Managed accessibility service
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </Link>
                  <Link
                    href="/manage"
                    className="group flex items-center justify-between rounded-lg border bg-secondary/50 px-4 py-3 transition-colors hover:bg-secondary"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        P15R
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Accessibility Ops Without Chaos
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </Link>
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-xl border border-primary/10 bg-primary/5 p-6">
                <p className="text-sm font-medium text-foreground">
                  Response time
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  We typically respond within one business day. For urgent
                  accessibility needs, mention it in your message and we&apos;ll
                  prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
