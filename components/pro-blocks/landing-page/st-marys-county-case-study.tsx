import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PenLine, Quote, SearchCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/utils";

const facts = [
  { value: "4,000+", label: "pages on the county website" },
  { value: "3", label: "developers on the county's team" },
  { value: "April 2027", label: "ADA Title II deadline" },
] as const;

const steps = [
  {
    icon: SearchCheck,
    title: "We find the issues",
    detail:
      "Testers certified through DHS's Trusted Tester program and the IAAP manually check every element on the page with assistive technology against WCAG 2.2 AA, catching what scanners cannot: how barriers play out for real users.",
  },
  {
    icon: PenLine,
    title: "Their team fixes them",
    detail: "Every finding comes with exactly what to change. No guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "We verify every fix",
    detail:
      "Nothing is marked resolved until we have retested it. Every finding and every fix goes on the record.",
  },
] as const;

const outcomes = [
  "Every finding, fix, and retest documented with dates",
  "Every page type checked with assistive technology, not just a scanner",
  "Monthly audit reports that build the compliance record",
  "A prioritised roadmap the team can actually work through",
  "Findings written as specific changes, not vague guidance",
  "Ready for the April 2027 Title II deadline, with proof",
] as const;

export function StMarysCountyCaseStudy() {
  return (
    <article className="overflow-clip bg-background">
      {/* ---------------------------------------------------------- Hero */}
      <header className="relative isolate min-h-[calc(100dvh-4.25rem)] overflow-hidden bg-[oklch(0.13_0.035_255)] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={assetPath(
                "/case-studies/st-marys-county/county-elms-beach.webp",
              )}
              alt="Tidal water fringed with reeds and woodland at Elms Beach, St. Mary&apos;s County, Maryland"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_46%]"
            />
          </div>
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.13_0.035_255/.95)_0%,oklch(0.13_0.035_255/.78)_44%,oklch(0.13_0.035_255/.3)_76%,transparent_100%)] max-md:bg-[linear-gradient(180deg,oklch(0.13_0.035_255/.86)_0%,oklch(0.13_0.035_255/.5)_48%,oklch(0.13_0.035_255/.8)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(0deg,oklch(0.13_0.035_255/.68)_0%,transparent_38%)]"
            aria-hidden="true"
          />
        </div>

        <div className="container-padding-x container relative z-10 mx-auto flex min-h-[calc(100dvh-4.25rem)] items-end pb-10 pt-20 sm:pb-14 lg:pb-16 lg:pt-24">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <a
                href="https://www.stmaryscountymd.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg bg-white/96 p-1.5 shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label="Visit the St. Mary's County official website"
              >
                <Image
                  src={assetPath("/case-studies/st-marys-county/county-seal.png")}
                  alt="St. Mary's County, Maryland official seal"
                  width={288}
                  height={288}
                  className="h-11 w-auto rounded-sm sm:h-12"
                />
              </a>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-white/78">
                <span>St. Mary&apos;s County, Maryland</span>
                <span className="h-4 w-px bg-white/30" aria-hidden="true" />
                <span>A3S case study</span>
              </div>
            </div>

            <h1 className="max-w-[20ch] text-balance text-[clamp(2.5rem,5.6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              Ready for the 2027 ADA deadline, with the record to prove it.
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/76 sm:text-lg">
              <p>
                Three developers. More than four thousand pages. One federal
                deadline that does not move.
              </p>
              <p>
                St. Mary&apos;s County is meeting it, and can show exactly how.
              </p>
            </div>

            <ul className="mt-8 flex list-none flex-wrap gap-2.5 p-0">
              {["WCAG 2.2 AA", "ADA Title II", "Local government"].map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/22 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/78"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------ The challenge */}
      <section className="border-b bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              The deadline was fixed. The team was not getting bigger.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Counties with a population of 50,000 or more have to meet the
              ADA&apos;s digital accessibility rule by April 2027. St.
              Mary&apos;s County had thousands of pages, a team of three, and a
              scanner that could not catch the problems that matter most.
            </p>
            <p className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              They needed the real barriers found, ranked, and proven fixed.
            </p>

            <blockquote className="mt-12 border-t border-[oklch(0.48_0.13_42)] pt-8">
              <Quote
                className="size-8 text-[oklch(0.48_0.13_42)]"
                aria-hidden="true"
              />
              <p className="mt-5 max-w-4xl text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
                &ldquo;You guys give us a list and we crank out the
                changes.&rdquo;
              </p>
              <footer className="mt-5 text-sm font-medium text-muted-foreground">
                Robert Horner, Senior Software Developer, St. Mary&apos;s County,
                Maryland
              </footer>
            </blockquote>

            <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-foreground">
              A capable in-house team, freed from the part that was slowing them
              down: working out what to fix first.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- The numbers */}
      <section
        aria-label="County at a glance"
        className="border-b bg-background py-16 sm:py-20"
      >
        <div className="container-padding-x container mx-auto">
          <dl className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border-l-[3px] border-[oklch(0.48_0.13_42)] pl-6"
              >
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block text-[clamp(2.25rem,3.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground">
                    {fact.value}
                  </span>
                  <span className="mt-2 block text-base leading-relaxed text-muted-foreground">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------- How it works */}
      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              How we got them there
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              It starts with a{" "}
              <strong className="font-semibold text-foreground">
                prioritised roadmap
              </strong>
              : the strategic plan for the audit, laying out what gets tested, in
              what order, and what the county can expect along the way. From
              there, the work runs on a monthly cycle.
            </p>

            <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
              {steps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <li
                    key={step.title}
                    className="flex flex-col bg-background p-7 sm:p-9"
                  >
                    <span
                      className="flex size-11 items-center justify-center rounded-xl bg-secondary"
                      aria-hidden="true"
                    >
                      <StepIcon className="size-5 text-[oklch(0.48_0.13_42)]" />
                    </span>
                    <span className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.48_0.13_42)]">
                      Step 0{index + 1}
                    </span>
                    <h3 className="mt-2.5 text-xl font-semibold tracking-[-0.02em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Results */}
      <section className="border-b bg-[oklch(0.18_0.035_255)] py-20 text-white sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                The county is not hoping it is compliant. It can show its work.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Every cycle produces the same evidence: pages tested, barriers
                found, fixes applied, verification complete, each one dated.
              </p>
              <p className="mt-6 text-base font-semibold leading-relaxed text-[oklch(0.78_0.12_52)] sm:text-lg">
                That documented record is what the Title II rule asks for.
              </p>
            </div>

            <figure className="rounded-2xl border border-white/14 bg-white/[0.04] p-7 sm:p-9">
              <div className="flex items-center gap-4 border-b border-white/14 pb-6">
                <span className="shrink-0 rounded-lg bg-white p-1.5">
                  <Image
                    src={assetPath("/case-studies/st-marys-county/county-seal.png")}
                    alt=""
                    width={288}
                    height={288}
                    className="h-10 w-auto rounded-sm"
                  />
                </span>
                <figcaption className="text-sm font-medium leading-relaxed text-white/78">
                  St. Mary&apos;s County, Maryland
                  <span className="mt-0.5 block text-white/56">
                    Monthly accessibility audit record
                  </span>
                </figcaption>
              </div>
              <dl className="divide-y divide-white/12">
                {[
                  { k: "Cadence", v: "Monthly audit cycle" },
                  { k: "Method", v: "Manual testing with assistive technology" },
                  { k: "Standard", v: "WCAG 2.2 Level AA" },
                  { k: "Closure", v: "Retested before a finding is marked resolved" },
                ].map((row) => (
                  <div key={row.k} className="grid gap-1 py-5 sm:grid-cols-[7rem_1fr] sm:gap-5">
                    <dt className="text-sm font-semibold text-white/82">{row.k}</dt>
                    <dd className="text-base leading-relaxed text-white">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Outcomes */}
      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
                What the county has now
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The rule does not ask a county to be perfect. It asks it to show
                what it is doing. St. Mary&apos;s County can show it, month by
                month.
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

      {/* ------------------------------------------------------------ CTA */}
      <section className="bg-secondary py-20 sm:py-24 lg:py-32">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
                Facing the same deadline?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The April 2027 Title II deadline applies to every local
                government serving a population of 50,000 or more.
              </p>
            </div>

            <div className="mt-10 grid gap-8 rounded-2xl bg-[oklch(0.18_0.035_255)] p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  We&apos;ll spend an hour looking at your site, at no cost.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                  You will see exactly where you stand.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full whitespace-nowrap bg-white text-[oklch(0.18_0.035_255)] hover:bg-white/90 focus-visible:ring-white lg:w-auto"
              >
                <Link href="/contact" prefetch>
                  Check my site
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span>Legal references:</span>
              <a
                href="https://www.ada.gov/resources/web-rule-first-steps/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                DOJ Title II web rule
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="https://www.stmaryscountymd.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                St. Mary&apos;s County, Maryland
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
