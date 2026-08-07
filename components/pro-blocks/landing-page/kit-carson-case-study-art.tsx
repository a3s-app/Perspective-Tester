"use client";

import Image from "next/image";
import { type KeyboardEvent, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Ambulance,
  AppWindow,
  CalendarCheck,
  Check,
  Code2,
  Contrast,
  FileCheck2,
  FileText,
  Focus,
  Gavel,
  Globe2,
  Keyboard,
  Landmark,
  LandPlot,
  MonitorCheck,
  Search,
  ShieldCheck,
  TextCursorInput,
  ZoomIn,
} from "lucide-react";
import { assetPath } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroArtwork() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -inset-x-2 -inset-y-20"
        style={reduce ? undefined : { y: imageY, scale: imageScale }}
      >
        <Image
          src={assetPath(
            "/case-studies/kit-carson-county/county-road.webp",
          )}
          alt="A rural road crossing the Kit Carson County plains at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_52%]"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.13_0.035_255/.97)_0%,oklch(0.13_0.035_255/.82)_42%,oklch(0.13_0.035_255/.28)_74%,transparent_100%)] max-md:bg-[linear-gradient(180deg,oklch(0.13_0.035_255/.88)_0%,oklch(0.13_0.035_255/.48)_48%,oklch(0.13_0.035_255/.78)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,oklch(0.13_0.035_255/.62)_0%,transparent_36%)]"
        aria-hidden="true"
      />
    </div>
  );
}

const responsibilities = [
  {
    label: "Courthouse",
    detail: "Computers, accounts, and daily staff support",
    icon: Landmark,
  },
  {
    label: "Landfill",
    detail: "Connectivity and operational systems",
    icon: LandPlot,
  },
  {
    label: "EMS",
    detail: "Reliable access for emergency services",
    icon: Ambulance,
  },
  {
    label: "Sheriff",
    detail: "Secure systems and user accounts",
    icon: ShieldCheck,
  },
  {
    label: "County website",
    detail: "Publishing and public access",
    icon: Globe2,
  },
] as const;

