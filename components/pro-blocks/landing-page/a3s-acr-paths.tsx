"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, Check } from "lucide-react";

/*
 * The page's single question: "Do you have an ACR?". The answer reveals the
 * path that fits. Both paths are server-rendered and sit in the HTML with the
 * `hidden` attribute, so their content is in the page source even before a
 * visitor answers; only the chosen one is displayed.
 *
 * Accessibility: Yes / No are toggle buttons (aria-pressed), grouped and
 * labelled by the question. After a choice, focus moves to the heading of the
 * revealed path so screen readers announce it and keyboard users continue
 * from there. The answer can be changed at any time with the same buttons.
 */

type Choice = "yes" | "no" | "full";

/*
 * The answer is kept in the URL (?acr=yes) and in sessionStorage, so it
 * survives the browser's Back / Forward buttons and leaving the page through
 * a link and coming back in the same tab. The URL is updated with
 * replaceState, so answering never adds history entries of its own.
 */
const PARAM = "acr";
const STORAGE_KEY = "a3s-how-it-works:acr";
const isChoice = (v: unknown): v is Choice =>
  v === "yes" || v === "no" || v === "full";

function saveChoice(value: Choice) {
  const url = new URL(window.location.href);
  url.searchParams.set(PARAM, value);
  window.history.replaceState(window.history.state, "", url);
  try {
    window.sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the URL
    // still carries the answer.
  }
}

function loadChoice(): Choice | null {
  const fromUrl = new URLSearchParams(window.location.search).get(PARAM);
  if (isChoice(fromUrl)) return fromUrl;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (isChoice(stored)) return stored;
  } catch {
    // See saveChoice.
  }
  return null;
}

const choiceLabel: Record<Choice, string> = {
  yes: "Yes, we have an ACR",
  no: "No ACR yet",
  full: "Not sure",
};

const leads: Record<Choice, { title: string; body: ReactNode }> = {
  yes: {
    title: "You have an ACR. Does it still match your site?",
    body: "That's a good start: many organizations don't have one. But an ACR describes your site on one day. Here's how to tell whether yours still holds, and how we keep it true.",
  },
  no: {
    title: "No ACR yet? Start with a baseline.",
    body: (
      <>
        That&apos;s common, and the work you&apos;ve already done isn&apos;t
        wasted: the audit shows what it fixed and what&apos;s left. If you rely
        on a plugin, it can help with some issues, but it can&apos;t reach your
        content, documents or templates, and it doesn&apos;t produce an ACR.{" "}
        <Link
          href="/overlay-widgets"
          className="rounded-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          Why plugins and overlays fall short
        </Link>
      </>
    ),
  },
  full: {
    title: "The full A3S process",
    body: "Five stages, the same for every client. The first three get your site to WCAG 2.2 AA and produce an ACR. The last two repeat every month to keep it true.",
  },
};

export function AcrPaths({
  yes,
  no,
  after,
}: {
  /** Content for visitors who have an ACR. */
  yes: ReactNode;
  /** The full process, for visitors without an ACR or who aren't sure. */
  no: ReactNode;
  /** Shown under either path once a choice is made. */
  after: ReactNode;
}) {
  const [choice, setChoice] = useState<Choice | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const questionRef = useRef<HTMLElement>(null);
  const moveFocus = useRef(false);

  // Restore a saved answer before paint, so a returning visitor sees their
  // path straight away. No focus or scroll change: the browser keeps its own
  // scroll position on Back / Forward.
  useLayoutEffect(() => {
    const saved = loadChoice();
    if (saved) {
      setChoice(saved);
      saveChoice(saved);
    }
  }, []);

  // After a choice, bring the revealed section into view and put focus on
  // its heading. Focus is moved without the browser's own jump so the scroll
  // can be smooth, unless the visitor prefers reduced motion.
  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    const heading = headingRef.current;
    if (!heading) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [choice]);

  const pick = (next: Choice) => {
    moveFocus.current = true;
    setChoice(next);
    saveChoice(next);
  };

  // "Change your answer": return to the question, focused on the current
  // choice so keyboard and screen reader users land where they left off.
  const changeAnswer = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const current = questionRef.current?.querySelector<HTMLButtonElement>(
      'button[aria-pressed="true"]',
    );
    current?.focus({ preventScroll: true });
    questionRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const controls = (value: Choice) => (value === "yes" ? "path-yes" : "path-no");

  const lead = choice ? leads[choice] : null;

  return (
    <>
      <section
        ref={questionRef}
        aria-labelledby="acr-question"
        className="scroll-mt-20 bg-[oklch(0.18_0.035_255)] py-16 text-white sm:py-24"
      >
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="acr-question"
              className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl"
            >
              Do you have an Accessibility Conformance Report (ACR)?
            </h2>
            <p
              id="acr-hint"
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            >
              An ACR is a completed VPAT: the written record of how your site
              conforms to WCAG.
            </p>
            <p
              id="acr-instruction"
              className="mx-auto mt-8 max-w-xl text-base font-medium text-white"
            >
              Choose an answer and the steps that fit you will appear below.
            </p>

            <div
              role="group"
              aria-labelledby="acr-question"
              aria-describedby="acr-hint acr-instruction"
              className="mt-5 flex justify-center gap-3 sm:gap-4"
            >
              {(["yes", "no"] as const).map((value) => {
                const pressed = choice === value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={pressed}
                    aria-controls={controls(value)}
                    onClick={() => pick(value)}
                    className={`inline-flex h-14 min-w-32 items-center justify-center gap-2 rounded-xl border-2 px-8 text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[oklch(0.18_0.035_255)] sm:min-w-40 ${
                      pressed
                        ? "border-white bg-white text-[oklch(0.18_0.035_255)]"
                        : "border-white/70 bg-transparent text-white hover:bg-white/10"
                    }`}
                  >
                    {pressed && <Check className="size-5" aria-hidden="true" />}
                    {value === "yes" ? "Yes" : "No"}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => pick("full")}
              aria-pressed={choice === "full"}
              aria-controls="path-no"
              className="mt-5 inline-flex items-center gap-1.5 rounded-sm px-2 py-2.5 text-base font-medium text-white/85 underline decoration-white/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white aria-pressed:text-white aria-pressed:decoration-white"
            >
              Not sure? See the full process
              <ArrowDown className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {lead && (
        <section aria-labelledby="path-heading" className="bg-background pt-16 sm:pt-20">
          <div className="container-padding-x container mx-auto">
            <div className="mx-auto max-w-5xl">
              <h2
                id="path-heading"
                ref={headingRef}
                tabIndex={-1}
                className="max-w-3xl scroll-mt-28 text-balance text-3xl font-semibold tracking-[-0.025em] text-foreground outline-none sm:text-4xl"
              >
                {lead.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {lead.body}
              </p>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-muted-foreground">
                <span>
                  Your answer:{" "}
                  <strong className="font-semibold text-foreground">
                    {choiceLabel[choice as Choice]}
                  </strong>
                </span>
                <button
                  type="button"
                  onClick={changeAnswer}
                  className="inline-flex min-h-11 items-center rounded-sm px-1 font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Change your answer
                </button>
              </p>
            </div>
          </div>
        </section>
      )}

      <div id="path-yes" hidden={choice !== "yes"}>
        {yes}
      </div>
      <div id="path-no" hidden={choice === null || choice === "yes"}>
        {no}
      </div>
      {choice && after}
    </>
  );
}
