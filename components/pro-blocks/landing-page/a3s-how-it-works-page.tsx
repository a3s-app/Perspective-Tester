import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AcrPaths } from "@/components/pro-blocks/landing-page/a3s-acr-paths";
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
  /** Cards shown under the intro, e.g. where a practice fits in. */
  when?: readonly { label: string; title: string; body: string }[];
};

/* ------------------------------------------------------------------ */
/* Stage content                                                       */
/* ------------------------------------------------------------------ */

const scope: Stage = {
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
};

const audit: Stage = {
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
};

const verify: Stage = {
  id: "verify",
  title: "Verify",
  intro:
    "A fix is not done when someone says it is. It is done when a specialist confirms it.",
  steps: [
    "Retest every fix the same way the barrier was found.",
    "Send fixes that fall short back to their owner.",
    "Close an issue only after a specialist verifies it.",
    "Issue an ACR documenting your conformance to WCAG 2.2 AA, dated the day the site was tested.",
  ],
  deliverables: ["Verified record of every fix", "ACR, dated the day of testing"],
  diagram: <VpatValidityDiagram />,
  note: {
    title: "An ACR is only accurate on the day it was tested",
    body: "It describes your site exactly as it was when we tested it. The next new page, uploaded PDF or CMS update can make it out of date. That is why the work continues after this stage.",
  },
};

/* Monitor and track appear in both paths, so each copy gets its own ids. */
const monitor = (uid: string): Stage => ({
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
    "Retest what changed, so your ACR and accessibility statement still describe the site as it is today.",
  ],
  deliverables: [
    "A monitor set up for your site",
    "Regressions caught and closed every cycle",
    "An ACR that stays accurate as the site changes",
  ],
  diagram: <MonitoringDiagram uid={uid} />,
});

const track = (uid: string): Stage => ({
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
  diagram: <IssueLifecycleDiagram uid={uid} />,
});

const refresh: Stage = {
  id: "refresh",
  title: "Bring your ACR up to date",
  intro:
    "We start from what you already have. Your existing ACR and your site as it is today tell us what has changed and what needs retesting.",
  steps: [
    "Review your existing ACR and the evidence behind it.",
    "Retest the site as it is today against WCAG 2.2 AA, starting with what changed since the ACR was created.",
    "Fix what broke. Anything owned by your staff or a vendor goes to them with a suggested fix, and we handle the vendor contact.",
    "Verify every fix the same way the barrier was found.",
    "Issue an updated ACR, dated the day of testing.",
  ],
  deliverables: [
    "Updated ACR, dated the day of testing",
    "Record of what changed, what was fixed and when",
  ],
};

const acrChecks = [
  {
    title: "When it was created",
    body: "An ACR describes your site on the day it was tested. The older it is, the less likely it still matches.",
  },
  {
    title: "What has changed since",
    body: "New pages, uploaded PDFs, CMS updates or a redesign can each bring in barriers the ACR doesn't cover.",
  },
  {
    title: "Which WCAG version",
    body: "The DOJ's Title II rule references WCAG 2.1 AA. An ACR tested against an older version may not cover everything the rule requires.",
  },
] as const;

/*
 * Vendor coordination is not a stage of its own: it runs inside the other
 * stages, so it has its own section after either path.
 */
