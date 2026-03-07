"use client";

import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  Check,
  ArrowRight,
  Building2,
  Search,
  FileText,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const bulletPoints = [
  "WCAG 2.2 compliance tracking",
  "Accessibility testing with assistive technologies",
  "Centralized reporting",
  "Enterprise support",
];

const processSteps = [
  {
    icon: Search,
    label: "Audit",
    description: "Full-site accessibility audit with assistive technology testing",
    color: "bg-blue-500",
  },
  {
    icon: FileText,
    label: "Report",
    description: "Detailed WCAG 2.2 compliance report with prioritized issues",
    color: "bg-amber-500",
  },
  {
    icon: Wrench,
    label: "Remediate",
    description: "Expert-led remediation with code-level fixes and guidance",
    color: "bg-violet-500",
  },
  {
    icon: ShieldCheck,
    label: "Protect",
    description: "Ongoing monitoring and legal protection guarantee",
    color: "bg-emerald-500",
  },
];

export function EnterpriseSection() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      id="enterprise"
    >
      <div className="container-padding-x container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-6 lg:gap-8">
            <div className="section-title-gap-lg flex flex-col">
              <Tagline>
                <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                Enterprise
              </Tagline>
              <h2 className="heading-lg text-foreground">
                Built for Enterprise Accessibility Programs
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Perspective Tester helps large organizations manage
                accessibility compliance across multiple products, teams, and
                digital experiences.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-3">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="bg-primary/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="text-primary h-3 w-3" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-base font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Enterprise Team
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Process Visual */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex w-full flex-col gap-0">
              {processSteps.map((step, index) => (
                <div key={step.label} className="relative flex gap-4">
                  {/* Vertical connector line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`${step.color} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm`}
                    >
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex flex-col gap-1 pb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-foreground text-base font-semibold">
                      {step.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
