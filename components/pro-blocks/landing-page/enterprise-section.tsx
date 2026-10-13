"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/enterprise-section.json";

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

const contentIcons = { Search, FileText, Wrench, ShieldCheck };

export function EnterpriseSection() {
  const content = useSection("enterprise-section", defaults, contentIcons);
  const bulletPoints = content.bulletPoints;
  const processSteps = content.processSteps;

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
                {content.text_1}
              </Tagline>
              <h2 className="heading-lg text-foreground">
                {content.heading_2}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {content.paragraph_3}
              </p>
            </div>

            {/* Bullet Points
                WCAG 1.3.1: a visual bullet list must be a list programmatically
                so AT announces "list, N items" and each item's position. */}
            <ul className="flex list-none flex-col gap-3">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div
                    className="bg-primary/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    aria-hidden="true"
                  >
                    <Check
                      className="text-primary h-3 w-3"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-foreground text-base font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <Button asChild size="lg">
                <Link href={content.href_4}>
                  {content.text_5}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Process Visual */}
          <div className="flex flex-1 items-center justify-center">
            {/* WCAG 1.3.1: the four numbered steps are an ordered sequence, so
                <ol> conveys both the grouping and the order to AT. */}
            <ol className="flex w-full list-none flex-col gap-0">
              {processSteps.map((step, index) => (
                <li key={step.label} className="relative flex gap-4">
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
                        {content.text_6}
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-foreground text-base font-semibold">
                      {step.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
