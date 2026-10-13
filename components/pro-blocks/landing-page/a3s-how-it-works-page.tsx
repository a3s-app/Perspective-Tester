"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/a3s-how-it-works-page.json";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  CircleHelp,
  FileCheck,
  FilePlus,
} from "lucide-react";

const contentIcons = { FileCheck, FilePlus };

export function A3SHowItWorksPage() {
  const content = useSection("a3s-how-it-works-page", defaults, contentIcons);
  const startingPoints = content.startingPoints;
  const afterCompliance = content.afterCompliance;
  const vendors = content.vendors;
  const tracking = content.tracking;

  return (
    <article className="bg-background">
      <header className="border-b py-20 sm:py-24">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground">
              <Link
                href={content.href_1}
                className="rounded-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                {content.text_2}
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="sr-only">, </span>
              {content.paragraph_3}
            </p>
            <h1 className="mt-5 max-w-[20ch] text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              {content.heading_4}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {content.paragraph_5}
            </p>
          </div>
        </div>
      </header>

      <section
        id="starting-point"
        aria-labelledby="starting-point-heading"
        className="border-b py-16 sm:py-20"
      >
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2
              id="starting-point-heading"
              className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
            >
              {content.heading_6}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {content.paragraph_7}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {startingPoints.map((option) => (
                <div
                  key={option.title}
                  className="flex flex-col rounded-2xl border bg-card p-6 sm:p-8"
                >
                  <span
                    className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <option.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em] text-foreground">
                    {option.title}
                  </h3>
                  <p className="mt-1.5 text-base text-muted-foreground">
                    {option.lead}
                  </p>
                  <p className="mt-6 border-t pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {content.paragraph_8}
                  </p>
                  <ul className="mt-4 flex flex-col gap-4">
                    {option.questions.map((question) => (
                      <li
                        key={question}
                        className="flex gap-3 text-base leading-relaxed text-foreground"
                      >
                        <CircleHelp
                          className="mt-1 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base font-medium text-foreground sm:text-lg">
              {content.paragraph_9}
            </p>
          </div>
        </div>
      </section>

      <Section id="process" title={content.title_10}>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.paragraph_11}
        </p>
        <p>
          <a
            href={content.href_12}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm text-base font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {content.text_13}
            <span className="sr-only"> {content.text_14}</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </p>
      </Section>

      <Section id="after-compliance" title={content.title_15}>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.paragraph_16}
        </p>
        <CheckList items={afterCompliance} />
      </Section>

      <Section id="vendors" title={content.title_17}>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.paragraph_18}
        </p>
        <CheckList items={vendors} />
      </Section>

      <Section id="tracking" title={content.title_19}>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.paragraph_20}
        </p>
        <CheckList items={tracking} />
      </Section>
    </article>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const content = useSection("a3s-how-it-works-page", defaults, contentIcons);
  const tracking = content.tracking;

  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-b py-14 sm:py-16"
    >
      <div className="container-padding-x container mx-auto">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[14rem_1fr] md:gap-12">
          <h2
            id={headingId}
            className="text-2xl font-semibold tracking-[-0.02em] text-foreground"
          >
            {title}
          </h2>
          <div className="flex flex-col gap-6">{children}</div>
        </div>
      </div>
    </section>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  const content = useSection("a3s-how-it-works-page", defaults, contentIcons);

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-base leading-relaxed text-foreground"
        >
          <Check
            className="mt-1 size-4 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
