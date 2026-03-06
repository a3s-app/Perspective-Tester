"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export function HeroSection2() {
  return (
    <section
      className="relative overflow-hidden border-b bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container relative z-10 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left content */}
          <div className="flex max-w-xl flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <Tagline>
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Engineering Equity</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1
                id="hero-heading"
                className="heading-xl text-balance text-foreground"
              >
                Accessibility Testing & Compliance at Scale
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
                Test, monitor, and manage accessibility across your digital
                products. Achieve and maintain WCAG compliance with
                enterprise-grade tooling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  View Products
                  <ArrowRight />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Talk to Sales
                </Button>
              </Link>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {["WCAG 2.2", "Section 508", "ADA Title II"].map((badge) => (
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

          {/* Right visual -- Capitol dome */}
          <div className="relative flex w-full max-w-md items-center justify-center lg:max-w-lg">
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at center, oklch(0.37 0.1 260 / 0.06), transparent 70%)",
              }}
            />
            <Image
              src={assetPath("/capitol-dome.png")}
              alt="Capitol dome illustration representing government-grade compliance"
              width={480}
              height={520}
              className="relative z-10 h-auto w-full max-w-[340px] object-contain lg:max-w-[420px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
