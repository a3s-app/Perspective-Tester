"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  ArrowRight,
  LayoutDashboard,
  Upload,
  ListChecks,
  GitBranch,
  Users,
  Bell,
  Link2,
  BarChart3,
  CheckCircle2,
  MessageSquare,
  Clock,
  Shield,
} from "lucide-react";
import Link from "next/link";

const coreFeatures = [
  {
    icon: Upload,
    title: "Audit Import & Auto-Mapping",
    description:
      "Upload Excel audit reports and let the platform auto-map columns, parse findings, and structure issues in seconds. Supports .xlsx, .xls, and .csv formats.",
  },
  {
    icon: ListChecks,
    title: "Issue Tracking & Assignment",
    description:
      "Track issues with severity levels, WCAG criteria mapping, ownership assignment, and due dates. Every issue is 100% traceable.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description:
      "Live dashboards displaying remediation progress, risk distribution, and status trends across your entire accessibility program.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Role-based access controls, saved views, and team workflows that keep everyone aligned on remediation priorities.",
  },
];

const integrations = [
  {
    icon: GitBranch,
    name: "Jira",
    description: "Bidirectional sync with webhook-driven real-time updates.",
  },
  {
    icon: Bell,
    name: "Slack",
    description: "Instant alerts when issues escalate or SLAs breach.",
  },
  {
    icon: MessageSquare,
    name: "Microsoft Teams",
    description: "Rich notification cards for channel routing.",
  },
  {
    icon: Link2,
    name: "Custom Webhooks",
    description: "Event-driven architecture for custom triggers across platforms.",
  },
];

const vendorFeatures = [
  {
    icon: Shield,
    title: "Secure Share Links",
    description:
      "Tokenized share links with controlled permissions and expiration dates for vendor collaboration.",
  },
  {
    icon: MessageSquare,
    title: "Threaded Discussions",
    description:
      "Issue-level conversation threads maintaining full remediation context between teams.",
  },
  {
    icon: Clock,
    title: "SLA Tracking",
    description:
      "Submission tracking with complete version history, approval workflows, and escalation monitoring.",
  },
];

export function ManagePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Tagline>
              <LayoutDashboard className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Accessibility Management Platform</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Your Accessibility Operations Command Center
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Replace spreadsheets with a centralized platform for managing
                accessibility compliance workflows from audit intake through
                remediation and reporting.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://manage.p15r.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Visit Manage Platform
                  <ArrowRight />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Features</Tagline>
            <h2 className="heading-lg text-foreground">
              Everything You Need to Manage Accessibility
            </h2>
            <p className="text-muted-foreground text-base">
              From audit intake to remediation tracking, built for accessibility
              teams and compliance workflows.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {coreFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="gap-0 overflow-hidden rounded-xl border p-0 shadow-none"
              >
                <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <feature.icon className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-foreground text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Integrations</Tagline>
            <h2 className="heading-lg text-foreground">
              Connects to Your Existing Tools
            </h2>
            <p className="text-muted-foreground text-base">
              Integrate with the tools your team already uses for seamless
              accessibility workflows.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 text-center"
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <integration.icon className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-foreground text-sm font-semibold">
                  {integration.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Collaboration */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Vendor Collaboration</Tagline>
            <h2 className="heading-lg text-foreground">
              Streamline Vendor Handoffs
            </h2>
            <p className="text-muted-foreground text-base">
              Share findings with vendors securely and track remediation
              progress with full accountability.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {vendorFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-3">
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <feature.icon className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-foreground text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="bg-secondary mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border p-8 text-center sm:p-12">
            <h2 className="heading-md text-foreground">One Plan. Everything Included.</h2>
            <div className="flex flex-col gap-2">
              <p className="text-foreground text-3xl font-semibold">
                $99<span className="text-muted-foreground text-base font-normal">/month</span>
              </p>
              <p className="text-muted-foreground text-sm">
                Set up in ~10 minutes. No per-seat charges.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 text-left">
              {[
                "Unlimited audit uploads",
                "Unlimited issues",
                "Team collaboration",
                "Jira, Slack & Teams integrations",
                "Public reporting",
                "Priority support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-primary h-4 w-4 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link href="https://manage.p15r.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Start Using Manage
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
