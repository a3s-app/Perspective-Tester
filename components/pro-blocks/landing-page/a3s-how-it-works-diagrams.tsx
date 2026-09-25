import type { ReactNode } from "react";

/*
 * Inline SVG diagrams for /a3s/how-it-works.
 *
 * One visual language throughout: square-cornered cards, orthogonal
 * connectors with small solid arrowheads, grey panels to group stages, and
 * labels set into the line they describe. Colours come from theme tokens.
 *
 * Wide diagrams would shrink their text to an unreadable size on a phone, so
 * each has a stacked narrow variant. Only one is displayed; the other is
 * `display: none` and so absent from the accessibility tree. Each SVG is a
 * single `role="img"` with a label stating what it shows, and the same facts
 * are in the stage's text, so nothing lives only in a picture.
 */

const connector = "fill-none stroke-muted-foreground/55";

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-a`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 10 5 0 10z" className="fill-muted-foreground/70" />
      </marker>
      <marker id={`${id}-p`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 10 5 0 10z" className="fill-primary" />
      </marker>
    </defs>
  );
}

type CardProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string | readonly string[];
  sub?: string;
  num?: string;
  /** Put the number beside the title instead of above it. */
  numInline?: boolean;
  align?: "start" | "center";
  strong?: boolean;
  size?: number;
};

function Card({
  x,
  y,
  w,
  h,
  title,
  sub,
  num,
  numInline = false,
  align = "start",
  strong = false,
  size = 14,
}: CardProps) {
  const lines = typeof title === "string" ? [title] : title;
  const tone = {
    box: strong ? "fill-primary" : "fill-card stroke-border",
    title: strong ? "fill-primary-foreground" : "fill-foreground",
    sub: strong ? "fill-primary-foreground/75" : "fill-muted-foreground",
    num: strong ? "fill-primary-foreground/70" : "fill-primary",
  };

  if (num && numInline) {
    const baseline = y + h / 2 + size * 0.35;
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} rx="8" className={tone.box} strokeWidth="1" />
        <text x={x + 16} y={baseline} fontSize="11.5" className={`${tone.num} font-mono font-medium`}>
          {num}
        </text>
        <text x={x + 50} y={baseline} fontSize={size} className={`${tone.title} font-semibold`}>
          {lines[0]}
        </text>
      </g>
    );
  }

  // Stack number, title lines and subtitle, then centre the block vertically.
  const rows: { text: string; size: number; lh: number; cls: string }[] = [];
  if (num) rows.push({ text: num, size: 11.5, lh: 20, cls: `${tone.num} font-mono font-medium` });
  for (const line of lines) rows.push({ text: line, size, lh: size + 5, cls: `${tone.title} font-semibold` });
  if (sub) rows.push({ text: sub, size: 12, lh: 18, cls: tone.sub });

  const total = rows.reduce((sum, r) => sum + r.lh, 0);
  let cursor = y + (h - total) / 2;
  const tx = align === "center" ? x + w / 2 : x + 16;

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" className={tone.box} strokeWidth="1" />
      {rows.map((row) => {
        cursor += row.lh;
        return (
          <text
            key={row.text}
            x={tx}
            y={cursor - row.lh * 0.3}
            fontSize={row.size}
            textAnchor={align === "center" ? "middle" : "start"}
            className={row.cls}
          >
            {row.text}
          </text>
        );
      })}
    </g>
  );
}

function Panel({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" className="fill-secondary" />
      <text x={x + 16} y={y + 26} fontSize="11" letterSpacing="1.2" className="fill-muted-foreground font-semibold uppercase">
        {label}
      </text>
    </g>
  );
}

/** A label that sits on a line, with a knockout behind it. */
function LineLabel({
  x,
  y,
  text,
  bg = "fill-card",
  strong = false,
}: {
  x: number;
  y: number;
  text: string;
  bg?: string;
  strong?: boolean;
}) {
  const width = text.length * 6.1 + 14;
  return (
    <g>
      <rect x={x - width / 2} y={y - 9} width={width} height={18} className={bg} />
      <text
        x={x}
        y={y + 3.8}
        fontSize="11"
        textAnchor="middle"
        className={strong ? "fill-primary font-semibold" : "fill-muted-foreground font-medium"}
      >
        {text}
      </text>
    </g>
  );
}

function Eyebrow({ x, y, text, anchor = "start" }: { x: number; y: number; text: string; anchor?: "start" | "end" }) {
  return (
    <text x={x} y={y} fontSize="11" letterSpacing="1.2" textAnchor={anchor} className="fill-muted-foreground font-semibold uppercase">
      {text}
    </text>
  );
}

function Responsive({
  label,
  breakpoint = "md",
  wide,
  narrow,
}: {
  label: string;
  breakpoint?: "md" | "lg";
  wide: { viewBox: string; body: ReactNode };
  narrow: { viewBox: string; body: ReactNode };
}) {
  const show = breakpoint === "lg" ? "lg:block" : "md:block";
  const hide = breakpoint === "lg" ? "lg:hidden" : "md:hidden";
  return (
    <>
      <svg viewBox={wide.viewBox} role="img" aria-label={label} className={`hidden h-auto w-full ${show}`}>
        {wide.body}
      </svg>
      <svg viewBox={narrow.viewBox} role="img" aria-label={label} className={`mx-auto block h-auto w-full max-w-[400px] ${hide}`}>
        {narrow.body}
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

const overviewStages = [
  { num: "01", lines: ["Scope and", "ownership"], line: "Scope and ownership" },
  { num: "02", lines: ["Audit and", "remediate"], line: "Audit and remediate" },
  { num: "03", lines: ["Verify"], line: "Verify" },
  { num: "04", lines: ["Monitor for", "changes"], line: "Monitor for changes" },
  { num: "05", lines: ["Track and", "report"], line: "Track and report" },
] as const;

export function ProcessOverviewDiagram() {
  return (
    <Responsive
      breakpoint="lg"
      label="The A3S process. Getting compliant: 01 scope and ownership, 02 audit and remediate, 03 verify. Once WCAG 2.2 AA is reached, stages 04 monitor for changes and 05 track and report repeat every month."
      wide={{
        viewBox: "0 0 864 158",
        body: (
          <>
            <Markers id="ov-w" />
            <Panel x={0} y={0} w={464} h={158} label="Getting compliant" />
            <Panel x={552} y={0} w={312} h={158} label="Every month after" />

            {overviewStages.map((stage, i) => {
              const x = i < 3 ? 16 + i * 152 : 568 + (i - 3) * 152;
              return <Card key={stage.num} x={x} y={44} w={128} h={76} num={stage.num} title={stage.lines} />;
            })}

            {[144, 296, 696].map((x) => (
              <path key={x} d={`M${x} 82H${x + 23}`} className={connector} strokeWidth="1.25" markerEnd="url(#ov-w-a)" />
            ))}

            <path d="M448 82H567" className="fill-none stroke-primary" strokeWidth="1.5" markerEnd="url(#ov-w-p)" />
            <LineLabel x={508} y={82} text="WCAG 2.2 AA" strong />

            <path d="M784 120V142H632V121" className={connector} strokeWidth="1.25" markerEnd="url(#ov-w-a)" />
            <LineLabel x={708} y={142} text="Repeats monthly" bg="fill-secondary" />
          </>
        ),
      }}
      narrow={{
        viewBox: "0 0 340 500",
        body: (
          <>
            <Markers id="ov-n" />
            <Panel x={0} y={0} w={340} h={256} label="Getting compliant" />
            <Panel x={0} y={316} w={340} h={184} label="Every month after" />

            {overviewStages.map((stage, i) => {
              const y = i < 3 ? 40 + i * 72 : 356 + (i - 3) * 72;
              return <Card key={stage.num} x={16} y={y} w={292} h={56} num={stage.num} numInline title={stage.line} />;
            })}

            {[96, 168, 412].map((y) => (
              <path key={y} d={`M162 ${y}V${y + 15}`} className={connector} strokeWidth="1.25" markerEnd="url(#ov-n-a)" />
            ))}

            <path d="M162 240V355" className="fill-none stroke-primary" strokeWidth="1.5" markerEnd="url(#ov-n-p)" />
            <LineLabel x={162} y={286} text="WCAG 2.2 AA" strong />

            <path d="M308 456H324V384H309" className={connector} strokeWidth="1.25" markerEnd="url(#ov-n-a)" />
          </>
        ),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 02 Audit and remediate: one loop                                    */
/* ------------------------------------------------------------------ */

const loopSteps = [
  { title: "Find", sub: "Scan and test by hand" },
  { title: "Rank", sub: "By impact on residents" },
  { title: "Fix", sub: "Or route to its owner" },
] as const;

export function AuditLoopDiagram() {
  return (
    <Responsive
      label="Audit and remediation run as one loop: find a barrier by scanning and testing by hand, rank it by its impact on residents, fix it or route it to its owner, then repeat for the next barrier."
      wide={{
        viewBox: "0 0 622 114",
        body: (
          <>
            <Markers id="loop-w" />
            {loopSteps.map((step, i) => (
              <Card key={step.title} x={1 + i * 220} y={1} w={180} h={68} title={step.title} sub={step.sub} />
            ))}
            <path d="M185 35H216" className={connector} strokeWidth="1.25" markerEnd="url(#loop-w-a)" />
            <path d="M405 35H436" className={connector} strokeWidth="1.25" markerEnd="url(#loop-w-a)" />
            <path d="M531 69V100H91V74" className={connector} strokeWidth="1.25" markerEnd="url(#loop-w-a)" />
            <LineLabel x={311} y={100} text="Repeat for the next barrier" />
          </>
        ),
      }}
      narrow={{
        viewBox: "0 0 340 252",
        body: (
          <>
            <Markers id="loop-n" />
            {loopSteps.map((step, i) => (
              <Card key={step.title} x={1} y={1 + i * 92} w={290} h={64} title={step.title} sub={step.sub} />
            ))}
            <path d="M146 69V88" className={connector} strokeWidth="1.25" markerEnd="url(#loop-n-a)" />
            <path d="M146 161V180" className={connector} strokeWidth="1.25" markerEnd="url(#loop-n-a)" />
            <path d="M291 217H318V33H296" className={connector} strokeWidth="1.25" markerEnd="url(#loop-n-a)" />
          </>
        ),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 03 Verify: a VPAT is accurate on the day it is issued              */
/* ------------------------------------------------------------------ */

const changes = ["New page", "PDF upload", "CMS update"] as const;

export function VpatValidityDiagram() {
  return (
    <Responsive
      label="A VPAT is accurate on the date it is issued and matches the site as tested. After the first change, such as a new page, a PDF upload or a CMS update, it may no longer match the site."
      wide={{
        viewBox: "0 0 780 124",
        body: (
          <>
            <Markers id="vpat-w" />
            <text x="0" y="36" fontSize="14" className="fill-foreground font-semibold">VPAT issued</text>
            <text x="0" y="55" fontSize="12" className="fill-muted-foreground">Accurate on this date</text>

            <path d="M14 84H300" className="fill-none stroke-primary" strokeWidth="3" />
            <path d="M300 84H772" className={connector} strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#vpat-w-a)" />
            <circle cx="12" cy="84" r="6" className="fill-primary" />

            {changes.map((change, i) => {
              const x = 300 + i * 160;
              return (
                <g key={change}>
                  <rect x={x - 5} y={79} width="10" height="10" transform={`rotate(45 ${x} 84)`} className="fill-card stroke-foreground" strokeWidth="1.25" />
                  <text x={x} y="62" fontSize="12.5" textAnchor="middle" className="fill-foreground font-medium">{change}</text>
                </g>
              );
            })}

            <text x="156" y="112" fontSize="12" textAnchor="middle" className="fill-primary font-medium">Matches the site as tested</text>
            <text x="540" y="112" fontSize="12" textAnchor="middle" className="fill-muted-foreground">May no longer match the site</text>
          </>
        ),
      }}
      narrow={{
        viewBox: "0 0 340 318",
        body: (
          <>
            <Markers id="vpat-n" />
            <path d="M16 18V120" className="fill-none stroke-primary" strokeWidth="3" />
            <path d="M16 120V312" className={connector} strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#vpat-n-a)" />
            <circle cx="16" cy="14" r="6" className="fill-primary" />
            <text x="40" y="19" fontSize="14" className="fill-foreground font-semibold">VPAT issued</text>
            <text x="40" y="37" fontSize="12" className="fill-muted-foreground">Accurate on this date</text>
            <text x="40" y="80" fontSize="12" className="fill-primary font-medium">Matches the site as tested</text>

            {changes.map((change, i) => {
              const y = 120 + i * 50;
              return (
                <g key={change}>
                  <rect x={11} y={y - 5} width="10" height="10" transform={`rotate(45 16 ${y})`} className="fill-card stroke-foreground" strokeWidth="1.25" />
                  <text x="40" y={y + 4.5} fontSize="13" className="fill-foreground font-medium">{change}</text>
                </g>
              );
            })}

            <text x="40" y="276" fontSize="12" className="fill-muted-foreground">May no longer match the site</text>
          </>
        ),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 04 Monitor for changes                                              */
/* ------------------------------------------------------------------ */

const changeSources = [
  "New pages and posts",
  "Uploaded PDFs and agendas",
  "CMS and plugin updates",
  "Content edits by staff",
  "Redesigns and templates",
] as const;

function SourcesList({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={188} rx="8" className="fill-card stroke-border" strokeWidth="1" />
      <Eyebrow x={x + 16} y={y + 25} text="Sources of change" />
      <path d={`M${x} ${y + 39}H${x + w}`} className="stroke-border" strokeWidth="1" />
      {changeSources.map((source, i) => (
        <g key={source}>
          <rect x={x + 16} y={y + 59 + i * 28} width="5" height="5" className="fill-muted-foreground/60" />
          <text x={x + 30} y={y + 66 + i * 28} fontSize="13" className="fill-foreground">
            {source}
          </text>
        </g>
      ))}
    </g>
  );
}

export function MonitoringDiagram() {
  return (
    <Responsive
      label="How changes are caught. New pages, uploaded PDFs, CMS and plugin updates, content edits by staff and redesigns all change your site. The monthly monitor compares it with the last cycle, and anything that broke is fixed ahead of new work."
      wide={{
        viewBox: "0 0 781 190",
        body: (
          <>
            <Markers id="mon-w" />
            <SourcesList x={1} y={1} w={220} />
            <path d="M221 95H257" className={connector} strokeWidth="1.25" markerEnd="url(#mon-w-a)" />
            <Card x={262} y={63} w={140} h={64} title="Your site" />
            <path d="M402 95H437" className={connector} strokeWidth="1.25" markerEnd="url(#mon-w-a)" />
            <Card x={442} y={63} w={160} h={64} title="Monthly monitor" sub="Vs. the last cycle" />
            <path d="M602 95H637" className={connector} strokeWidth="1.25" markerEnd="url(#mon-w-a)" />
            <Card x={642} y={63} w={138} h={64} title="Fixed first" sub="Ahead of new work" strong />
          </>
        ),
      }}
      narrow={{
        viewBox: "0 0 340 456",
        body: (
          <>
            <Markers id="mon-n" />
            <SourcesList x={1} y={1} w={338} />
            <path d="M170 189V212" className={connector} strokeWidth="1.25" markerEnd="url(#mon-n-a)" />
            <Card x={60} y={217} w={220} h={60} title="Your site" />
            <path d="M170 277V300" className={connector} strokeWidth="1.25" markerEnd="url(#mon-n-a)" />
            <Card x={60} y={305} w={220} h={60} title="Monthly monitor" sub="Vs. the last cycle" />
            <path d="M170 365V388" className={connector} strokeWidth="1.25" markerEnd="url(#mon-n-a)" />
            <Card x={60} y={393} w={220} h={60} title="Fixed first" sub="Ahead of new work" strong />
          </>
        ),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 05 Coordinate with vendors                                          */
/* ------------------------------------------------------------------ */

export function VendorHubDiagram() {
  return (
    <Responsive
      label="One shared issue record connects everyone. On your side: your team and content editors. Vendor: your developer or CMS vendor. A3S specialists work from the same record."
      wide={{
        viewBox: "0 0 760 232",
        body: (
          <>
            <Eyebrow x={1} y={16} text="Your organization" />
            <Eyebrow x={759} y={16} text="Your vendor" anchor="end" />

            <path d="M191 56H236V128H191M236 92H280" className={connector} strokeWidth="1.25" />
            <path d="M569 92H480" className={connector} strokeWidth="1.25" />
            <path d="M380 128V182" className={connector} strokeWidth="1.25" />
            <circle cx="236" cy="92" r="3" className="fill-muted-foreground/70" />

            <Card x={1} y={32} w={190} h={48} title="Your team" />
            <Card x={1} y={104} w={190} h={48} title="Content editors" />
            <Card x={569} y={68} w={190} h={48} title="Developer or CMS vendor" size={13.5} />
            <Card x={280} y={56} w={200} h={72} title="Shared issue record" sub="One source of truth" align="center" strong />
            <Card x={285} y={182} w={190} h={48} title="A3S specialists" align="center" />
          </>
        ),
      }}
      narrow={{
        viewBox: "0 0 340 382",
        body: (
          <>
            <path d="M24 65V358" className={connector} strokeWidth="1.25" />
            <Card x={1} y={1} w={338} h={64} title="Shared issue record" sub="One source of truth" align="center" strong />

            <Eyebrow x={48} y={96} text="Your organization" />
            <Eyebrow x={48} y={236} text="Your vendor" />
            <Eyebrow x={48} y={324} text="A3S" />
            {[
              { y: 108, t: "Your team" },
              { y: 160, t: "Content editors" },
              { y: 248, t: "Developer or CMS vendor" },
              { y: 336, t: "A3S specialists" },
            ].map((n) => (
              <g key={n.t}>
                <path d={`M24 ${n.y + 22}H48`} className={connector} strokeWidth="1.25" />
                <Card x={48} y={n.y} w={291} h={44} title={n.t} />
              </g>
            ))}
          </>
        ),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 06 Track and report: issue statuses                                 */
/* ------------------------------------------------------------------ */

const statuses = ["Found", "Assigned", "In progress", "Fixed", "Verified"] as const;

export function IssueLifecycleDiagram() {
  return (
    <Responsive
      label="Issue statuses in order: found, assigned, in progress, fixed, verified. A specialist retests every fix before it is verified; a fix that fails the retest goes back to assigned."
      wide={{
        viewBox: "0 0 782 128",
        body: (
          <>
            <Markers id="life-w" />
            {statuses.map((status, i) => (
              <Card key={status} x={1 + i * 163} y={28} w={128} h={48} title={status} align="center" strong={i === statuses.length - 1} />
            ))}
            {[0, 1, 2, 3].map((i) => {
              const x = 129 + i * 163;
              return <path key={i} d={`M${x + 4} 52H${x + 30}`} className={connector} strokeWidth="1.25" markerEnd="url(#life-w-a)" />;
            })}
            <text x="636" y="16" fontSize="11" textAnchor="middle" className="fill-muted-foreground font-medium">
              Specialist retest
            </text>
            <path d="M555 76V112H229V78" className={connector} strokeWidth="1.25" strokeDasharray="4 4" markerEnd="url(#life-w-a)" />
            <LineLabel x={392} y={112} text="Fails retest" />
          </>
        ),
      }}
      narrow={{
        viewBox: "0 0 340 302",
        body: (
          <>
            <Markers id="life-n" />
            {statuses.map((status, i) => (
              <Card key={status} x={1} y={1 + i * 64} w={220} h={44} title={status} align="center" strong={i === statuses.length - 1} />
            ))}
            {[0, 1, 2, 3].map((i) => {
              const y = 45 + i * 64;
              return <path key={i} d={`M111 ${y + 3}V${y + 19}`} className={connector} strokeWidth="1.25" markerEnd="url(#life-n-a)" />;
            })}
            <text x="120" y="248" fontSize="11" className="fill-muted-foreground font-medium">
              Specialist retest
            </text>
            <path d="M221 215H268V87H226" className={connector} strokeWidth="1.25" strokeDasharray="4 4" markerEnd="url(#life-n-a)" />
            <text x="278" y="147" fontSize="11" className="fill-muted-foreground font-medium">
              <tspan x="278">Fails</tspan>
              <tspan x="278" dy="15">retest</tspan>
            </text>
          </>
        ),
      }}
    />
  );
}
