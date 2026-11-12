"use client";

import Link from "next/link";
import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/accessibility-statement-page.json";

// A plain document, not a marketing page: a heading, short sections in the
// order W3C's statement guidance uses (commitment, conformance status,
// feedback, compatibility, technical specifications, assessment approach,
// date), and nothing promotional.
// https://www.w3.org/WAI/planning/statements/

const H2 = "text-xl font-semibold text-foreground";
const P = "text-base leading-relaxed text-muted-foreground";
const LIST = "flex list-disc flex-col gap-2 pl-6 text-base text-muted-foreground";
const LINK =
  "font-medium text-foreground underline underline-offset-4 hover:text-primary [overflow-wrap:anywhere]";

// "November 13, 2026" → "2026-11-13", read in local time so the day never shifts.
function isoDate(label: string) {
  const d = new Date(label);
  if (Number.isNaN(d.getTime())) return undefined;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  if (!heading) return null;
  return (
    <section className="flex flex-col gap-3">
      <h2 className={H2}>{heading}</h2>
      {children}
    </section>
  );
}

export function AccessibilityStatementPage() {
  const fromCms = useSection("accessibility-statement-page", defaults);
  // Until Sanity holds this layout's fields, show the bundled text rather
  // than a page of empty headings.
  const content = fromCms.heading_1 ? fromCms : defaults;

  return (
    <article className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex max-w-3xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <h1 className="heading-xl text-balance text-foreground">
            {content.heading_1}
          </h1>
          <p className={P}>{content.paragraph_2}</p>
        </header>

        <Section heading={content.heading_3}>
          <p className={P}>{content.paragraph_4}</p>
          <p className={P}>{content.paragraph_5}</p>
        </Section>

        <Section heading={content.heading_6}>
          <p className={P}>{content.paragraph_7}</p>
        </Section>

        <Section heading={content.heading_8}>
          <p className={P}>{content.paragraph_9}</p>
          <ul className={LIST}>
            <li>
              {content.text_10}{" "}
              <a href={content.href_12} className={LINK}>
                {content.text_11}
              </a>
            </li>
            {content.text_13 ? (
              <li>
                <Link href={content.href_14} className={LINK}>
                  {content.text_13}
                </Link>
              </li>
            ) : null}
          </ul>
          <p className={P}>{content.paragraph_15}</p>
        </Section>

        <Section heading={content.heading_16}>
          <p className={P}>{content.paragraph_17}</p>
          <ul className={LIST}>
            {content.items_27.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section heading={content.heading_18}>
          <p className={P}>{content.paragraph_19}</p>
          <ul className={LIST}>
            {content.items_20.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={P}>{content.paragraph_21}</p>
        </Section>

        <Section heading={content.heading_22}>
          <p className={P}>{content.paragraph_23}</p>
          <ul className={LIST}>
            {content.items_24.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <footer className="border-t pt-6">
          <p className="text-sm text-muted-foreground">
            {content.paragraph_25}{" "}
            <time dateTime={isoDate(content.text_26)}>{content.text_26}</time>.
          </p>
        </footer>
      </div>
    </article>
  );
}
