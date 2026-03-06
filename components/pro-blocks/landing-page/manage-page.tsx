"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  ArrowRight,
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
import Image from "next/image";
import { assetPath } from "@/lib/utils";

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
              <Image
                src={assetPath("/p15r-logo.webp")}
                alt="P15R logo"
                width={16}
                height={16}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="text-foreground">Accessibility Ops Without Chaos</span>
            </Tagline>

            <div className="bg-card flex h-20 w-20 items-center justify-center rounded-2xl border p-2 shadow-sm">
              <Image
                src={assetPath("/p15r-logo.webp")}
                alt="P15R logo"
                width={72}
                height={72}
                className="h-full w-full object-contain"
                priority
              />
            </div>

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
              <Link href="https://p15r.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Visit P15R Platform
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
              Everything You Need to Run Accessibility Ops
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
          <div className="bg-card mx-auto grid max-w-5xl gap-8 rounded-2xl border p-8 shadow-sm sm:p-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10">
            <div className="min-w-0 flex flex-col items-start gap-4 text-left">
              <span className="bg-primary/10 text-primary inline-flex h-7 items-center rounded-full px-3 text-xs font-semibold tracking-wide uppercase">
                P15R Pricing
              </span>
              <h2 className="heading-md text-foreground">Simple, Transparent Pricing</h2>
              <p className="text-foreground text-3xl font-semibold sm:text-4xl">
                $99
                <span className="text-muted-foreground ml-1 text-base font-normal sm:text-lg">
                  /seat
                </span>
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                Per seat, billed monthly. Scale seats as your team grows.
              </p>
              <Link href="https://p15r.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto sm:min-w-56">
                  Start Using P15R
                  <ArrowRight />
                </Button>
              </Link>
            </div>

            <div className="min-w-0 rounded-xl border bg-secondary/40 p-5 sm:p-6">
              <p className="text-foreground mb-4 text-sm font-semibold uppercase tracking-wide">
                Includes
              </p>
              <div className="flex flex-col gap-3">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
