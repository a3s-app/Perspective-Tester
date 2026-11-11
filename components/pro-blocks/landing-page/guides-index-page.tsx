import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export type GuideCard = {
  href: string;
  title: string;
  description: string;
  dateLabel?: string;
  date?: string;
  readingTime?: string;
};

export function GuidesIndexPage({ guides }: { guides: GuideCard[] }) {
  return (
    <>
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <BookOpen
                className="h-3.5 w-3.5 text-primary"
                aria-hidden="true"
              />
              <span className="text-foreground">Guides</span>
            </Tagline>
            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Accessibility guides
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Practical guides drawn from our accessibility audits and testing
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <ul
            role="list"
            className={`mx-auto grid gap-6 ${guides.length > 1 ? "max-w-5xl md:grid-cols-2" : "max-w-2xl"}`}
          >
            {guides.map((guide) => (
              <li
                key={guide.href}
                className="group relative flex flex-col gap-4 rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg has-[a:focus-visible]:shadow-lg has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring sm:p-8"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-semibold leading-snug text-balance text-foreground">
                  <Link
                    href={guide.href}
                    prefetch
                    className="focus-visible:outline-none after:absolute after:inset-0 after:content-['']"
                  >
                    {guide.title}
                  </Link>
                </h2>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    {guide.dateLabel ? (
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays
                          className="h-3.5 w-3.5 text-primary"
                          aria-hidden="true"
                        />
                        <time dateTime={guide.date}>{guide.dateLabel}</time>
                      </span>
                    ) : null}
                    {guide.readingTime ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Clock
                          className="h-3.5 w-3.5 text-primary"
                          aria-hidden="true"
                        />
                        {guide.readingTime}
                      </span>
                    ) : null}
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                    aria-hidden="true"
                  >
                    Read guide
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
