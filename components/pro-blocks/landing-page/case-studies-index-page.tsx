"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/case-studies-index-page.json";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  SearchCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/utils";

export function CaseStudiesIndexPage() {
  const content = useSection("case-studies-index-page", defaults);
  const evidence = content.evidence;
  const storyStructure = content.storyStructure;

  return (
    <div className="overflow-clip bg-background">
      <header className="relative isolate min-h-[34rem] overflow-hidden bg-[oklch(0.13_0.035_255)] text-white sm:min-h-[38rem]">
        <Image
          src={assetPath(content.image_1)}
          alt={content.alt_2}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_52%]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.13_0.035_255/.97)_0%,oklch(0.13_0.035_255/.86)_44%,oklch(0.13_0.035_255/.36)_76%,oklch(0.13_0.035_255/.18)_100%)] max-md:bg-[linear-gradient(180deg,oklch(0.13_0.035_255/.76)_0%,oklch(0.13_0.035_255/.52)_38%,oklch(0.13_0.035_255/.94)_100%)]"
          aria-hidden="true"
        />
        <div className="container-padding-x container relative z-10 mx-auto flex min-h-[34rem] items-end py-14 sm:min-h-[38rem] sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[oklch(0.82_0.11_55)]">
              {content.paragraph_3}
            </p>
            <h1 className="mt-5 max-w-[16ch] text-balance text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              {content.heading_4}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/82 sm:text-lg">
              {content.paragraph_5}
            </p>
            <a
              href={content.href_6}
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[oklch(0.18_0.035_255)] transition-colors hover:bg-[oklch(0.93_0.02_55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.text_7}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <div>
        <section
          id="published-studies"
          aria-labelledby="published-studies-heading"
          className="scroll-mt-28 border-b bg-background py-20 sm:py-24 lg:py-28"
        >
          <div className="container-padding-x container mx-auto">
            <div className="max-w-3xl">
              <h2
                id="published-studies-heading"
                className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl"
              >
                {content.heading_8}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.paragraph_9}
              </p>
            </div>

            <article className="mt-12 overflow-hidden rounded-2xl bg-[oklch(0.18_0.035_255)] text-white lg:grid lg:grid-cols-[1.08fr_.92fr]">
              <figure className="relative min-h-80 overflow-hidden sm:min-h-[28rem] lg:min-h-full">
                <Image
                  src={assetPath(content.image_10)}
                  alt={content.alt_11}
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out motion-reduce:transition-none"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,oklch(0.1_0.03_255/.8)_100%)]"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-8">
                  <p className="max-w-sm text-sm font-medium leading-relaxed text-white/84">
                    {content.paragraph_12}
                  </p>
                  <div className="shrink-0 rounded-lg bg-white p-1.5">
                    <Image
                      src={assetPath(content.image_13)}
                      alt={content.alt_14}
                      width={263}
                      height={200}
                      className="h-11 w-auto rounded-sm sm:h-12"
                    />
                  </div>
                </figcaption>
              </figure>

              <div className="flex flex-col p-6 sm:p-9 lg:p-10 xl:p-12">
                <p className="text-sm font-semibold text-[oklch(0.82_0.11_55)]">
                  {content.paragraph_15}
                </p>
                <h3 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                  {content.heading_16}
                </h3>
                <blockquote className="mt-7 border-y border-white/16 py-6">
                  <p className="text-pretty text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {content.paragraph_17}
                  </p>
                  <footer className="mt-3 text-sm text-white/66">
                    {content.text_18}
                  </footer>
                </blockquote>

                <dl className="mt-2 divide-y divide-white/14">
                  {evidence.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-1 py-5 sm:grid-cols-[6rem_1fr] sm:gap-5"
                    >
                      <dt className="text-sm font-semibold text-white/82">
                        {item.label}
                      </dt>
                      <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-lg font-semibold tracking-[-0.015em] text-white">
                          {item.value}
                        </span>
                        <span className="text-sm text-white/66">
                          {item.detail}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <Button
                  asChild
                  className="mt-5 min-h-11 w-full justify-between bg-white px-5 text-[oklch(0.18_0.035_255)] hover:bg-[oklch(0.93_0.02_55)] focus-visible:ring-white focus-visible:ring-offset-[oklch(0.18_0.035_255)] sm:w-fit"
                >
                  <Link href={content.href_19} prefetch>
                    {content.text_20}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="case-study-method-heading"
          className="border-b bg-secondary py-20 sm:py-24 lg:py-28"
        >
          <div className="container-padding-x container mx-auto grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <div className="max-w-xl">
              <SearchCheck
                className="size-7 text-[oklch(0.48_0.13_42)]"
                aria-hidden="true"
              />
              <h2
                id="case-study-method-heading"
                className="mt-6 text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl"
              >
                {content.heading_21}
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.paragraph_22}
              </p>
            </div>

            <ol className="divide-y divide-border border-y border-border">
              {storyStructure.map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-7"
                >
                  <span
                    className="text-sm font-semibold text-[oklch(0.48_0.13_42)]"
                    aria-hidden="true"
                  >
                    {content.text_23}
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="case-studies-cta-heading"
          className="bg-background py-20 sm:py-24 lg:py-28"
        >
          <div className="container-padding-x container mx-auto">
            <div className="mx-auto max-w-5xl border-y border-border py-10 sm:py-14 lg:flex lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-2xl">
                <FileCheck2
                  className="size-7 text-[oklch(0.48_0.13_42)]"
                  aria-hidden="true"
                />
                <h2
                  id="case-studies-cta-heading"
                  className="mt-6 text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl"
                >
                  {content.heading_24}
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {content.paragraph_25}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
                <Button asChild size="lg" className="min-h-11 px-6">
                  <Link href={content.href_26} prefetch>
                    {content.text_27}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-h-11 px-6"
                >
                  <Link href={content.href_28} prefetch>
                    {content.text_29}
                  </Link>
                </Button>
              </div>
            </div>

            <p className="mx-auto mt-7 flex max-w-5xl items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2
                className="size-4 shrink-0 text-[oklch(0.42_0.11_145)]"
                aria-hidden="true"
              />
              {content.paragraph_30}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
