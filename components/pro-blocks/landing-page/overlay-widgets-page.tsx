"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  ArrowRight,
  Scale,
  Gavel,
  FileWarning,
  Landmark,
  ShieldAlert,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

type CaseRecord = {
  number: string;
  icon: typeof Scale;
  title: string;
  caseName: string;
  meta: string;
  body: React.ReactNode;
  sources: { label: string; href: string }[];
};

const records: CaseRecord[] = [
  {
    number: "01",
    icon: Gavel,
    title: "A court settlement names AudioEye as insufficient",
    caseName: "LightHouse for the Blind v. ADP TotalSource",
    meta: "Filed 2020 · Settled 2021",
    body: (
      <>
        ADP was a paying AudioEye customer and was sued anyway because blind
        employees could not use its platform. The settlement states that
        overlays such as AudioEye and accessiBe{" "}
        <span className="text-foreground font-medium">
          &ldquo;do not suffice to achieve Accessibility&rdquo;
        </span>{" "}
        and requires expert human auditing and real code fixes.
      </>
    ),
    sources: [
      {
        label: "dralegal.org",
        href: "https://dralegal.org/case/lighthouse-for-the-blind-and-visually-impaired-v-adp-totalsource/",
      },
    ],
  },
  {
    number: "02",
    icon: Scale,
    title: "Widgets do not stop lawsuits",
    caseName: "Murphy v. Eyebobs, LLC",
    meta: "W.D. Pa. 2021",
    body: (
      <>
        The website ran an overlay. The suit proceeded anyway, and the class
        settlement required exactly what the widget promised to replace: a real
        audit, an accessibility consultant, an internal team, and staff
        training, plus the plaintiff&rsquo;s attorney fees.{" "}
        <span className="text-foreground font-medium">
          Nearly 600 companies running widgets were sued in 2022 alone.
        </span>
      </>
    ),
    sources: [
      { label: "lflegal.com", href: "https://lflegal.com/2021/11/overlay-legal-update/" },
      { label: "overlaytimeline.com", href: "https://overlaytimeline.com" },
    ],
  },
  {
    number: "03",
    icon: FileWarning,
    title: "The vendor's compliance letter is not a defense",
    caseName: "Quezada v. U.S. Wings",
    meta: "S.D.N.Y. 2021",
    body: (
      <>
        The site owner held audit statements from its overlay vendor claiming
        compliance. The court refused to dismiss the case: the burden of proving
        the site actually works for people with disabilities{" "}
        <span className="text-foreground font-medium">
          stays with the site owner, not the vendor&rsquo;s paperwork.
        </span>
      </>
    ),
    sources: [
      {
        label: "tammaninc.com",
        href: "https://tammaninc.com/learn/the-legal-risks-of-using-an-overlay/",
      },
    ],
  },
  {
    number: "04",
    icon: Landmark,
    title: "Federal regulators fined a widget vendor $1,000,000",
    caseName: "FTC Final Order Against accessiBe",
    meta: "April 2025",
    body: (
      <>
        The Federal Trade Commission&rsquo;s final order requires a{" "}
        <span className="text-foreground font-medium">$1,000,000 payment</span>{" "}
        and bars the company from claiming its automated product can make any
        website compliant, or keep it compliant, without proof. Over 1,000
        accessibility professionals have signed a public statement that overlays
        do not work.
      </>
    ),
    sources: [
      {
        label: "ftc.gov",
        href: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million",
      },
      { label: "overlayfactsheet.com", href: "https://overlayfactsheet.com" },
    ],
  },
];

const stats = [
  { value: "$1,000,000", label: "FTC penalty against a leading overlay vendor" },
  { value: "~600", label: "Companies running widgets still sued in 2022 alone" },
  { value: "1,000+", label: "Accessibility professionals who signed against overlays" },
];

export function OverlayWidgetsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Tagline>
              <ShieldAlert className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">The Overlay Record</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Accessibility Widgets Do Not Deliver Compliance
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Overlay widgets, including AudioEye, accessiBe, and
                UserWay, add a toolbar over a website. They do not fix the
                code underneath, and courts and federal regulators treat them
                accordingly. Here is what the record actually says.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/a3s">
                  See the Real Fix
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Record - 4 cases */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>What Courts &amp; Regulators Said</Tagline>
            <h2 className="heading-lg text-foreground">
              Four Things Every Website Owner Should Know
            </h2>
            <p className="text-muted-foreground text-base">
              A widget is a subscription, not a shield. Every one of these
              involved a site that was running an overlay.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {records.map((record) => (
              <Card
                key={record.number}
                className="gap-0 overflow-hidden rounded-xl border border-l-4 border-l-primary p-0 shadow-none"
              >
                <CardContent className="flex h-full flex-col gap-4 p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <record.icon className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      Record {record.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-foreground text-lg font-semibold">
                      {record.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground">
                      {record.caseName}
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        &middot; {record.meta}
                      </span>
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {record.body}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
                    {record.sources.map((source) => (
                      <a
                        key={source.href}
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-xs transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {source.label}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-xl border bg-card p-6 text-center shadow-sm sm:p-8"
              >
                <span className="text-primary text-3xl font-semibold sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="bg-foreground mx-auto flex max-w-5xl flex-col gap-6 rounded-2xl p-8 shadow-sm sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-background text-2xl font-semibold sm:text-3xl">
                The law measures your actual website, not your vendor invoice.
              </h2>
              <p className="text-background/70 max-w-2xl text-sm leading-relaxed sm:text-base">
                Compliance requires human testing by accessibility specialists
                and fixes to the underlying code. That is exactly what
                Perspective Tester&rsquo;s A3S program provides.
              </p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "IAAP-certified manual testing",
                  "Real code remediation",
                  "VPAT & legal documentation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="text-background/80 h-4 w-4 shrink-0" />
                    <span className="text-background/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button asChild size="lg" variant="secondary" className="shrink-0">
              <Link href="/a3s">
                Explore A3S
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
