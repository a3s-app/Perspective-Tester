import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AuditLoopDiagram,
  IssueLifecycleDiagram,
  MonitoringDiagram,
  ProcessOverviewDiagram,
  VendorHubDiagram,
  VpatValidityDiagram,
} from "@/components/pro-blocks/landing-page/a3s-how-it-works-diagrams";

type Stage = {
  id: string;
  title: string;
  intro: string;
  steps: readonly string[];
  deliverables: readonly string[];
  diagram?: ReactNode;
  /** A short callout shown under the diagram. */
  note?: { title: string; body: string };
  /** Cards shown under the intro, e.g. which stages a practice runs in. */
  when?: readonly { label: string; title: string; body: string }[];
};

/*
 * Vendor coordination is not a stage of its own: it runs inside stages 02,
 * 04 and 05. It gets its own section after the numbered stages instead.
 */
const vendorSection: Stage = {
  id: "vendors",
  title: "We handle the contact with your vendors",
  intro:
    "Many barriers sit in code or products you don't control: like your CMS or your theme. Instead of handing you a list to chase, we contact the vendor, give them what they need to fix it, and follow it through to a verified fix.",
  when: [
    {
      label: "Stage 02",
      title: "During audit and remediation",
      body: "Barriers in vendor-owned code go to that vendor as soon as they are found, with a suggested fix.",
    },
    {
      label: "Stage 04",
      title: "During monitoring",
      body: "When a vendor update breaks something, it is logged as a regression and sent straight back to that vendor.",
    },
    {
      label: "Stage 05",
      title: "In tracking and reporting",
      body: "Vendor-owned issues stay in your record with their status and turnaround, so you can see who is holding what.",
    },
  ],
  steps: [
    "Contact the vendor directly on your behalf.",
    "Share each issue in full through a secure link: the page, WCAG criterion, steps to reproduce and a suggested fix.",
    "Keep the conversation on the issue itself, so context never gets lost in email.",
    "Track acknowledgement and turnaround for every vendor, and escalate what stalls.",
    "Retest the vendor's fix before the issue is closed.",
  ],
  deliverables: [
    "Vendors contacted and followed up for you",
    "One shared record across everyone who touches the site",
    "Vendor-owned barriers documented while they remain open",
  ],
  diagram: <VendorHubDiagram />,
};

