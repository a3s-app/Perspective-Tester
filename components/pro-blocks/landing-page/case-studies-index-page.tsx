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

const evidence = [
  {
    label: "Cadence",
    value: "Monthly audit cycles",
    detail: "run without a gap",
  },
  {
    label: "Coverage",
    value: "Public Pages",
    detail: "tested and dated in the record",
  },
  {
    label: "Repairs",
    value: "Critical issues addressed",
    detail: "retested before the cycle closes",
  },
] as const;

const stMarysFacts = [
  {
    label: "Scale",
    value: "4,000+ pages",
    detail: "across the county website",
  },
  {
    label: "Team",
    value: "3 developers",
    detail: "carrying the remediation work",
  },
  {
    label: "Deadline",
    value: "April 2027",
    detail: "ADA Title II, populations of 50,000 or more",
  },
] as const;

const storyStructure = [
  {
    title: "The constraint",
    detail:
      "One county IT specialist was carrying the website, networks, accounts, and a new accessibility mandate.",
  },
  {
    title: "The operating decision",
    detail:
      "Replace the expensive one-time audit with a monthly test, fix, verify, and document cycle.",
  },
  {
    title: "The proof",
    detail:
      "Keep every test and repair in one record so the county can show what changed and what comes next.",
  },
] as const;

export function CaseStudiesIndexPage() {
  return (
    <div className="overflow-clip bg-background">
      <header className="relative isolate min-h-[34rem] overflow-hidden bg-[oklch(0.13_0.035_255)] text-white sm:min-h-[38rem]">
        <Image
          src={assetPath(
            "/case-studies/kit-carson-county/county-road.webp",
          )}
          alt=""
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
              Case studies
            </p>
            <h1 className="mt-5 max-w-[16ch] text-balance text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              Accessibility work, shown in the record.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/82 sm:text-lg">
              See how public organizations turn high-stakes accessibility
              requirements into practical systems, verified repairs, and
              evidence they can stand behind.
            </p>
            <a
              href="#published-studies"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[oklch(0.18_0.035_255)] transition-colors hover:bg-[oklch(0.93_0.02_55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore the published study
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
                See what accessibility work looks like in practice.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Each study follows a real organization through the barriers it
                faced, the decisions it made, and the evidence it keeps.
              </p>
            </div>

            <article className="mt-12 overflow-hidden rounded-2xl bg-[oklch(0.18_0.035_255)] text-white lg:grid lg:grid-cols-[1.08fr_.92fr]">
              <figure className="relative min-h-80 overflow-hidden sm:min-h-[28rem] lg:min-h-full">
                <Image
                  src={assetPath(
                    "/case-studies/kit-carson-county/county-prairie.webp",
                  )}
                  alt="Prairie grass beneath a wide blue sky in Kit Carson County, Colorado"
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
                    A rural Colorado county built an ongoing accessibility
                    program around the operating budget it already had.
                  </p>
                  <div className="shrink-0 rounded-lg bg-white p-1.5">
                    <Image
                      src={assetPath(
                        "/case-studies/kit-carson-county/county-logo.png",
                      )}
                      alt="Kit Carson County official logo"
                      width={263}
                      height={200}
                      className="h-11 w-auto rounded-sm sm:h-12"
                    />
                  </div>
                </figcaption>
              </figure>

              <div className="flex flex-col p-6 sm:p-9 lg:p-10 xl:p-12">
                <p className="text-sm font-semibold text-[oklch(0.82_0.11_55)]">
                  Local government · Colorado
                </p>
                <h3 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                  Kit Carson County
                </h3>
                <blockquote className="mt-7 border-y border-white/16 py-6">
                  <p className="text-pretty text-xl font-semibold leading-snug text-white sm:text-2xl">
                    “I feel like I&apos;m trying to keep the Titanic afloat with
                    a spoon.”
                  </p>
                  <footer className="mt-3 text-sm text-white/66">
                    Todd Holmes, IT Support Specialist
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
                  <Link href="/case-studies/kit-carson-county" prefetch>
                    Read the Kit Carson County case study
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>

            <article className="mt-8 overflow-hidden rounded-2xl bg-[oklch(0.18_0.035_255)] text-white lg:grid lg:grid-cols-[.92fr_1.08fr]">
              <div className="flex flex-col p-6 sm:p-9 lg:p-10 xl:p-12">
                <p className="text-sm font-semibold text-[oklch(0.82_0.11_55)]">
                  Local government &middot; Maryland
                </p>
                <h3 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                  St. Mary&apos;s County
                </h3>
                <blockquote className="mt-7 border-y border-white/16 py-6">
                  <p className="text-pretty text-xl font-semibold leading-snug text-white sm:text-2xl">
                    &ldquo;You guys give us a list and we crank out the
                    changes.&rdquo;
                  </p>
                  <footer className="mt-3 text-sm text-white/66">
                    Robert Horner, Senior Software Developer
                  </footer>
                </blockquote>

                <dl className="mt-2 divide-y divide-white/14">
                  {stMarysFacts.map((item) => (
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
                  <Link href="/case-studies/st-marys-county" prefetch>
                    Read the St. Mary&apos;s County case study
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <figure className="relative order-first min-h-64 overflow-hidden lg:order-last lg:min-h-full">
                <Image
                  src={assetPath(
                    "/case-studies/st-marys-county/county-elms-beach.webp",
                  )}
                  alt="Tidal water fringed with reeds and woodland at Elms Beach, St. Mary&apos;s County, Maryland"
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
                    A Maryland county working towards the April 2027 federal
                    deadline with a three-person team and a documented monthly
                    cycle.
                  </p>
                  <div className="shrink-0 rounded-lg bg-white p-1.5">
                    <Image
                      src={assetPath(
                        "/case-studies/st-marys-county/county-seal.png",
                      )}
                      alt="St. Mary&apos;s County, Maryland official seal"
                      width={288}
                      height={288}
                      className="h-11 w-auto rounded-sm sm:h-12"
                    />
                  </div>
                </figcaption>
              </figure>
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
                A case study should show the decisions, not just the outcome.
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Each story follows the work from the original pressure through
                the repair and into the evidence kept afterward.
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
                    0{index + 1}
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
                  Know what you are facing before you decide anything.
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  We will spend about an hour reviewing your site at no cost,
                  then explain the barriers, the risk, and a practical path
                  forward.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
                <Button asChild size="lg" className="min-h-11 px-6">
                  <Link href="/contact" prefetch>
                    Request a no-cost review
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-11 px-6">
                  <Link href="/a3s" prefetch>
                    See how A3S works
                  </Link>
                </Button>
              </div>
            </div>

            <p className="mx-auto mt-7 flex max-w-5xl items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2
                className="size-4 shrink-0 text-[oklch(0.42_0.11_145)]"
                aria-hidden="true"
              />
              A clear assessment, with no obligation to continue.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
