"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/final-cta-section.json";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function FinalCtaSection() {
  const content = useSection("final-cta-section", defaults);

  return (
    <section className="bg-background section-padding-y" id="cta">
      <div className="container-padding-x container mx-auto">
        <div className="bg-primary mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-primary-foreground text-2xl font-semibold text-balance sm:text-3xl">
            {content.heading_1}
          </h2>
          <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
            {content.paragraph_2}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
            >
              <Link href={content.href_3}>
                {content.text_4}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
            >
              <Link href={content.href_5}>
                <Calendar aria-hidden="true" />
                {content.text_6}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
