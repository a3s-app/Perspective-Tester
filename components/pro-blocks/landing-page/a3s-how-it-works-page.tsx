import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  CircleHelp,
  FileCheck,
  FilePlus,
} from "lucide-react";

const startingPoints = [
  {
    title: "You have an ACR",
    icon: FileCheck,
    lead: "We start from your existing report.",
    questions: [
      "When was it created?",
      "Has your site changed since then?",
    ],
  },
  {
    title: "You don't have an ACR yet",
    icon: FilePlus,
    lead: "Your efforts don't go to waste.",
    questions: [
      "Has anyone tested the work you've already done?",
      "If someone asked for proof of conformance, what would you share?",
    ],
  },
] as const;

const afterCompliance = [
  "We set up monitoring for your site and review it every month.",
  "New issues and regressions are logged, prioritized and fixed.",
  "Your documentation is kept current with the site.",
] as const;

const vendors = [
  "We contact the vendor directly with a clear description of each issue and how to fix it.",
  "We track each issue until it is resolved and verified.",
  "Everyone involved works from the same record.",
] as const;

const tracking = [
  "Every issue is recorded with its status, owner and date.",
  "You receive a monthly progress report.",
  "Your records provide a documented history of compliance.",
] as const;

export function A3SHowItWorksPage() {
  return (
    <article className="bg-background">
      <header className="border-b py-20 sm:py-24">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground">
              <Link
                href="/a3s"
                className="rounded-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                A3S
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="sr-only">, </span>
              How it works
            </p>
            <h1 className="mt-5 max-w-[20ch] text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              How A3S makes your site accessible and keeps it that way
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A3S brings your website into conformance with WCAG and keeps
              it there. Here is what that involves, from the first
              assessment to ongoing monitoring.
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
              Where you are today
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most organizations we work with already have some accessibility
              work in place, such as fixes made over time, an accessibility
              plugin or an existing ACR. A3S is the missing piece: we validate
              what you already have, close the gaps and keep it documented.
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
                    Ask yourself
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
              If you&apos;re not sure of the answers, that&apos;s where A3S
              comes in.
            </p>
          </div>
        </div>
      </section>

      <Section id="process" title="Our process">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          We start by reviewing your site and agreeing on what is in scope.
          Certified specialists then manually test it with assistive
          technology, and we fix the issues we find, most serious first. Once every fix has been retested, we document your
          site&apos;s conformance in an ACR. From then on, we monitor your
          site every month so it stays that way.
        </p>
        <p>
          <a
            href="https://www.a3s.app/program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm text-base font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            See the full process on a3s.app
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </p>
      </Section>

      <Section id="after-compliance" title="After your site is compliant">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          An ACR reflects your site on the date it was tested. New pages,
          documents and system updates can introduce new issues, so
          conformance has to be maintained.
        </p>
        <CheckList items={afterCompliance} />
      </Section>

      <Section id="vendors" title="Working with your vendors">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Some issues sit in systems managed by others, such as your CMS
          provider. We handle that communication for you.
        </p>
        <CheckList items={vendors} />
      </Section>

      <Section id="tracking" title="Tracking and reporting">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          We keep track of everything. Every issue, fix and retest is
          documented in one clear, organized record that you can share with
          anyone who asks.
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
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-b py-14 sm:py-16">
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
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
          <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
