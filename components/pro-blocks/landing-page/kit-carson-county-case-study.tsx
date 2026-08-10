import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  ImageIcon,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/utils";
import {
  AuditMethodExplorer,
  BudgetLoopArtwork,
  CriticalIssueLedger,
  DeadlineTimeline,
  DocumentDecisionArt,
  EvidenceTrail,
  HeroArtwork,
  ProgramLoop,
  WorkloadNetwork,
} from "@/components/pro-blocks/landing-page/kit-carson-case-study-art";

const effortList = [
  {
    icon: ImageIcon,
    title: "Tagged every site image by hand",
    detail: "A careful manual pass across the county website.",
  },
  {
    icon: FileCheck2,
    title: "Added automated PDF tagging",
    detail: "Every document ran through the tool before publishing.",
  },
  {
    icon: ShieldCheck,
    title: "Held back documents that failed",
    detail: "If a file did not come back clean enough, it stayed offline.",
  },
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
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/76 sm:text-lg">
              That&apos;s Todd Holmes. His title is IT support specialist. In
              practice, he is the county&apos;s IT department.
            </p>
          </div>
        </div>
      </header>

      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              When the law changed, one more responsibility landed on Todd.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                He built the county website. He also runs the computers,
                networks, and accounts for the courthouse, landfill, EMS, and
                sheriff&apos;s office.
              </p>
              <p>
                When Colorado made website accessibility the law, that landed
                on him too.
              </p>
            </div>
          </div>
          <WorkloadNetwork />
        </div>
      </section>

      <section className="border-b bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl">
              He was already doing real accessibility work.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Todd made the site better with the tools and time he had. The
              missing piece was knowing whether the work was enough.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {effortList.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex min-h-56 flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_8px_0_oklch(0.18_0.035_255/.06)]"
                  >
                    <Icon
                      className="size-6 text-[oklch(0.48_0.13_42)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <blockquote className="mt-14 border-t border-[oklch(0.48_0.13_42)] pt-8">
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
              Not neglect. A capable person doing real work with no idea
              whether it was enough. He wanted someone to look at the site and
              tell him how broken it was.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl">
                Why he was stuck
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  A whole-site audit and remediation can cost tens of
                  thousands. For a rural county, that is a capital request,
                  and it usually loses.
                </p>
                <p>
                  If it wins, what the county bought is a snapshot. The site
                  keeps changing, and a year later the same check is needed
                  again.
                </p>
                <p className="font-medium text-foreground">
                  What counties do have is a monthly budget. A3S was built to
                  fit the budget that exists.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <BudgetLoopArtwork />
              <blockquote className="rounded-2xl border border-border bg-white p-6 sm:p-8">
                <p className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                  “The cost of it was just ridiculous. So not doing that. At
                  that point, it&apos;s cheaper to pay the fine.”
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  Todd, after pricing traditional remediation
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary py-20 sm:py-24 lg:py-32">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
                Test, fix, check, repeat.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A3S treats accessibility as an operating rhythm, not a rescue
                project. Each month closes with fixes verified, evidence
                preserved, and no new workload handed back to Todd.
              </p>
            </div>

            <div className="mt-10">
              <ProgramLoop />
            </div>

            <div className="mt-16">
              <div className="mb-8 max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                  Six ways of testing, not one score
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Every method catches barriers the others miss, so the site is
                  checked six different ways. Select one to see what it reveals
                  and the evidence the county keeps.
                </p>
              </div>
              <AuditMethodExplorer />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl">
                Not everything gets fixed the same way.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                The durable format depends on what the document needs to do and
                how often it changes.
              </p>
            </div>
            <div className="mt-10">
              <DocumentDecisionArt />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-16 sm:py-20 lg:py-24">
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
                After nearly a year working together
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

      <section className="border-b bg-[oklch(0.18_0.035_255)] py-20 text-white sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                Continuous work. One clear record.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                We run the county&apos;s audit cycle every month, without a gap.
                Each cycle adds coverage, findings, repairs, and QA evidence to
                the same record instead of resetting it.
              </p>
              <p className="mt-6 text-base font-semibold leading-relaxed text-[oklch(0.78_0.12_52)]">
                Colorado&apos;s rule does not ask you to be perfect. It asks you
                to show what you&apos;re doing. Most counties are doing the work
                and cannot prove it.
              </p>
            </div>
            <EvidenceTrail />
          </div>
          <div className="mx-auto mt-12 max-w-6xl">
            <CriticalIssueLedger />
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-16 sm:py-20 lg:py-24">
        <div className="container-padding-x container mx-auto">
          <blockquote className="mx-auto max-w-5xl text-center">
            <Quote
              className="mx-auto size-9 text-[oklch(0.48_0.13_42)]"
              aria-hidden="true"
            />
            <p className="mt-7 text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              Todd still runs IT for the whole county. Accessibility just
              isn&apos;t his alone anymore.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              It is an ongoing, defensible program, and it does not stop.
            </p>
          </blockquote>
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
                Title II has applied to county websites for years. What is new
                is a specific technical standard and a date to meet it.
              </p>
            </div>

            <div className="mt-10">
              <DeadlineTimeline />
            </div>

            <div className="mt-12 grid gap-8 rounded-2xl bg-[oklch(0.18_0.035_255)] p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  A deadline is when you have to be there. It is not when the
                  risk starts.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                  We will spend about an hour looking at your site, at no cost,
                  and show you what you are facing before you decide anything.
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
