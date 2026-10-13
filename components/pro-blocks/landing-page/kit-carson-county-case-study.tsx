"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/kit-carson-county-case-study.json";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/utils";
import {
  CostSnapshotFigure,
  EvidenceTrail,
  HeroArtwork,
} from "@/components/pro-blocks/landing-page/kit-carson-case-study-art";

export function KitCarsonCountyCaseStudy() {
  const content = useSection("kit-carson-county-case-study", defaults);
  const outcomes = content.outcomes;

  return (
    <article className="overflow-clip bg-background">
      <header className="relative isolate min-h-[calc(100dvh-4.25rem)] overflow-hidden bg-[oklch(0.13_0.035_255)] text-white">
        <HeroArtwork />
        <div className="container-padding-x container relative z-10 mx-auto flex min-h-[calc(100dvh-4.25rem)] items-end pb-10 pt-20 sm:pb-14 lg:pb-16 lg:pt-24">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <a
                href={content.href_1}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg bg-white/96 p-1.5 shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label={content.aria_label_2}
              >
                <Image
                  src={assetPath(content.image_3)}
                  alt={content.alt_4}
                  width={263}
                  height={200}
                  className="h-11 w-auto rounded-sm sm:h-12"
                />
              </a>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-white/78">
                <span>{content.text_5}</span>
                <span className="h-4 w-px bg-white/30" aria-hidden="true" />
                <span>{content.text_6}</span>
              </div>
            </div>
            <h1 className="max-w-[21ch] text-balance text-[clamp(2.5rem,5.6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              {content.heading_7}
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/76 sm:text-lg">
              <p>{content.paragraph_8}</p>
              <p>{content.paragraph_9}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              {content.heading_10}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {content.paragraph_11}
            </p>
            <p className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              {content.paragraph_12}
            </p>

            <blockquote className="mt-12 border-t border-[oklch(0.48_0.13_42)] pt-8">
              <Quote
                className="size-8 text-[oklch(0.48_0.13_42)]"
                aria-hidden="true"
              />
              <p className="mt-5 max-w-4xl text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
                {content.paragraph_13}
              </p>
              <footer className="mt-5 text-sm font-medium text-muted-foreground">
                {content.text_14}
              </footer>
            </blockquote>

            <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-foreground">
              {content.paragraph_15}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
                {content.heading_16}
              </h2>

              <p className="mt-7 max-w-2xl text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                {content.paragraph_17}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.paragraph_18}
              </p>
              <p className="mt-7 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                {content.paragraph_19}
              </p>

              <blockquote className="mt-10 rounded-2xl border border-border bg-secondary p-6 sm:p-8">
                <p className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                  {content.paragraph_20}
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  {content.text_21}
                </footer>
              </blockquote>

              <div className="mt-14 border-t-2 border-[oklch(0.48_0.13_42)] pt-8">
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                  {content.heading_22}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {content.paragraph_23}
                </p>
                <p className="mt-6 max-w-2xl text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                  {content.paragraph_24}
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <CostSnapshotFigure />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-[oklch(0.18_0.035_255)] py-20 text-white sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                {content.heading_25}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                {content.paragraph_26}
              </p>
              <p className="mt-6 text-base font-semibold leading-relaxed text-[oklch(0.78_0.12_52)] sm:text-lg">
                {content.paragraph_27}
              </p>
            </div>
            <EvidenceTrail />
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary py-16 sm:py-20 lg:py-24">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[oklch(0.18_0.035_255)] text-white">
            <figure className="relative aspect-[16/9] overflow-hidden sm:aspect-[5/2] lg:aspect-[3/1]">
              <Image
                src={assetPath(content.image_28)}
                alt={content.alt_29}
                fill
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
              />
            </figure>

            <blockquote className="p-7 sm:p-10 lg:p-12">
              <Quote
                className="size-8 text-[oklch(0.78_0.12_52)]"
                aria-hidden="true"
              />
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-white/58">
                {content.paragraph_30}
              </p>
              <p className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
                {content.paragraph_31}
              </p>
              <footer className="mt-7 text-sm font-medium text-white/68">
                {content.text_32}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
                {content.heading_33}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.paragraph_34}
              </p>
            </div>

            <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b py-4 text-base font-medium text-foreground sm:text-lg"
                >
                  <Check
                    className="mt-1 size-5 shrink-0 text-[oklch(0.48_0.13_42)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24 lg:py-32">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
                {content.heading_35}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.paragraph_36}
              </p>
            </div>

            <div className="mt-10 grid gap-8 rounded-2xl bg-[oklch(0.18_0.035_255)] p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  {content.paragraph_37}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                  {content.paragraph_38}
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full whitespace-nowrap bg-white text-[oklch(0.18_0.035_255)] hover:bg-white/90 focus-visible:ring-white lg:w-auto"
              >
                <Link href={content.href_39}>
                  {content.text_40}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span>{content.text_41}</span>
              <a
                href={content.href_42}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {content.text_43}
                <span className="sr-only"> {content.text_44}</span>
              </a>
              <a
                href={content.href_45}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {content.text_46}
                <span className="sr-only"> {content.text_47}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
