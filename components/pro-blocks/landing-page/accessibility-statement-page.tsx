"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/accessibility-statement-page.json";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Mail } from "lucide-react";
import Link from "next/link";

export function AccessibilityStatementPage() {
  const content = useSection("accessibility-statement-page", defaults);

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span className="text-foreground">{content.text_1}</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                {content.heading_2}
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {content.paragraph_3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border bg-card p-6 sm:p-10">
              <div className="flex flex-col gap-10">
                {/* Conformance Status */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_4}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_5}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_6}
                  </p>
                </div>

                {/* Standards Applied */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_7}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_8}
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>{content.text_9}</li>
                    <li>{content.text_10}</li>
                    <li>{content.text_11}</li>
                    <li>{content.text_12}</li>
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_13}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_14}
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>{content.text_15}</li>
                    <li>{content.text_16}</li>
                    <li>{content.text_17}</li>
                    <li>{content.text_18}</li>
                  </ul>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_19}
                  </p>
                </div>

                {/* Accessibility Features */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_20}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_21}
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>{content.text_22}</li>
                    <li>{content.text_23}</li>
                    <li>{content.text_24}</li>
                    <li>{content.text_25}</li>
                    <li>{content.text_26}</li>
                    <li>{content.text_27}</li>
                    <li>{content.text_28}</li>
                    <li>{content.text_29}</li>
                    <li>{content.text_30}</li>
                    <li>{content.text_31}</li>
                  </ul>
                </div>

                {/* Assessment Methods */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_32}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_33}
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>{content.text_34}</li>
                    <li>{content.text_35}</li>
                    <li>{content.text_36}</li>
                    <li>{content.text_37}</li>
                    <li>{content.text_38}</li>
                  </ul>
                </div>

                {/* Feedback */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_39}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_40}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <a
                      href={content.href_41}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{content.text_42}</span>
                      {content.text_43}
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.paragraph_44}
                  </p>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-3 border-t pt-6">
                  <p className="text-xs text-muted-foreground">
                    {content.paragraph_45}{" "}
                    <time dateTime="2026-03-31">{content.text_46}</time>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="heading-lg text-foreground">{content.heading_47}</h2>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
              {content.paragraph_48}
            </p>
            <Button asChild size="lg">
              <Link href={content.href_49}>
                {content.text_50}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
