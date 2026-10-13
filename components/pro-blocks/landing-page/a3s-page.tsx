"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/a3s-page.json";

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

const contentIcons = {
  Eye,
  ClipboardCheck,
  FileCheck,
  BarChart3,
  Shield,
  Users,
  FileText,
  Lightbulb,
};

export function A3SPage() {
  const content = useSection("a3s-page", defaults, contentIcons);
  const phases = content.phases;
  const features = content.features;
  const complianceStandards = content.complianceStandards;

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Tagline>
              <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span className="text-foreground">{content.text_1}</span>
            </Tagline>

            <div className="bg-card flex h-20 w-20 items-center justify-center rounded-2xl border p-2 shadow-sm">
              <Image
                src={assetPath(content.image_2)}
                /* WCAG 1.1.1: the audit noted NVDA still announced this as
                   "unlabelled graphics" even though alt="A3S logo" was present,
                   because the string was too short to register. The auditor
                   asked for a longer, descriptive alternative. */
                alt={content.alt_3}
                width={72}
                height={72}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                {content.heading_4}
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {content.paragraph_5}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link
                  href={content.href_6}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text_7}
                  <span className="sr-only"> {content.text_8}</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={content.href_9}>{content.text_10}</Link>
              </Button>
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
            <Tagline>{content.text_11}</Tagline>
            <h2 className="heading-lg text-foreground">{content.heading_12}</h2>
            <p className="text-muted-foreground text-base">
              {content.paragraph_13}
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
                        {content.text_14}
                        {phase.number}
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

          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href={content.href_15}>
                {content.text_16}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>{content.text_17}</Tagline>
            <h2 className="heading-lg text-foreground">{content.heading_18}</h2>
            <p className="text-muted-foreground text-base">
              {content.paragraph_19}
            </p>
          </div>

          {/* WCAG 1.3.1: parallel feature entries, so a list programmatically. */}
          <ul className="mx-auto grid max-w-5xl list-none grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-4">
                <div
                  className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  aria-hidden="true"
                >
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="bg-card mx-auto grid max-w-5xl gap-8 rounded-2xl border p-8 shadow-sm sm:p-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10">
            <div className="min-w-0 flex flex-col items-start gap-4 text-left">
              <span className="bg-primary/10 text-primary inline-flex h-7 items-center rounded-full px-3 text-xs font-semibold tracking-wide uppercase">
                {content.text_20}
              </span>
              <h2 className="heading-md text-foreground">
                {content.heading_21}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {content.paragraph_22}
              </p>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto sm:min-w-56"
              >
                <Link href={content.href_23}>
                  {content.text_24}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="min-w-0 rounded-xl border bg-secondary/40 p-5 sm:p-6">
              <p className="text-foreground mb-4 text-sm font-semibold uppercase tracking-wide">
                {content.paragraph_25}
              </p>
              {/* WCAG 1.3.1: an "Includes" checklist must be a list so AT
                  announces "list, 5 items" and each item's position. */}
              <ul className="flex list-none flex-col gap-3">
                {content.items_26.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="text-primary h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
