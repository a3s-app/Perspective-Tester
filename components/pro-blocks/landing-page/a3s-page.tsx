"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  ArrowRight,
  Shield,
  ClipboardCheck,
  FileText,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  Users,
  FileCheck,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

const phases = [
  {
    number: "01",
    title: "Initial Assessment",
    description:
      "Comprehensive site evaluation, accessibility statement updates, and scope documentation to establish your compliance baseline.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Audit & Remediation",
    description:
      "Issue identification and implementation of fixes with monthly progress reports tracking every change.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Final Validation & VPAT",
    description:
      "Complete site validation and official VPAT certification documenting your conformance to WCAG 2.2 AA standards.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "Optimization & Monitoring",
    description:
      "Continuous monitoring with proactive issue prevention, catching accessibility regressions before they become problems.",
    icon: BarChart3,
  },
];

const features = [
  {
    icon: Shield,
    title: "Legal Protection Documentation",
    description:
      "Build a defensible paper trail with monthly reports, remediation records, and VPAT certifications that demonstrate your compliance commitment.",
  },
  {
    icon: Users,
    title: "IAAP-Certified Specialists",
    description:
      "Work with certified accessibility professionals who manually test with assistive technologies, not just automated scanners.",
  },
  {
    icon: FileText,
    title: "VPAT & ACR Reports",
    description:
      "Receive official Voluntary Product Accessibility Template and Accessibility Conformance Reports for your digital properties.",
  },
  {
    icon: Lightbulb,
    title: "Expert Remediation Guidance",
    description:
      "Get actionable fixes from specialists experienced in WCAG standards, screen reader testing, and assistive technology compatibility.",
  },
];

const complianceStandards = [
  "WCAG 2.2 AA",
  "Section 508",
  "ADA Title II",
  "Section 504",
];

export function A3SPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Tagline>
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Accessibility as a Service</span>
            </Tagline>

            <div className="bg-card flex h-20 w-20 items-center justify-center rounded-2xl border p-2 shadow-sm">
              <Image
                src={assetPath("/a3s-logo.png")}
                alt="A3S logo"
                width={72}
                height={72}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Managed Accessibility Compliance for Government
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                A subscription-based accessibility service built for local and
                county governments. Expert teams paired with public-sector
                workflows to achieve and maintain WCAG 2.2 AA compliance with
                full legal protection documentation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://a3s.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Visit A3S
                  <ArrowRight />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Talk to Sales
                </Button>
              </Link>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {complianceStandards.map((badge) => (
                <div
                  key={badge}
                  className="flex h-8 items-center rounded-md border bg-secondary px-3"
                >
                  <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase Workflow */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>How It Works</Tagline>
            <h2 className="heading-lg text-foreground">
              Four-Phase Accessibility Workflow
            </h2>
            <p className="text-muted-foreground text-base">
              A structured approach that takes you from initial assessment to
              ongoing compliance monitoring.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {phases.map((phase) => (
              <Card
                key={phase.number}
                className="gap-0 overflow-hidden rounded-xl border p-0 shadow-none"
              >
                <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <phase.icon className="text-primary h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                        Phase {phase.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-foreground text-lg font-semibold">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Why A3S</Tagline>
            <h2 className="heading-lg text-foreground">
              Built for Government Compliance
            </h2>
            <p className="text-muted-foreground text-base">
              Manual testing by certified professionals, not overlay widgets or
              automated-only scans.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <feature.icon className="text-primary h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-foreground text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="bg-card mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border p-8 text-center sm:p-12">
            <h2 className="heading-md text-foreground">Simple, Predictable Pricing</h2>
            <div className="flex flex-col gap-2">
              <p className="text-foreground text-3xl font-semibold">
                $1,500<span className="text-muted-foreground text-base font-normal">/month</span>
              </p>
              <p className="text-muted-foreground text-sm">
                For sites up to 25 pages. Enterprise plans available for larger
                organizations.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 text-left">
              {[
                "4-phase accessibility workflow",
                "VPAT & legal documentation",
                "Monthly progress reports",
                "Continuous monitoring",
                "IAAP-certified specialists",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-primary h-4 w-4 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link href="https://a3s.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Get Started with A3S
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