const stages: readonly Stage[] = [
  {
    id: "scope",
    title: "Scope and ownership",
    intro:
      "Before anything is tested, we agree on what is in scope and who owns each part of the site.",
    steps: [
      "Inventory the pages, templates, documents and tools on your site.",
      "Identify who owns each one: your staff, or your developer or CMS vendor.",
      "Set the priority pages and the key tasks residents complete, like paying a bill or finding a meeting.",
      "Review and update your accessibility statement.",
    ],
    deliverables: [
      "Scope document",
      "Owner for every part of the site",
      "Updated accessibility statement",
    ],
  },
  {
    id: "audit",
    title: "Audit and remediate",
    intro:
      "Auditing and fixing run together, not one after the other. As soon as a barrier is found it is ranked and sent for fixing, so the most serious problems are resolved while testing continues.",
    steps: [
      "Scan every page in scope against WCAG 2.2 AA.",
      "Test priority pages and key tasks with screen readers, keyboard only and zoom.",
      "Log each barrier with its page, WCAG criterion, how it was found and steps to reproduce.",
      "Rank it by impact. Anything that stops a resident from finishing a task is fixed first.",
      "Fix what we can reach directly. Anything owned by your staff or a vendor goes to them with the details and a suggested fix, and we handle the vendor contact.",
    ],
    deliverables: [
      "Audit record with every barrier found",
      "Prioritized remediation plan",
      "Monthly progress report",
    ],
    diagram: <AuditLoopDiagram />,
  },
  {
    id: "verify",
    title: "Verify",
    intro:
      "A fix is not done when someone says it is. It is done when a specialist confirms it.",
    steps: [
      "Retest every fix the same way the barrier was found.",
      "Send fixes that fall short back to their owner.",
      "Close an issue only after a specialist verifies it.",
      "Issue a VPAT documenting your conformance to WCAG 2.2 AA, dated the day the site was tested.",
    ],
    deliverables: [
      "Verified record of every fix",
      "VPAT, dated the day of testing",
    ],
    diagram: <VpatValidityDiagram />,
    note: {
      title: "A VPAT is only accurate on the day it was tested",
      body: "It describes your site exactly as it was when we tested it. The next new page, uploaded PDF or CMS update can make it out of date. That is why the work continues after this stage.",
    },
  },
  {
    id: "monitor",
    title: "Monitor for changes",
    intro:
      "Once your site is compliant, we set up a monitor for it. From then on, every monthly cycle focuses on what changed, so a new page, upload or update can't quietly undo the work.",
    steps: [
      "Set up a monitor on every page in scope.",
      "Rescan each month and compare the results with the last cycle.",
      "Retest priority pages and key tasks by hand.",
      "Check new pages, new documents and template changes.",
      "Log anything that breaks again as a regression and fix it, or send it back to the vendor whose update caused it, ahead of new work.",
      "Retest what changed, so your VPAT and accessibility statement still describe the site as it is today.",
    ],
    deliverables: [
      "A monitor set up for your site",
      "Regressions caught and closed every cycle",
      "A VPAT that stays accurate as the site changes",
    ],
    diagram: <MonitoringDiagram />,
  },
  {
    id: "track",
    title: "Track and report",
    intro:
      "Every issue has a status, an owner and a date, from the moment it is found to the moment a specialist verifies it.",
    steps: [
      "Move each issue through the same five statuses.",
      "Date every change and record who made it.",
      "Close each monthly cycle with a written report.",
    ],
    deliverables: [
      "Pages tested and the methods used",
      "Every barrier, mapped to WCAG 2.2 AA",
      "Owner and status of each open issue",
      "Fixes applied and verified",
      "Regressions caught since the last cycle",
    ],
    diagram: <IssueLifecycleDiagram />,
  },
];

const phases = [
  { label: "Getting compliant", stages: stages.slice(0, 3), offset: 0 },
  { label: "Staying compliant", stages: stages.slice(3), offset: 3 },
] as const;

const number = (index: number) => String(index + 1).padStart(2, "0");

