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

const options = [
  {
    label: "Option A",
    title: "A whole-site audit and remediation, $30K and up.",
    detail:
      "But that is a snapshot. The site keeps changing. A year later, the same question comes back.",
  },
  {
    label: "Option B",
    title: "A monthly service that actually keeps pace with the work.",
    detail:
      "But most options cost more than the county's monthly IT budget.",
  },
] as const;

const outcomes = [
  "Compliance demonstrated every month",
  "No more guessing whether the work is good enough",
  "Continuous documented record of progress",
  "Accessibility no longer Todd's solo burden",
  "Defensible against Colorado's requirement",
] as const;

export function KitCarsonCountyCaseStudy() {
  return (
    <article className="overflow-clip bg-background">
      <header className="relative isolate min-h-[calc(100dvh-4.25rem)] overflow-hidden bg-[oklch(0.13_0.035_255)] text-white">
        <HeroArtwork />
        <div className="container-padding-x container relative z-10 mx-auto flex min-h-[calc(100dvh-4.25rem)] items-end pb-10 pt-20 sm:pb-14 lg:pb-16 lg:pt-24">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <a
                href="https://kitcarsoncounty.colorado.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg bg-white/96 p-1.5 shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label="Visit the Kit Carson County official website"
              >
                <Image
                  src={assetPath(
                    "/case-studies/kit-carson-county/county-logo.png",
                  )}
                  alt="Kit Carson County official logo"
                  width={263}
                  height={200}
                  className="h-11 w-auto rounded-sm sm:h-12"
                />
              </a>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-white/78">
                <span>Kit Carson County, Colorado</span>
                <span className="h-4 w-px bg-white/30" aria-hidden="true" />
                <span>A3S case study</span>
              </div>
            </div>
            <h1 className="max-w-[21ch] text-balance text-[clamp(2.5rem,5.6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              “I feel like I&apos;m trying to keep the Titanic afloat with a
              spoon.”
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/76 sm:text-lg">
              <p>
                That&apos;s Todd Holmes, IT support specialist at Kit Carson
                County. His title on paper: one. His actual job: five public
                systems.
              </p>
              <p>
                When Colorado made website accessibility the law, it landed on
                his desk too.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              He was already doing real accessibility work.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Todd tagged every site image by hand. He added automated PDF
              tagging. He held back documents that failed quality checks. He was
              doing genuinely good work.
            </p>
            <p className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              But he had no idea if it was enough.
            </p>

            <blockquote className="mt-12 border-t border-[oklch(0.48_0.13_42)] pt-8">
              <Quote
                className="size-8 text-[oklch(0.48_0.13_42)]"
                aria-hidden="true"
              />
              <p className="mt-5 max-w-4xl text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
                “Are we there? No. I&apos;m doing the best I can. Is it going to
                be good enough? I don&apos;t know.”
              </p>
              <footer className="mt-5 text-sm font-medium text-muted-foreground">
                Todd Holmes, IT Support Specialist, Kit Carson County
              </footer>
            </blockquote>

            <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-foreground">
              Not neglect. A capable person doing real work with no clarity on
              whether he was meeting Colorado&apos;s requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
                The options were bad.
              </h2>

              <div className="mt-10 space-y-8">
                {options.map((option) => (
                  <div
                    key={option.label}
                    className="border-l-2 border-[oklch(0.48_0.13_42)] pl-6"
                  >
                    <p className="text-sm font-semibold text-[oklch(0.48_0.13_42)]">
                      {option.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                      {option.title}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {option.detail}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-10 rounded-2xl border border-border bg-secondary p-6 sm:p-8">
                <p className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                  “The cost of it was just ridiculous. So not doing that. At
                  that point, it&apos;s cheaper to pay the fine.”
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  Todd, after pricing traditional audits
                </footer>
              </blockquote>
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
                Todd still runs IT for the whole county. Accessibility just
                isn&apos;t his alone anymore.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                A3S runs the county&apos;s accessibility audit cycle every
                month. Each cycle produces the same evidence: tested pages,
                barriers found, fixes applied, verification complete.
              </p>
              <p className="mt-6 text-base font-semibold leading-relaxed text-[oklch(0.78_0.12_52)] sm:text-lg">
                That documented record is the proof Colorado requires.
                Todd&apos;s answer changed from “I don&apos;t know” to “I have
                proof.”
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
                src={assetPath(
                  "/case-studies/kit-carson-county/county-sunset-prairie.webp",
                )}
                alt="Sunset over an open prairie of wild sunflowers"
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
                In his own words
              </p>
              <p className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
                “Don&apos;t know where I would be without you.”
              </p>
              <footer className="mt-7 text-sm font-medium text-white/68">
                Todd Holmes, Kit Carson County
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
                Continuous compliance. One clear record.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Colorado&apos;s rule doesn&apos;t ask you to be perfect. It asks
                you to show what you&apos;re doing. Most counties are doing the
                work but can&apos;t prove it. Kit Carson County now proves it
                every month.
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
                Where your county stands
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Colorado&apos;s accessibility deadline is real. Most counties
                are doing the work but lack proof they&apos;re doing it.
              </p>
            </div>

            <div className="mt-10 grid gap-8 rounded-2xl bg-[oklch(0.18_0.035_255)] p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  We&apos;ll spend an hour looking at your site, at no cost.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                  You will see exactly where you stand before the deadline hits.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full whitespace-nowrap bg-white text-[oklch(0.18_0.035_255)] hover:bg-white/90 focus-visible:ring-white lg:w-auto"
              >
                <Link href="/contact">
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
                DOJ Title II deadlines
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="https://oit.colorado.gov/accessibility-law"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Colorado accessibility law
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
