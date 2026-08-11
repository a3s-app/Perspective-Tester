"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
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

export function CostSnapshotFigure() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-12, 18]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <motion.figure
      ref={ref}
      className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_0_oklch(0.18_0.035_255/.08)]"
      initial={reduce ? false : { opacity: 0.65, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-[oklch(0.18_0.035_255)]">
        <motion.div
          className="absolute -inset-3"
          style={reduce ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src={assetPath("/case-studies/kit-carson-county/budget-snapshot.webp")}
            alt="A heavy audit stack and a website frozen under glass while loose calendar pages move past"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
      <figcaption className="px-5 py-4 text-sm font-semibold text-[oklch(0.48_0.13_42)] sm:px-6">
        What a one-time audit buys
      </figcaption>
    </motion.figure>
  );
}

const auditEvidence = [
  {
    label: "Coverage",
    value: "Priority pages tested",
    detail: "and recorded each cycle",
  },
  {
    label: "WCAG matrix",
    value: "Every applicable criterion",
    detail: "checked page by page",
  },
  {
    label: "Finding record",
    value: "Every barrier named",
    detail: "with the page and the method that caught it",
  },
  {
    label: "Repairs",
    value: "Critical issues addressed",
    detail: "retested before the cycle closes",
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
          <p className="text-sm font-semibold text-[oklch(0.48_0.13_42)]">
            The ongoing record
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-foreground">
            What every cycle produces.
          </p>
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
          Drawn from the county&apos;s live accessibility record.
        </p>
      </div>
    </div>
  );
}