export function A3SHowItWorksPage() {
  return (
    <article className="bg-background">
      <header className="py-20 sm:py-24 lg:py-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-5xl">
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
            <h1 className="mt-5 max-w-[20ch] text-balance text-[clamp(2.25rem,4.8vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
              How A3S makes your site accessible and keeps it that way
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Five stages, the same for every client. The first three get your
              site to WCAG 2.2 AA. The last two repeat every month to keep it
              there. Throughout, we handle the contact with your vendors.
            </p>

            <figure className="mt-14 rounded-2xl border bg-card p-6 sm:p-10">
              <ProcessOverviewDiagram />
            </figure>

            <nav aria-label="Process stages" className="mt-8">
              <ol className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {stages.map((stage, index) => (
                  <li key={stage.id}>
                    <a
                      href={`#${stage.id}`}
                      className="rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="mr-1.5 tabular-nums text-primary">
                        {number(index)}
                      </span>
                      {stage.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#vendors"
                    className="rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="mr-1.5 text-primary" aria-hidden="true">
                      +
                    </span>
                    Working with vendors
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {phases.map((phase, phaseIndex) => (
        <Fragment key={phase.label}>
          {phaseIndex === 1 && <ComplianceBreak />}
          <section aria-label={phase.label}>
            <div className="container-padding-x container mx-auto">
              <div className="mx-auto max-w-5xl">
                <p
                  className={`pt-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground ${
                    phaseIndex === 0 ? "border-t" : "sm:pt-14"
                  }`}
                >
                  {phase.label}
                </p>
                {phase.stages.map((stage, index) => (
                  <StageBlock
                    key={stage.id}
                    stage={stage}
                    kicker={number(phase.offset + index)}
                  />
                ))}
              </div>
            </div>
          </section>
        </Fragment>
      ))}

      <section
        aria-label="Working with vendors"
        className="border-y bg-secondary/50"
      >
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-5xl">
            <p className="pt-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:pt-14">
              Working with vendors
            </p>
            <StageBlock stage={vendorSection} kicker="Alongside stages 02 to 05" />
          </div>
        </div>
      </section>

      <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-2xl bg-[oklch(0.18_0.035_255)] p-8 text-white sm:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                We&apos;ll spend an hour looking at your site, at no cost.
              </p>
              <p className="mt-4 text-base text-white/70">
                You will see exactly where you stand.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="whitespace-nowrap bg-white text-[oklch(0.18_0.035_255)] hover:bg-white/90 focus-visible:ring-white"
              >
                <Link href="/contact">
                  Check my site
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="whitespace-nowrap border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white focus-visible:ring-white"
              >
                <Link href="/a3s">A3S plans and pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

/*
 * Hard break between "getting compliant" and "staying compliant". Most
 * buyers assume the work ends at stage 03; this band says plainly that it
 * doesn't, and hands off to the monitoring stage.
 */
function ComplianceBreak() {
  return (
    <section
      aria-labelledby="compliance-break-heading"
      className="bg-[oklch(0.18_0.035_255)] py-20 text-white sm:py-24"
    >
      <div className="container-padding-x container mx-auto">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
            After stage 03
          </p>
          <h2
            id="compliance-break-heading"
            className="mt-4 max-w-[20ch] text-balance text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            Most people think this is it.
          </h2>
          <div className="mt-8 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-2 md:gap-12">
            <p className="text-xl font-semibold leading-snug sm:text-2xl">
              It isn&apos;t. Compliance, and the VPAT that proves it, describe
              one day.
            </p>
            <p className="text-base leading-relaxed text-white/72 sm:text-lg">
              Your site changes every week, and any change can bring a barrier
              back. So once you&apos;re compliant, we set up a monitor for your
              site and keep watching it, every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageBlock({ stage, kicker }: { stage: Stage; kicker: string }) {
  const headingId = `${stage.id}-heading`;

  return (
    <div
      id={stage.id}
      role="region"
      aria-labelledby={headingId}
      className="grid scroll-mt-24 gap-8 py-12 sm:py-16 lg:grid-cols-[14rem_1fr] lg:gap-16"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-sm font-semibold tabular-nums text-primary">
          {kicker}
        </p>
        <h2
          id={headingId}
          className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
        >
          {stage.title}
        </h2>
      </div>

      <div className="flex min-w-0 flex-col gap-10">
        <p className="max-w-2xl text-lg leading-relaxed text-foreground">
          {stage.intro}
        </p>

        {stage.when && (
          <ul className="grid gap-4 sm:grid-cols-3">
            {stage.when.map((item) => (
              <li key={item.title} className="rounded-xl border bg-card p-5">
                <p className="font-mono text-xs font-medium text-primary">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        )}

        {stage.diagram && (
          <figure className="rounded-2xl border bg-card p-6 sm:p-8">
            {stage.diagram}
          </figure>
        )}

        {stage.note && (
          <aside className="border-l-2 border-primary pl-5">
            <p className="text-base font-semibold text-foreground">
              {stage.note.title}
            </p>
            <p className="mt-1.5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {stage.note.body}
            </p>
          </aside>
        )}

        <div className="grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-10">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              What we do
            </h3>
            <ol className="mt-5">
              {stage.steps.map((step, index) => (
                <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < stage.steps.length - 1 && (
                    <span
                      className="absolute bottom-0 left-[13.5px] top-8 w-px bg-border"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="relative flex size-7 shrink-0 items-center justify-center rounded-full border bg-card font-mono text-xs font-medium text-primary"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-base leading-relaxed text-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="self-start overflow-hidden rounded-xl border bg-card">
            <h3 className="border-b bg-secondary/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              What you get
            </h3>
            <ul className="divide-y">
              {stage.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 px-5 py-3.5 text-[15px] leading-snug text-foreground"
                >
                  <CircleCheck
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
