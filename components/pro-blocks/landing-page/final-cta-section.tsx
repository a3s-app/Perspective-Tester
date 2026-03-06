"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-background section-padding-y" id="cta">
      <div className="container-padding-x container mx-auto">
        <div className="bg-primary mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-primary-foreground text-2xl font-semibold text-balance sm:text-3xl">
            Start Building Accessible Digital Experiences
          </h2>
          <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
            If you are an enterprise organization looking to scale accessibility
            across your digital platforms, our team can help.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Talk to Sales
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Calendar />
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