const vendors: Stage = {
  id: "vendors",
  title: "We handle the contact with your vendors",
  intro:
    "Many barriers sit in code or products you don't control, like your CMS or your theme. Instead of handing you a list to chase, we contact the vendor, give them what they need to fix it, and follow it through to a verified fix.",
  when: [
    {
      label: "While fixing",
      title: "During audit and remediation",
      body: "Barriers in vendor-owned code go to that vendor as soon as they are found, with a suggested fix.",
    },
    {
      label: "Every month",
      title: "During monitoring",
      body: "When a vendor update breaks something, it is logged as a regression and sent straight back to that vendor.",
    },
    {
      label: "In your record",
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

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function A3SHowItWorksPage() {
  return (
    <article className="bg-background">
      <header className="pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pt-28">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
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
            <h1 className="mx-auto mt-5 max-w-[20ch] text-balance text-[clamp(2.25rem,4.8vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
              How A3S makes your site accessible and keeps it that way
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-xl font-semibold leading-snug tracking-[-0.015em] text-foreground sm:text-2xl">
              You&apos;ve done some work on accessibility. What comes next?
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Almost everyone is doing something about accessibility. You might
              have fixed issues as they came up. You might have a plugin, a
              checker, maybe even an ACR. What you do next depends on one
              question.
            </p>
          </div>
        </div>
      </header>

      <AcrPaths
        yes={<HaveAcrPath />}
        no={<FullProcessPath />}
        after={<VendorSection />}
      />

      <section className="py-20 sm:py-24">
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
                <Link href="/a3s">About A3S</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Path: you have an ACR                                               */
/* ------------------------------------------------------------------ */

function HaveAcrPath() {
  return (
    <div className="container-padding-x container mx-auto">
      <div className="mx-auto max-w-5xl">
        <section aria-labelledby="acr-checks-heading" className="pt-12">
          <h3
            id="acr-checks-heading"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
          >
            Three things decide whether it still holds
          </h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {acrChecks.map((check) => (
              <li key={check.title} className="rounded-xl border bg-card p-5 sm:p-6">
                <p className="text-lg font-semibold text-foreground">{check.title}</p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {check.body}
                </p>
              </li>
            ))}
          </ul>
          <figure className="mt-6 rounded-2xl border bg-card p-6 sm:p-8">
            <VpatValidityDiagram uid="-y" />
          </figure>
        </section>

        <PhaseLabel>What we do</PhaseLabel>
        <StageBlock stage={refresh} kicker="01" idPrefix="y-" />
        <StageBlock stage={monitor("-y")} kicker="02" idPrefix="y-" />
        <StageBlock stage={track("-y")} kicker="03" idPrefix="y-" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Path: no ACR, or the full process                                   */
/* ------------------------------------------------------------------ */

function FullProcessPath() {
  return (
    <>
      <div className="container-padding-x container mx-auto">
        <div className="mx-auto max-w-5xl">
          <figure className="mt-12 rounded-2xl border bg-card p-6 sm:p-10">
            <ProcessOverviewDiagram />
          </figure>

          <PhaseLabel>Getting compliant</PhaseLabel>
          <StageBlock stage={scope} kicker="01" />
          <StageBlock stage={audit} kicker="02" />
          <StageBlock stage={verify} kicker="03" />
        </div>
      </div>

      <ComplianceBreak />

      <div className="container-padding-x container mx-auto">
        <div className="mx-auto max-w-5xl">
          <PhaseLabel border={false}>Staying compliant</PhaseLabel>
          <StageBlock stage={monitor("")} kicker="04" />
          <StageBlock stage={track("")} kicker="05" />
        </div>
      </div>
    </>
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
          <h3
            id="compliance-break-heading"
            className="mt-4 max-w-[20ch] text-balance text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            Most people think this is it.
          </h3>
          <div className="mt-8 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-2 md:gap-12">
            <p className="text-xl font-semibold leading-snug sm:text-2xl">
              It isn&apos;t. Compliance, and the ACR that proves it, describe
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

/* ------------------------------------------------------------------ */
/* Shared after either path                                            */
/* ------------------------------------------------------------------ */

function VendorSection() {
  return (
    <section aria-labelledby="vendors-heading" className="mt-8 border-y bg-secondary/50">
      <div className="container-padding-x container mx-auto">
        <div className="mx-auto max-w-5xl">
          <p className="pt-10 sm:pt-14">
            <span className="inline-flex h-8 items-center rounded-full bg-primary px-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
              Working with vendors
            </span>
          </p>
          <StageBlock stage={vendors} headingLevel="h2" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function PhaseLabel({
  children,
  border = true,
}: {
  children: ReactNode;
  border?: boolean;
}) {
  return (
    <p
      className={`mt-12 pt-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:mt-16 ${
        border ? "border-t" : ""
      }`}
    >
      {children}
    </p>
  );
}

function StageBlock({
  stage,
  kicker,
  idPrefix = "",
  headingLevel = "h3",
}: {
  stage: Stage;
  kicker?: string;
  /** Keeps ids unique when a stage appears in both paths. */
  idPrefix?: string;
  headingLevel?: "h2" | "h3";
}) {
  const id = `${idPrefix}${stage.id}`;
  const headingId = `${id}-heading`;
  const Heading = headingLevel;
  const Sub = headingLevel === "h2" ? "h3" : "h4";

  return (
    <div
      id={id}
      role="region"
      aria-labelledby={headingId}
      className="grid scroll-mt-24 gap-8 py-12 sm:py-16 lg:grid-cols-[14rem_1fr] lg:gap-16"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        {kicker && (
          <p className="mb-2 text-sm font-semibold tabular-nums text-primary">
            {kicker}
          </p>
        )}
        <Heading
          id={headingId}
          className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
        >
          {stage.title}
        </Heading>
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
            <Sub className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              What we do
            </Sub>
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
            <Sub className="border-b bg-secondary/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              What you get
            </Sub>
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