export function WorkloadNetwork() {
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl bg-[oklch(0.18_0.035_255)] text-white">
      <div className="grid md:grid-cols-[.78fr_1.22fr]">
        <div className="flex min-h-64 flex-col justify-between bg-[oklch(0.72_0.13_48)] p-6 text-[oklch(0.14_0.03_255)] sm:p-7 md:min-h-full">
          <div>
            <p className="text-sm font-semibold">The job description</p>
            <p className="mt-4 max-w-[10ch] text-balance text-3xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-4xl">
              One title on paper.
            </p>
          </div>

          <div className="mt-12 border-t border-[oklch(0.14_0.03_255/.24)] pt-4">
            <p className="text-sm font-semibold">Todd Holmes</p>
            <p className="mt-1 text-sm text-[oklch(0.24_0.045_255)]">
              IT support specialist
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="border-b border-white/14 pb-4">
            <p className="text-sm font-semibold text-[oklch(0.78_0.12_52)]">
              The actual workload
            </p>
            <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
              Five public systems in practice.
            </p>
          </div>

          <ul className="divide-y divide-white/12">
            {responsibilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.label}
                  className="grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 py-3"
                  initial={reduce ? false : { opacity: 0.55, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.75 }}
                  transition={{ duration: 0.48, delay: index * 0.07, ease }}
                >
                  <span className="flex size-9 items-center justify-center rounded-md bg-white/9 text-[oklch(0.78_0.12_52)]">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-white/58">
                      {item.detail}
                    </span>
                  </span>
                  <span
                    className="text-xs font-semibold tabular-nums text-white/30"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.li>
              );
            })}
          </ul>

          <motion.p
            className="mt-3 border-t border-white/14 pt-4 text-sm font-semibold leading-relaxed text-white/82"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
          >
            Then website accessibility became one more responsibility to carry.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export function BudgetLoopArtwork() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-12, 18]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);
  const comparisons = [
    {
      label: "One-time snapshot",
      title: "A capital request that expires",
      detail: "The site changes, and the same expensive question comes back.",
      src: "/case-studies/kit-carson-county/budget-snapshot.webp",
      alt: "A heavy audit stack and a website frozen under glass while loose calendar pages move past",
      tone: "bg-white",
    },
    {
      label: "Monthly program",
      title: "An operating budget that keeps moving",
      detail: "Test, fix, verify, and preserve the record every month.",
      src: "/case-studies/kit-carson-county/budget-monthly-program.webp",
      alt: "Four stations form a continuous loop for inspecting, repairing, verifying, and archiving website work",
      tone: "bg-[oklch(0.94_0.035_48)]",
    },
  ] as const;

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-2">
      {comparisons.map((item, index) => (
        <motion.figure
          key={item.label}
          className={`overflow-hidden rounded-2xl shadow-[0_8px_0_oklch(0.18_0.035_255/.08)] ${item.tone}`}
          initial={
            reduce
              ? false
              : { opacity: 0.65, x: index === 0 ? -20 : 20 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: index * 0.08, ease }}
        >
          <div className="relative aspect-[3/2] overflow-hidden bg-[oklch(0.18_0.035_255)]">
            <motion.div
              className="absolute -inset-3"
              style={reduce ? undefined : { y: imageY, scale: imageScale }}
            >
              <Image
                src={assetPath(item.src)}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 34vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <figcaption className="p-5 sm:p-6">
            <p className="text-sm font-semibold text-[oklch(0.48_0.13_42)]">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

const auditMethods = [
  {
    id: "automated",
    name: "Automated inspection",
    recorded: 17,
    icon: Search,
    question: "Does the code expose the right meaning?",
    detail: "Scans every page for repeatable code and markup failures.",
    finding: "A form field has no programmatic label.",
    evidence: "Page, selector, and failed rule saved to the audit record.",
  },
  {
    id: "screen-reader",
    name: "Screen readers",
    recorded: 255,
    icon: MonitorCheck,
    question: "Does the page still make sense when it is heard?",
    detail: "A person listens for clear meaning, order, and control names.",
    finding: "The fair schedule is announced only as “image.”",
    evidence: "The exact announcement and reading order are documented.",
  },
  {
    id: "keyboard",
    name: "Keyboard navigation",
    recorded: 8,
    icon: Keyboard,
    question: "Can every task be completed without a mouse?",
    detail: "Tests focus order, visibility, menus, forms, and escape routes.",
    finding: "Focus disappears after the department menu opens.",
    evidence: "The blocked step and the successful retest are preserved.",
  },
  {
    id: "contrast",
    name: "Color contrast",
    recorded: 13,
    icon: Contrast,
    question: "Can residents read every word and control state?",
    detail: "Measures text, icons, and controls against their backgrounds.",
    finding: "Muted event text measures 2.7:1 against the page.",
    evidence: "The measured colors and passing replacement are recorded.",
  },
  {
    id: "zoom",
    name: "Browser zoom",
    recorded: 44,
    icon: ZoomIn,
    question: "Does the page hold together when it is enlarged?",
    detail: "Checks reflow, overlap, and task completion at high zoom.",
    finding: "At 200%, the navigation covers the page heading.",
    evidence: "Viewport, zoom level, and corrected layout are captured.",
  },
  {
    id: "spacing",
    name: "Text spacing",
    recorded: 3,
    icon: TextCursorInput,
    question: "Can residents change spacing without losing content?",
    detail: "Applies larger line, word, letter, and paragraph spacing.",
    finding: "Increased line spacing clips the form instructions.",
    evidence: "The applied settings and unclipped result stay on file.",
  },
] as const;

type AuditMethod = (typeof auditMethods)[number];

export function AuditMethodExplorer() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const selected = auditMethods[active];
  const SelectedIcon = selected.icon;

  const selectMethod = (index: number) => {
    const nextIndex = (index + auditMethods.length) % auditMethods.length;
    setActive(nextIndex);
    requestAnimationFrame(() => {
      document.getElementById(`audit-method-${auditMethods[nextIndex].id}`)?.focus();
    });
  };

  const handleMethodKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectMethod(index + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectMethod(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      selectMethod(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      selectMethod(auditMethods.length - 1);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-[oklch(0.82_0.015_245)] bg-background shadow-[0_28px_70px_oklch(0.18_0.035_255/.08)]">
      <div
        className="grid grid-cols-2 border-b border-[oklch(0.84_0.015_245)] bg-[oklch(0.975_0.006_245)] sm:grid-cols-3 lg:grid-cols-6"
        role="tablist"
        aria-label="Accessibility testing methods"
      >
        {auditMethods.map((method, index) => {
          const Icon = method.icon;
          const isActive = index === active;
          return (
            <button
              key={method.name}
              type="button"
              role="tab"
              id={`audit-method-${method.id}`}
              aria-selected={isActive}
              aria-controls="audit-method-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleMethodKeyDown(event, index)}
              className={`group relative flex min-h-[5.5rem] items-center gap-3 border-b border-r border-[oklch(0.88_0.012_245)] px-3 py-4 text-left transition-colors duration-300 last:border-r-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] sm:px-4 lg:border-b-0 ${
                isActive
                  ? "bg-[oklch(0.18_0.035_255)] text-white focus-visible:outline-[oklch(0.78_0.12_52)]"
                  : "text-muted-foreground hover:bg-white/70 hover:text-foreground focus-visible:outline-[oklch(0.48_0.13_42)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-audit-method"
                  className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-[oklch(0.52_0.14_42)]"
                  transition={{ duration: reduce ? 0 : 0.35, ease }}
                />
              )}
              <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${isActive ? "bg-white/10 text-[oklch(0.78_0.12_52)]" : "bg-[oklch(0.93_0.01_245)] text-foreground"}`}>
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className={`block text-[9px] font-semibold uppercase tracking-[0.14em] ${isActive ? "text-white/64" : "text-muted-foreground"}`}>
                  {method.recorded} findings
                </span>
                <span className="mt-1 block text-xs font-semibold leading-tight sm:text-[13px]">
                  {method.name}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="audit-method-panel"
        role="tabpanel"
        aria-labelledby={`audit-method-${selected.id}`}
        className="bg-[oklch(0.18_0.035_255)] text-white"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selected.id}
            className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:p-10"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.34, ease }}
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[oklch(0.78_0.12_52)]">
                  <SelectedIcon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {selected.name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/64">
                    {selected.recorded} findings in the audit record
                  </p>
                </div>
              </div>
              <p className="mt-8 max-w-md text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                {selected.question}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                {selected.detail}
              </p>
            </div>

            <div className="border-y border-white/12">
              <div className="grid gap-3 border-b border-white/12 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.78_0.12_52)]">
                  Barrier caught
                </p>
                <p className="text-sm font-medium leading-relaxed text-white/88 sm:text-base">
                  {selected.finding}
                </p>
              </div>
              <div className="grid gap-3 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.78_0.12_52)]">
                  Proof kept
                </p>
                <p className="text-sm font-medium leading-relaxed text-white/88 sm:text-base">
                  {selected.evidence}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="flex items-center gap-2 border-t border-white/12 px-6 py-4 text-xs font-semibold text-white/52 sm:px-8 lg:px-10">
          <Check className="size-4 text-[oklch(0.72_0.12_150)]" aria-hidden="true" />
          Human testing confirms the experience. A3S keeps the record.
        </p>
      </div>
    </div>
  );
}

const fairTextDetails = [
  {
    label: "When and where",
    detail:
      "Burlington, Colorado, from July 25 through August 1.",
  },
  {
    label: "Saturday concert",
    detail:
      "The Kentucky Headhunters perform immediately after the rodeo on August 1.",
  },
  {
    label: "Rodeo times",
    detail:
      "Thursday, July 30 at 8:00 p.m.; Friday, July 31 at 8:00 p.m.; Saturday, August 1 at 7:30 p.m.",
  },
  {
    label: "More fair events",
    detail:
      "Allan Dessell, a Thursday drone show, amusement entertainment, and the Pink Chaps auction during the rodeo.",
  },
] as const;

export function CriticalFixDemo() {
  const [state, setState] = useState<"before" | "after">("before");
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl bg-[oklch(0.18_0.035_255)] text-white">
      <div className="flex items-center justify-between gap-5 border-b border-white/12 p-5 max-sm:flex-col max-sm:items-start sm:p-6">
        <div>
          <p className="text-sm font-semibold">County fair concert schedule</p>
          <p className="mt-1 text-xs text-white/56">
            The same source image, two very different resident experiences
          </p>
        </div>
        <div
          className="flex rounded-lg bg-white/10 p-1"
          aria-label="Choose remediation state"
        >
          {(["before", "after"] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={state === value}
              onClick={() => setState(value)}
              className={`min-h-10 rounded-md px-3.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                state === value
                  ? "bg-white text-[oklch(0.18_0.035_255)]"
                  : "text-white/72 hover:text-white"
              }`}
            >
              {value === "before" ? "Before: image only" : "After: image + text"}
            </button>
          ))}
        </div>
      </div>

      <div
        className="min-h-[31rem] bg-[oklch(0.96_0.006_250)] p-5 text-[oklch(0.17_0.03_255)] sm:p-8"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          {state === "before" ? (
            <motion.div
              key="before"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -8 }}
              transition={{ duration: 0.38, ease }}
              className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center"
            >
              <figure>
                <div
                  className="relative mx-auto aspect-square w-full max-w-[25rem] overflow-hidden rounded-xl bg-[oklch(0.18_0.035_255)] shadow-[0_8px_0_oklch(0.14_0.03_255/.18)]"
                  role="img"
                  aria-label="The original image-only county fair concert flyer"
                >
                  <Image
                    src={assetPath(
                      "/case-studies/kit-carson-county/county-fair-poster.webp",
                    )}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25rem, 86vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                  The source poster contained most of the event information.
                </figcaption>
              </figure>

              <div className="max-w-xl">
                <p className="text-sm font-semibold text-[oklch(0.48_0.13_42)]">
                  Critical: information only existed as pixels
                </p>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  The poster carried the schedule. The page did not.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  A sighted visitor could scan the artwork for dates, performers,
                  and showtimes. Assistive technology encountered one image with
                  no structured event content or reading order.
                </p>

                <div className="mt-7 border-y border-[oklch(0.78_0.08_28)] bg-[oklch(0.93_0.025_28)] py-5 text-[oklch(0.31_0.09_28)]">
                  <p className="text-xs font-semibold">Screen reader announced</p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.02em]">
                    “image”
                  </p>
                </div>
                <p className="mt-5 text-sm font-medium text-foreground">
                  No fair dates. No performer. No rodeo times. No event order.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={reduce ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: 8 }}
              transition={{ duration: 0.38, ease }}
              className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start"
            >
              <figure>
                <div className="relative mx-auto aspect-square w-full max-w-80 overflow-hidden rounded-xl bg-[oklch(0.18_0.035_255)]">
                  <Image
                    src={assetPath(
                      "/case-studies/kit-carson-county/county-fair-poster.webp",
                    )}
                    alt="Original Kit Carson County Fair and Rodeo concert poster"
                    fill
                    sizes="(min-width: 1024px) 20rem, 80vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                  The original image remains on the page.
                </figcaption>
              </figure>

              <article>
                <div className="flex items-center gap-3 text-[oklch(0.31_0.1_145)]">
                  <motion.span
                    className="flex size-9 items-center justify-center rounded-full bg-[oklch(0.9_0.05_145)]"
                    initial={reduce ? false : { scale: 0.7 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <Check className="size-5" aria-hidden="true" />
                  </motion.span>
                  <p className="text-sm font-semibold">
                    Accessible text placed directly after the image
                  </p>
                </div>

                <h3 className="mt-5 text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  2026 Kit Carson County Fair &amp; Rodeo
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The graphic was analyzed and every meaningful event detail was
                  rewritten into a clear text reading order.
                </p>

                <dl className="mt-6 divide-y border-y border-border">
                  {fairTextDetails.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-5"
                    >
                      <dt className="text-sm font-semibold text-foreground">
                        {item.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-5 flex items-start gap-3 text-sm font-semibold leading-relaxed text-[oklch(0.31_0.1_145)]">
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  The image stays. Access to its meaning no longer depends on
                  seeing it.
                </p>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function DocumentDecisionArt() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <motion.div
        className="flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl bg-[oklch(0.18_0.035_255)] p-6 text-white sm:p-8"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease }}
      >
        <div className="relative h-24" aria-hidden="true">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="absolute left-0 top-0 h-20 w-16 rounded-md border border-white/20 bg-white/10"
              initial={reduce ? false : { x: 0, rotate: 0 }}
              whileInView={{ x: index * 24, rotate: index * 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
            />
          ))}
          <span className="absolute bottom-0 right-0 text-4xl font-semibold text-white/28">
            101
          </span>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2 text-[oklch(0.78_0.12_52)]">
            <FileText className="size-5" aria-hidden="true" />
            <span className="text-sm font-semibold">Long documents</span>
          </div>
          <p className="text-xl font-semibold">PDF becomes a web page</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            The land use code can change without remediating a 101-page file
            again.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl bg-[oklch(0.94_0.035_48)] p-6 sm:p-8"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.08, ease }}
      >
        <div className="flex h-24 items-center justify-center" aria-hidden="true">
          <div className="relative flex h-24 w-20 items-center justify-center rounded-lg border-2 border-[oklch(0.48_0.13_42)] bg-white">
            <div className="absolute left-3 right-3 top-4 h-1.5 rounded bg-[oklch(0.48_0.13_42/.35)]" />
            <div className="absolute left-3 right-6 top-8 h-1.5 rounded bg-[oklch(0.48_0.13_42/.2)]" />
            <FileCheck2 className="mt-8 size-7 text-[oklch(0.48_0.13_42)]" />
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2 text-[oklch(0.42_0.11_42)]">
            <AppWindow className="size-5" aria-hidden="true" />
            <span className="text-sm font-semibold">Fillable forms</span>
          </div>
          <p className="text-xl font-semibold">PDF stays a PDF</p>
          <p className="mt-3 text-sm leading-relaxed text-[oklch(0.36_0.055_42)]">
            The file is remediated in place and gets its own test report.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const auditMonths = [
  { label: "Oct", state: "complete" },
  { label: "Nov", state: "complete" },
  { label: "Dec", state: "complete" },
  { label: "Jan", state: "complete" },
  { label: "Feb", state: "complete" },
  { label: "Mar", state: "complete" },
  { label: "Apr", state: "complete" },
  { label: "May", state: "complete" },
  { label: "Jun", state: "complete" },
  { label: "Jul", state: "complete" },
] as const;

const auditEvidence = [
  {
    label: "Coverage",
    value: "62 URLs",
    detail: "marked Tested through July",
  },
  {
    label: "WCAG matrix",
    value: "3,410 results",
    detail: "62 pages × 55 criteria",
  },
  {
    label: "Finding record",
    value: "310 findings",
    detail: "logged through July",
  },
  {
    label: "Repairs completed",
    value: "33 fixes",
    detail: "nearly all critical violations addressed",
  },
] as const;

const criticalFindings = [
  {
    area: "County fair schedule",
    issue: "The informative image had no meaningful text alternative.",
    method: "Screen reader",
  },
  {
    area: "BOCC meeting minutes",
    issue: "Disclosure controls were announced without role or state.",
    method: "Screen reader",
  },
  {
    area: "BOCC meeting minutes",
    issue: "Tabs were announced without role, state, or position.",
    method: "Screen reader",
  },
  {
    area: "BOCC meeting minutes",
    issue: "Pagination actions could not receive keyboard focus.",
    method: "Keyboard navigation",
  },
] as const;

export function EvidenceTrail() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-14, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_0_oklch(0.08_0.02_255/.24)]"
    >
      <motion.div
        className="relative h-32 overflow-hidden bg-[oklch(0.13_0.035_255)] sm:h-36"
        initial={reduce ? false : { clipPath: "inset(9% 7% 9% 7%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease }}
      >
        <motion.div
          className="absolute -inset-3"
          style={reduce ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src={assetPath(
              "/case-studies/kit-carson-county/county-prairie.webp",
            )}
            alt="Prairie grass and an open sky in Kit Carson County"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,oklch(0.1_0.025_255/.68)_100%)]"
          aria-hidden="true"
        />
        <p className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/86 sm:bottom-5 sm:left-8">
          Photo:{" "}
          <a
            href="https://kitcarsoncounty.colorado.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            Kit Carson County
          </a>
        </p>
      </motion.div>

      <div className="p-5 sm:p-8">
        <div>
          <div>
            <p className="text-sm font-semibold text-[oklch(0.48_0.13_42)]">
              October 2025 to July 2026
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-foreground">
              What ten cycles produced.
            </p>
          </div>
        </div>

        <div className="relative mt-6">
          <span
            className="absolute left-[5%] right-[5%] top-4 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-5 gap-x-2 gap-y-4 lg:grid-cols-10">
            {auditMonths.map((month, index) => (
              <li
                key={month.label}
                className="relative flex flex-col items-center gap-2 text-center"
              >
                <motion.span
                  className="relative z-10 flex size-8 items-center justify-center rounded-full bg-[oklch(0.9_0.05_145)] text-[oklch(0.31_0.1_145)]"
                  initial={reduce ? false : { opacity: 0, scale: 0.55 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease }}
                  aria-label="Audit cycle completed"
                >
                  <Check className="size-4" aria-hidden="true" />
                </motion.span>
                <span className="text-xs font-semibold text-muted-foreground">
                  {month.label}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <dl className="mt-6 grid border-y sm:grid-cols-2">
          {auditEvidence.map((item, index) => (
            <motion.div
              key={item.label}
              className={`py-3.5 ${
                index < 2 ? "border-b" : ""
              } ${
                index % 2 === 0
                  ? "sm:border-r sm:pr-6"
                  : "sm:pl-6"
              }`}
              initial={reduce ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease }}
            >
              <dt className="text-sm font-semibold text-foreground">
                {item.label}
              </dt>
              <dd className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-lg font-semibold tracking-[-0.015em] text-foreground">
                  {item.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.detail}
                </span>
              </dd>
            </motion.div>
          ))}
        </dl>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Results from the county audit workbook through July 2026.
        </p>
      </div>
    </div>
  );
}

export function CriticalIssueLedger() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-8 border-t border-white/14 pt-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
      <div>
        <p className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
          Critical barriers were prioritized.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/66 sm:text-base">
          Over ten months, we completed 33 fixes and resolved nearly every
          critical violation. Each barrier, fixed or still open, stays named
          in the evidence trail.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span className="flex items-center gap-2 text-[oklch(0.79_0.11_145)]">
            <Check className="size-4" aria-hidden="true" />
            33 fixes completed
          </span>
        </div>
      </div>

      <ol className="divide-y divide-white/12 border-y border-white/14">
        {criticalFindings.map((finding, index) => (
          <motion.li
            key={`${finding.area}-${finding.issue}`}
            className="py-4"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease }}
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              <span className="font-semibold text-[oklch(0.78_0.12_52)]">
                {finding.area}
              </span>
              <span className="text-white/36" aria-hidden="true">·</span>
              <span className="text-white/48">{finding.method}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-white/84">
              {finding.issue}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function DeadlineTimeline() {
  const reduce = useReducedMotion();
  const milestones = [
    {
      year: "2024",
      title: "Colorado standard",
      description: "State and local governments began working to a specific accessibility standard.",
      icon: Gavel,
    },
    {
      year: "2027",
      title: "Federal deadline",
      description: "Public entities with populations of 50,000 or more.",
      icon: Landmark,
    },
    {
      year: "2028",
      title: "Federal deadline",
      description: "Smaller public entities and special district governments.",
      icon: LandPlot,
    },
  ] as const;

  return (
    <ol className="grid gap-3 lg:grid-cols-3">
      {milestones.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.li
            key={item.year}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_8px_0_oklch(0.18_0.035_255/.08)] sm:p-8"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease }}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-4xl font-semibold tracking-[-0.03em] text-[oklch(0.48_0.13_42)]">
                {item.year}
              </span>
              <Icon className="size-6 text-primary" aria-hidden="true" />
            </div>
            <p className="mt-8 font-semibold text-foreground">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.li>
        );
      })}
    </ol>
  );
}

export function ProgramLoop() {
  const reduce = useReducedMotion();
  const stages = [
    {
      label: "Test",
      detail: "Find barriers through code checks and real human use.",
      icon: Search,
    },
    {
      label: "Fix",
      detail: "Make the repair inside the county's own system.",
      icon: Code2,
    },
    {
      label: "Check",
      detail: "Retest the change and confirm the barrier is gone.",
      icon: Focus,
    },
    {
      label: "Repeat",
      detail: "Start the next month with every result still intact.",
      icon: CalendarCheck,
    },
  ] as const;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[oklch(0.16_0.035_255)] p-6 text-white sm:p-8 lg:p-10">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold text-[oklch(0.78_0.12_52)]">
            One monthly cycle
          </p>
          <p className="mt-2 max-w-xl text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Every cycle closes. The evidence stays.
          </p>
        </div>
      </div>

      <ol className="relative mt-10 grid gap-7 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-5">
        <span
          className="absolute bottom-6 left-6 top-6 w-px origin-top bg-[oklch(0.72_0.13_48/.55)] sm:hidden"
          aria-hidden="true"
        />
        <span
          className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px origin-left bg-[oklch(0.72_0.13_48/.55)] lg:block"
          aria-hidden="true"
        />

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.li
              key={stage.label}
              className="relative z-10 grid grid-cols-[3rem_1fr] gap-4 sm:block"
              initial={reduce ? false : { y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.48, delay: 0.12 + index * 0.1, ease }}
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-[oklch(0.72_0.13_48)] text-[oklch(0.13_0.035_255)] shadow-[0_0_0_6px_oklch(0.16_0.035_255)] sm:mx-auto">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="sm:mt-6 sm:text-center">
                <span className="text-lg font-semibold">{stage.label}</span>
                <p className="mt-2 text-sm leading-relaxed text-white/64">
                  {stage.detail}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <div className="mt-10 border-t border-white/12 pt-7 sm:mt-12">
        <p className="text-lg font-semibold">The record grows every month.</p>
        <p className="mt-1 text-sm text-white/62">
          The next cycle starts with proof, not from zero.
        </p>
      </div>
    </div>
  );
}
