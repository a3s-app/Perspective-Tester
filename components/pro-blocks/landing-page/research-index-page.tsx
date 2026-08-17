import Link from "next/link";
import { ArrowRight, BookOpen, FileCheck2, Scale, ShieldQuestion } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { getAllResearch } from "@/lib/research";

const standards = [
  {
    icon: FileCheck2,
    title: "Primary sources, or nothing",
    body: "Claims rest on documents you can open: court filings, SEC disclosures, Federal Register notices, regulatory orders, published research and vendors' own documentation. Anything we could not verify against a primary source is left out.",
  },
  {
    icon: Scale,
    title: "The other side gets quoted",
    body: "Where a company disputes an inference drawn from a document, its position is quoted directly. Where research finds a product genuinely helps, that is reported alongside the failures.",
  },
  {
    icon: ShieldQuestion,
    title: "Corrections run against our own interest",
    body: "Each piece carries a section listing claims that do not hold up, including popular criticisms that would favour us commercially if we repeated them.",
  },
];

export function ResearchIndexPage() {
  const pieces = getAllResearch();

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <Tagline>
              <BookOpen className="text-primary h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-foreground">Research</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-foreground text-balance">
                Evidence reviews on accessibility tooling and compliance
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed lg:text-lg">
                Buying decisions in this field are usually made from marketing
                claims, because the underlying documents are scattered across
                court dockets, SEC filings and regulatory notices. These pieces
                collect those documents, quote them exactly, and cite every
                claim so you can check the work rather than take our word for
                it.
              </p>
            </div>

            <p className="text-muted-foreground border-l-2 pl-5 text-sm leading-relaxed">
              <span className="text-foreground font-medium">Disclosure:</span>{" "}
              Perspective Tester sells manual accessibility testing and code
              remediation, and competes with some of the companies examined
              here. That is the reason for the sourcing standard below, not an
              exception to it.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Pieces */}
      <section
        aria-labelledby="pieces-heading"
        className="bg-secondary section-padding-y border-b"
      >
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <h2 id="pieces-heading" className="heading-lg text-foreground">
              Published research
            </h2>

            <ul className="flex list-none flex-col gap-6 p-0">
              {pieces.map((piece) => (
                <li key={piece.slug}>
                  <article className="bg-background flex flex-col gap-5 rounded-xl border p-6 sm:p-8">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-foreground text-xl font-semibold text-balance sm:text-2xl">
                        <Link
                          href={`/research/${piece.slug}`}
                          className="hover:text-primary focus-visible:ring-ring rounded-xs transition-colors focus-visible:ring-2 focus-visible:outline-none"
                        >
                          {piece.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {piece.summary}
                      </p>
                    </div>

                    <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                      <div className="flex flex-col gap-0.5 border-t pt-2">
                        <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                          Question examined
                        </dt>
                        <dd className="text-foreground text-sm leading-relaxed">
                          {piece.question}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-0.5 border-t pt-2">
                        <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                          Subject
                        </dt>
                        <dd className="text-foreground text-sm leading-relaxed">
                          {piece.subject}
                        </dd>
                      </div>
                    </dl>

                    <div className="flex flex-col gap-2 border-t pt-4">
                      <p className="text-muted-foreground text-xs tracking-wide uppercase">
                        Built on
                      </p>
                      <ul className="flex list-none flex-wrap gap-2 p-0">
                        {piece.sourceKinds.map((kind) => (
                          <li
                            key={kind}
                            className="text-muted-foreground border-border rounded-md border px-2 py-1 text-xs"
                          >
                            {kind}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                      <p className="text-muted-foreground text-xs">
                        <span className="text-foreground font-medium tabular-nums">
                          {piece.referenceCount}
                        </span>{" "}
                        numbered references &middot; sources last checked{" "}
                        <time dateTime={piece.lastReviewed}>
                          {piece.lastReviewedLabel}
                        </time>
                      </p>
                      <Link
                        href={`/research/${piece.slug}`}
                        className="text-primary focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-xs text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:outline-none"
                      >
                        Read the review
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">: {piece.title}</span>
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Standards */}
      <section
        aria-labelledby="standards-heading"
        className="bg-background section-padding-y border-b"
      >
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <div className="section-title-gap-lg flex flex-col">
              <h2 id="standards-heading" className="heading-lg text-foreground">
                How these are written
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We publish research about products we compete with. That is only
                worth reading if the standard is visible and consistent, so here
                it is.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {standards.map((standard) => (
                <div key={standard.title} className="flex gap-4 border-t pt-5">
                  <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                    <standard.icon
                      className="text-primary h-4.5 w-4.5"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-foreground text-base font-semibold">
                      {standard.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {standard.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground border-t pt-5 text-sm leading-relaxed">
              Found something inaccurate or out of date? Write to{" "}
              <a
                href="mailto:Info@perspectivetester.com"
                className="text-primary hover:underline"
              >
                Info@perspectivetester.com
              </a>{" "}
              and we will correct it and record the date of the correction.
              Nothing in this section is legal advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
