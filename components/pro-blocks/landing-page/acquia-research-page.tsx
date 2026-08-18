import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CircleCheck,
  ExternalLink,
  FileSearch,
  Gavel,
  ListChecks,
  Quote,
  ScanSearch,
  ScrollText,
  TriangleAlert,
  Wrench,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * References
 *
 * Every factual claim on this page carries a numbered citation that
 * resolves to this list. Ordering is stable: append new entries, never
 * renumber, so external links to #ref-N keep pointing at the same source.
 * ------------------------------------------------------------------ */

type SourceKind =
  | "Acquia document"
  | "Acquia legal document"
  | "Acquia documentation"
  | "Drupal community"
  | "Corporate record"
  | "Regulatory"
  | "Peer-reviewed research"
  | "Survey data"
  | "Community statement"
  | "Independent testing";

type Reference = {
  id: number;
  citation: string;
  href: string;
  kind: SourceKind;
  note?: string;
};

const references: Reference[] = [
  {
    id: 1,
    citation: "Acquia, Inc., Subscription and Services Agreement, §§ 9.1, 9.4 and 10 (PDF).",
    href: "https://www.acquia.com/sites/default/files/legal/acquia-subscription-services-agreement.pdf",
    kind: "Acquia legal document",
    note: "Retrieved 18 August 2026. The word “accessib” appears once in the whole agreement, in a clause about rendering customer data inaccessible after termination. There is no accessibility-outcome clause of any kind.",
  },
  {
    id: 2,
    citation: "Acquia, Inc., Accessibility Statement.",
    href: "https://www.acquia.com/accessibility-statement",
    kind: "Acquia document",
    note: "Retrieved 18 August 2026. No publication or revision date is shown on the statement.",
  },
  {
    id: 3,
    citation: "Acquia, Inc., “Accessibility Drives Digital Freedom for all Acquia Users” (product accessibility page).",
    href: "https://www.acquia.com/product-accessibility",
    kind: "Acquia document",
    note: "Retrieved 18 August 2026.",
  },
  {
    id: 4,
    citation: "Acquia, Inc., “Website Content Optimization & Governance Platform” (Acquia Web Governance product page).",
    href: "https://www.acquia.com/products/acquia-web-governance",
    kind: "Acquia document",
    note: "Retrieved 18 August 2026.",
  },
  {
    id: 5,
    citation: "Acquia, Inc., “Web Accessibility Software” (Web Governance accessibility feature page).",
    href: "https://www.acquia.com/products/acquia-web-governance/features/web-accessibility",
    kind: "Acquia document",
    note: "Retrieved 18 August 2026.",
  },
  {
    id: 6,
    citation: "Acquia Product Documentation, “PageAssist introduction,” Web Governance.",
    href: "https://docs.acquia.com/web-governance/pageassist",
    kind: "Acquia documentation",
    note: "Retrieved 18 August 2026.",
  },
  {
    id: 7,
    citation: "Acquia Product Documentation, “Accessibility Fast track,” Web Governance.",
    href: "https://docs.acquia.com/web-governance/accessibility-fast-track-limited-access-0",
    kind: "Acquia documentation",
    note: "Retrieved 18 August 2026.",
  },
  {
    id: 8,
    citation: "Acquia, Inc., “Acquia Completes Acquisition of Monsido,” January 2024.",
    href: "https://www.businesswire.com/news/home/20240109729986/en/Acquia-Completes-Acquisition-of-Monsido",
    kind: "Corporate record",
    note: "Agreement announced 14 November 2023; the Monsido platform was acquired from CivicPlus.",
  },
  {
    id: 9,
    citation: "Acquia, Inc., “Our Path to Building Accessible Software for All Users.”",
    href: "https://www.acquia.com/blog/acquia-accessibility",
    kind: "Acquia document",
  },
  {
    id: 10,
    citation: "Drupal.org, “Accessibility” (Drupal core accessibility commitments).",
    href: "https://www.drupal.org/about/features/accessibility",
    kind: "Drupal community",
    note: "Drupal has maintained an official Accessibility Team since 2008.",
  },
  {
    id: 11,
    citation: "Acquia, Inc., “Vista Equity Partners and Acquia.” Majority investment announced September 2019, valued at approximately US$1 billion.",
    href: "https://www.acquia.com/about-us/vista-equity-partners-acquia",
    kind: "Corporate record",
  },
  {
    id: 12,
    citation: "Overlay Fact Sheet, overlayfactsheet.com.",
    href: "https://overlayfactsheet.com/en/",
    kind: "Community statement",
    note: "Checked 18 August 2026: Acquia, Monsido and PageAssist do not appear on its list of named vendors. AudioEye, UserWay and accessiBe do.",
  },
  {
    id: 13,
    citation:
      "U.S. Federal Trade Commission, “FTC Approves Final Order Requiring accessiBe to pay $1 Million,” 22 April 2025.",
    href: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million",
    kind: "Regulatory",
    note: "Final consent order against accessiBe. Acquia is not a party and has not been the subject of a comparable action.",
  },
  {
    id: 14,
    citation:
      "Tlamelo Makati, Garreth W. Tigwell and Kristen Shinohara, “The Promise and Pitfalls of Web Accessibility Overlays for Blind and Low Vision Users,” in Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS ’24), 27–30 October 2024. ACM. DOI 10.1145/3663548.3675650.",
    href: "https://dl.acm.org/doi/10.1145/3663548.3675650",
    kind: "Peer-reviewed research",
    note: "47 blind and low-vision survey respondents; 12 interviews. Acquia’s PageAssist was not among the products studied.",
  },
  {
    id: 15,
    citation:
      "WebAIM, “Survey of Web Accessibility Practitioners #3 Results.” Surveyed January 2021, published March 2021.",
    href: "https://webaim.org/blog/practitioners-survey-3/",
    kind: "Survey data",
  },
  {
    id: 16,
    citation:
      "U.S. Department of Justice, “Extension of Compliance Dates for Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities,” interim final rule, Federal Register, published and effective 20 April 2026.",
    href: "https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web",
    kind: "Regulatory",
  },
  {
    id: 17,
    citation:
      "Section508.gov, “Accessibility Conformance Report/Voluntary Product Accessibility Template (VPAT) Frequently Asked Questions.” U.S. General Services Administration.",
    href: "https://www.section508.gov/sell/acr-vpat-faq/",
    kind: "Regulatory",
    note: "Explains the ACR/VPAT expectation in federal and public-sector procurement.",
  },
  {
    id: 18,
    citation: "Deque Systems, “The Automated Accessibility Coverage Report.”",
    href: "https://www.deque.com/automated-accessibility-coverage-report/",
    kind: "Independent testing",
    note: "Analysis of more than 2,000 first-time audits covering over 13,000 pages and nearly 300,000 issues. Deque sells automated testing tooling, so its interest runs toward automation appearing more capable rather than less.",
  },
  {
    id: 19,
    citation: "Acquia Product Documentation, “PageCorrect introduction,” Web Governance.",
    href: "https://docs.acquia.com/web-governance/pagecorrect-introduction",
    kind: "Acquia documentation",
    note: "Retrieved 18 August 2026. PageCorrect is a paid add-on that repairs issues without CMS access; Acquia states “The changes are immediately reflected on your website.”",
  },
  {
    id: 20,
    citation: "Acquia Product Documentation, “Web Governance product guide.”",
    href: "https://docs.acquia.com/web-governance/web-governance-product-guide",
    kind: "Acquia documentation",
    note: "Retrieved 18 August 2026. Lists the paid add-ons, including PageCorrect, PageAssist and PDF Remediation.",
  },
  {
    id: 21,
    citation: "Acquia, Inc., “Embed Accessibility Expertise in Every Workflow” (Embedded Accessibility Experts solutions page).",
    href: "https://www.acquia.com/solutions/embedded-accessibility-experts",
    kind: "Acquia document",
    note: "Retrieved 18 August 2026. This page, unlike the Web Governance product documentation, does make compliance claims for Acquia’s AI agents.",
  },
];

/** Superscript citation linking to the reference list. */
function Cite({ ids }: { ids: number[] }) {
  return (
    <sup className="ml-0.5 whitespace-nowrap text-[0.7em] font-medium">
      {ids.map((id, index) => (
        <span key={id}>
          {index > 0 && <span className="text-muted-foreground">,</span>}
          <a
            href={`#ref-${id}`}
            className="text-primary focus-visible:ring-ring rounded-xs px-px hover:underline focus-visible:ring-2 focus-visible:outline-none"
          >
            {id}
            <span className="sr-only">{` (see reference ${id})`}</span>
          </a>
        </span>
      ))}
    </sup>
  );
}

/** A verbatim quotation from a source document. */
function Verbatim({
  children,
  attribution,
  refs,
}: {
  children: React.ReactNode;
  attribution: string;
  refs: number[];
}) {
  return (
    <figure className="border-primary my-1 flex flex-col gap-3 border-l-2 py-1 pl-5">
      <blockquote className="text-foreground text-base leading-relaxed">
        {children}
      </blockquote>
      <figcaption className="text-muted-foreground text-xs leading-relaxed">
        {attribution}
        <Cite ids={refs} />
      </figcaption>
    </figure>
  );
}

/** Callout for a point a reader could easily get wrong. */
function Callout({
  title,
  tinted,
  children,
}: {
  title: string;
  tinted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${tinted ? "bg-secondary" : "bg-background"} border-primary rounded-xl border border-l-4 p-5 lg:p-6`}
    >
      <p className="text-foreground text-sm leading-relaxed">
        <span className="font-semibold">{title}</span> {children}
      </p>
    </div>
  );
}

/** Section wrapper keeping heading structure and spacing consistent. */
function Section({
  id,
  eyebrow,
  icon: Icon,
  heading,
  intro,
  tinted,
  layout = "split",
  children,
}: {
  id: string;
  eyebrow?: string;
  icon?: typeof BookOpen;
  heading: string;
  intro?: React.ReactNode;
  tinted?: boolean;
  layout?: "reading" | "split";
  children: React.ReactNode;
}) {
  const isSplit = layout === "split";
  const eyebrowNode = eyebrow ? (
    <Tagline variant="ghost">
      {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      <span>{eyebrow}</span>
    </Tagline>
  ) : null;
  const headingNode = (
    <h2 id={`${id}-heading`} className="heading-lg text-foreground text-balance">
      {heading}
    </h2>
  );
  const introNode = intro ? (
    <p className="text-muted-foreground text-pretty text-base leading-relaxed">
      {intro}
    </p>
  ) : null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${tinted ? "bg-secondary" : "bg-background"} scroll-mt-20 border-b py-16 lg:py-20`}
    >
      <div className="container-padding-x container mx-auto">
        <div
          className={
            isSplit
              ? "mx-auto flex max-w-6xl flex-col gap-8"
              : "mx-auto flex max-w-3xl flex-col gap-6"
          }
        >
          {isSplit ? (
            <div className="grid gap-6 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:items-end lg:gap-12">
              <div className="section-title-gap-lg flex flex-col">
                {eyebrowNode}
                {headingNode}
              </div>
              {introNode}
            </div>
          ) : (
            <div className="section-title-gap-lg flex flex-col">
              {eyebrowNode}
              {headingNode}
              {introNode}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

const contents = [
  { href: "#what-it-is", label: "What Acquia is" },
  { href: "#what-it-does", label: "What the product actually does" },
  { href: "#does-right", label: "What Acquia gets right" },
  { href: "#pageassist", label: "PageAssist, the widget-shaped part" },
  { href: "#terms", label: "The accessibility terms" },
  { href: "#limits", label: "Limitations and open questions" },
  { href: "#what-remains", label: "What it leaves you to do" },
  { href: "#compare", label: "How it differs from overlay vendors" },
  { href: "#not-supported", label: "Claims that do not hold up" },
  { href: "#references", label: "References" },
];

/** The product lineage, which is genuinely confusing in the market. */
const lineage = [
  {
    step: "01",
    name: "Monsido",
    detail:
      "Independent web governance platform, later owned by CivicPlus. Acquia announced the acquisition on 14 November 2023 and completed it in January 2024.",
    refs: [8],
  },
  {
    step: "02",
    name: "Acquia Optimize",
    detail:
      "The Monsido brand was retired and the platform rebranded during 2024. Much of the product documentation still sits under acquia-optimize URLs.",
    refs: [7],
  },
  {
    step: "03",
    name: "Acquia Web Governance",
    detail:
      "The current name, adopted during 2025. Features and functionality carried across each rename, so material written about Monsido often still describes the current product.",
    refs: [4],
  },
];

/** The scan-to-fix workflow, as Acquia documents it. */
const workflow = [
  {
    icon: ScanSearch,
    step: "01",
    title: "Scan",
    description:
      "Automated crawls check pages, links, images, text, PDFs and mobile rendering against the selected standard.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Filter and prioritise",
    description:
      "Findings are grouped by conformance level and severity so major barriers can be surfaced first.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Assign and fix",
    description:
      "Issues are routed to the responsible people. Corrections are normally made in the site's own codebase and content.",
  },
  {
    icon: FileSearch,
    step: "04",
    title: "Re-scan and report",
    description:
      "Subsequent scans and reports track whether the backlog is actually shrinking over time.",
  },
];

/** Comparison against the runtime-remediation model. */
const comparison = [
  {
    dimension: "What the product does",
    acquia: "Finds and reports accessibility defects, and routes them to people",
    overlay: "Applies automated and scripted repairs to the page at runtime",
  },
  {
    dimension: "Where fixes land",
    acquia:
      "In the customer's own source code and content by default. The paid PageCorrect add-on instead applies changes without CMS access",
    overlay: "In a third-party JavaScript layer over the site",
  },
  {
    dimension: "If the subscription ends",
    acquia:
      "Fixes made in the codebase remain. We found no Acquia documentation on what happens to PageCorrect changes",
    overlay: "The runtime repairs stop loading with the script",
  },
  {
    dimension: "Compliance claim",
    acquia:
      "Product documentation offers no conformance guarantee, but the AI solutions page promises fixes “to ensure every page is compliant”",
    overlay: "Historically marketed as delivering compliance, a claim the FTC has acted on",
  },
  {
    dimension: "Named on the Overlay Fact Sheet",
    acquia: "No",
    overlay: "AudioEye, UserWay and accessiBe are all listed",
  },
];

/** What PageAssist lets a visitor change, from Acquia's documentation. */
const pageAssistFeatures = [
  "Adjust font, text spacing and font size",
  "Adjust cursor size",
  "Control the default and support languages",
  "Adjust the colour scheme and contrast",
  "Adjust page focus",
  "Highlight page elements for easier identification and navigation",
  "Pause or turn off animations and audio",
  "Hide all images",
  "Change navigation to keyboard",
];

export function AcquiaResearchPage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="bg-background border-b py-12 lg:py-16">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <header className="flex flex-col gap-8 lg:gap-10">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4">
                <Tagline>
                  <BookOpen className="text-primary h-3.5 w-3.5" aria-hidden="true" />
                  <span className="text-foreground">Research</span>
                </Tagline>
                <p className="text-muted-foreground text-xs">
                  Last reviewed <time dateTime="2026-08-18">18 August 2026</time>
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h1 className="heading-xl text-foreground max-w-5xl text-balance">
                  Acquia and Web Governance:{" "}
                  <span className="text-primary">The Documentary Record</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl text-pretty text-base leading-relaxed lg:text-lg">
                  What Acquia is, what its accessibility product actually does, what
                  its contract and public commitments say, and where the real limits
                  sit. Acquia is frequently grouped with overlay vendors and it does
                  not belong there, so this page sets out the difference precisely
                  and then asks the questions that do apply.
                </p>
              </div>
            </header>

            <div className="border-y">
              <div className="grid gap-4 py-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
                <h2 className="text-foreground text-base font-semibold">
                  Scope and method
                </h2>
                <p className="text-muted-foreground max-w-3xl text-pretty text-sm leading-relaxed">
                  Every factual statement below carries a numbered citation resolving
                  to a full reference at the foot of the page, with verbatim quotation
                  wherever the precise wording matters. Sources published by Acquia are
                  labelled as Acquia documents so you can weigh them accordingly. This
                  page gives real space to{" "}
                  <a href="#does-right" className="text-primary hover:underline">
                    what Acquia gets right
                  </a>
                  , because a review that only catalogued faults would not be research,
                  and it separates that from{" "}
                  <a href="#limits" className="text-primary hover:underline">
                    the limits that remain
                  </a>
                  . Where a finding could not be verified against a primary source it
                  was left out.
                </p>
              </div>

              <div className="bg-secondary/60 grid gap-4 border-t py-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
                <h2 className="text-foreground text-sm font-semibold">Disclosure</h2>
                <p className="text-muted-foreground max-w-3xl text-pretty text-sm leading-relaxed">
                  Perspective Tester provides manual accessibility testing and code
                  remediation. Acquia is both a potential competitor and a platform our
                  clients run on. That is why this page is built only on documents you
                  can open and check yourself.
                </p>
              </div>

              <div className="text-muted-foreground flex flex-col gap-2 border-t py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
                <span>All links checked on 18 August 2026.</span>
                <span>
                  Corrections:{" "}
                  <a
                    href="mailto:Info@perspectivetester.com"
                    className="text-primary font-medium hover:underline"
                  >
                    Info@perspectivetester.com
                  </a>
                </span>
              </div>
            </div>

            <nav aria-labelledby="contents-heading" className="flex flex-col gap-5">
              <div className="flex items-end justify-between gap-4">
                <h2 id="contents-heading" className="text-foreground text-xl font-semibold">
                  Contents
                </h2>
                <p className="text-muted-foreground hidden text-xs sm:block">
                  Jump to a section
                </p>
              </div>
              <ol className="grid grid-cols-1 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5 sm:gap-x-12 lg:gap-x-16">
                {contents.map((item, index) => (
                  <li key={item.href} className="border-t">
                    <a
                      href={item.href}
                      className="group hover:bg-secondary/60 grid min-h-14 grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 px-2 py-4 outline-none transition-colors"
                    >
                      <span className="text-muted-foreground group-hover:text-primary text-xs font-semibold tabular-nums transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground group-hover:text-primary text-sm leading-snug font-medium transition-colors group-hover:underline">
                        {item.label}
                      </span>
                      <ArrowRight
                        className="text-muted-foreground h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ What it is */}
      <Section
        id="what-it-is"
        eyebrow="The company"
        icon={Building2}
        heading="What Acquia is"
        tinted
        intro="Acquia is a digital experience platform company built around Drupal. Accessibility is one product line inside a much larger business, which is the first thing that separates it from vendors whose entire product is an accessibility widget."
      >
        <div className="flex flex-col gap-8">
          <p className="text-muted-foreground max-w-4xl text-base leading-relaxed">
            Acquia was co-founded by Dries Buytaert, the founder and project lead of
            the open-source Drupal content management system, and Jay Batson. It is
            headquartered in Boston and sells cloud hosting, a digital experience
            platform, a digital asset manager and marketing tooling built around
            Drupal. Vista Equity Partners took a majority investment in September
            2019 in a transaction valued at approximately US$1 billion, so Acquia is
            privately held rather than publicly listed.
            <Cite ids={[11]} />
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              The product lineage, which trips people up
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Acquia&rsquo;s accessibility product has been renamed twice in two
              years. If you are comparing vendor documentation or reading older
              reviews, this is usually the source of the confusion:
            </p>
            <ol className="grid border-y lg:grid-cols-3 lg:divide-x">
              {lineage.map((item) => (
                <li
                  key={item.step}
                  className="flex flex-col gap-2 border-b py-6 last:border-b-0 lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="text-primary text-[0.65rem] font-semibold tracking-wider tabular-nums uppercase">
                    Stage {item.step}
                  </span>
                  <strong className="text-foreground text-sm font-semibold">
                    {item.name}
                  </strong>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item.detail}
                    <Cite ids={item.refs} />
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- What it does */}
      <Section
        id="what-it-does"
        eyebrow="The product"
        icon={ScanSearch}
        heading="What the product actually does"
        intro="The base platform scans, reports and routes issues to the people responsible for fixing them. Paid add-ons go further than that, and one of them applies changes to the live site without touching the CMS, which complicates the tidy distinction usually drawn between Acquia and overlay vendors."
      >
        <div className="flex flex-col gap-8">
          <p className="text-muted-foreground max-w-4xl text-base leading-relaxed">
            Acquia describes a platform that &ldquo;automatically scans your site to
            find any possible issues that may hinder accessibility,&rdquo; covering
            links, images, text, PDFs and mobile rendering, and checking against WCAG
            2.0, 2.1 and 2.2 at the A, AA and AAA levels. Its dashboard also maps
            findings to the ADA, Section 508, AODA, the EU Web Accessibility
            Directive, the European Accessibility Act, the Australian DDA and the UK
            Public Sector Bodies Accessibility Regulations.
            <Cite ids={[4, 5]} /> Accessibility sits alongside content quality, SEO,
            data privacy, performance and archiving in the same platform.
            <Cite ids={[4]} />
          </p>

          <ol className="grid border-y sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
            {workflow.map((item) => {
              const StepIcon = item.icon;

              return (
                <li
                  key={item.step}
                  className="flex items-start gap-4 border-b py-6 last:border-b-0 sm:odd:lg:border-b-0 lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="bg-background text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                    <StepIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="text-primary text-[0.65rem] font-semibold tracking-wider tabular-nums uppercase">
                      Step {item.step}
                    </span>
                    <strong className="text-foreground mt-1 block text-sm font-semibold">
                      {item.title}
                    </strong>
                    <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                      {item.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>

          <Callout title="The load-bearing fact, stated carefully.">
            In the base platform, remediation is performed by the customer in the
            customer&rsquo;s own codebase and content, and Acquia&rsquo;s role is
            detection, prioritisation and assignment.
            <Cite ids={[5]} /> That is the difference people are reaching for when they
            say Acquia is not an overlay, and for the core product it holds. It stops
            holding once the PageCorrect add-on is enabled, which is covered below. Any
            evaluation should establish which of these the organisation has actually
            bought.
            <Cite ids={[19, 20]} />
          </Callout>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              Accessibility Fast Track
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The one feature that edges toward automated repair is Fast Track, which
              locates recurring elements such as links, images and text and lets a
              team act on the same issue across many pages at once. It supports
              marking matching code as fixed, reviewed or ignored in bulk. Acquia
              documents the risk itself, warning that &ldquo;ignored snippets are not
              taken into consideration by subsequent scans, use it only if you are
              certain.&rdquo;
              <Cite ids={[7]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              PageCorrect, where Acquia does patch the live site
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Acquia sells a paid add-on called PageCorrect. It is easy to miss,
              because it sits in an add-on list rather than on the main accessibility
              feature page, and it changes the architectural picture materially.
              <Cite ids={[20]} />
            </p>
            <Verbatim
              attribution="Acquia Product Documentation, “PageCorrect introduction,” Web Governance"
              refs={[19]}
            >
              &ldquo;Web Governance PageCorrect helps you to find and repair quality
              assurance and accessibility issues directly,{" "}
              <span className="font-semibold">
                without the need to log in to a content management system (CMS)
              </span>
              . &hellip;{" "}
              <span className="font-semibold">
                The changes are immediately reflected on your website.
              </span>{" "}
              The interface enables non-technical users with no coding knowledge to
              repair issues on your site easily.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Its documented accessibility functions include finding and repairing
              missing or incorrectly applied alt attributes, and removing
              non-semantic elements such as{" "}
              <code className="text-foreground text-[0.85em]">&lt;i&gt;</code> and{" "}
              <code className="text-foreground text-[0.85em]">&lt;b&gt;</code>.
              <Cite ids={[19]} />
            </p>
            <Callout title="Architecturally, this is vendor-layer remediation." tinted>
              Repairing a site without CMS access, with changes immediately reflected
              on the live page, is remediation applied through the vendor&rsquo;s
              layer rather than in the source. For the issues PageCorrect covers, that
              is architecturally the same pattern overlay vendors use, and the same
              dependency follows: those particular corrections rest on Acquia&rsquo;s
              script continuing to run. We have not found Acquia documentation stating
              what happens to PageCorrect changes if the subscription lapses, so we do
              not assert an answer.
              <Cite ids={[19]} />
            </Callout>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              The AI agents, and a claim that does not match the documentation
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Acquia&rsquo;s Web Governance product documentation is careful and
              avoids conformance guarantees. Its newer solutions marketing is not, and
              the two should be read together:
            </p>
            <Verbatim
              attribution="Acquia, “Embed Accessibility Expertise in Every Workflow,” Embedded Accessibility Experts solutions page"
              refs={[21]}
            >
              &ldquo;Get real-time feedback and automatic fixes from our built-in AI
              agents{" "}
              <span className="font-semibold">to ensure every page is compliant</span>
              , accessible, and optimized before you hit publish.&rdquo;
            </Verbatim>
            <Verbatim
              attribution="Acquia, “AI Web Governance Agent,” same page"
              refs={[21]}
            >
              &ldquo;Let our AI continuously scan your site for accessibility and
              content policy issues and{" "}
              <span className="font-semibold">
                automatically remediate them to ensure compliance
              </span>
              . (Coming Soon)&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Two qualifiers matter and should not be dropped. The fully automated
              agent is labelled{" "}
              <span className="text-foreground font-medium">Coming Soon</span> by
              Acquia itself, so it is a roadmap claim rather than a shipping feature.
              The capability described as available now is{" "}
              <span className="text-foreground font-medium">fix suggestions</span> in a
              browser extension, which leaves a human deciding what to apply.
              <Cite ids={[21]} /> Even so, &ldquo;to ensure every page is
              compliant&rdquo; is a compliance claim, and it is the category of claim
              the FTC acted on in 2025 when the product making it was automated.
              <Cite ids={[13, 21]} />
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- What it does right */}
      <Section
        id="does-right"
        eyebrow="Fair assessment"
        icon={CircleCheck}
        heading="What Acquia gets right"
        tinted
        intro="Read against the vendors it is usually compared with, Acquia's accessibility posture is materially more honest. These are checkable claims, not impressions."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-base font-semibold">
              Its product documentation avoids conformance guarantees
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Across the Web Governance product page, the accessibility feature page
              and the PageAssist documentation, Acquia offers no guarantee of WCAG or
              ADA conformance. The language is consistently about working towards
              standards and identifying violations, not about achieving compliance on
              installation.
              <Cite ids={[4, 5, 6]} /> Compared with how overlay products have
              historically been marketed, that restraint is real and worth crediting.
            </p>
            <Callout title="With one significant exception, added in fairness.">
              Acquia&rsquo;s newer Embedded Accessibility Experts page does make a
              compliance claim, promising automatic fixes from AI agents &ldquo;to
              ensure every page is compliant&rdquo; and an agent that will
              &ldquo;automatically remediate&rdquo; issues &ldquo;to ensure
              compliance,&rdquo; the latter marked Coming Soon.
              <Cite ids={[21]} /> An earlier version of this page credited Acquia with
              making no compliance claim anywhere. That was wrong, and the correction
              is recorded here rather than quietly applied.
            </Callout>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              Its contract contains no accessibility carve-out, because it makes no
              accessibility promise
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              We read Acquia&rsquo;s Subscription and Services Agreement in full. The
              string &ldquo;accessib&rdquo; appears exactly once, in a clause about
              rendering customer data inaccessible after termination. There is no
              accessibility disclaimer, no accessibility indemnity carve-out and no
              covenant not to sue over accessibility claims.
              <Cite ids={[1]} /> That is a notable contrast with overlay vendors,
              whose contracts need explicit accessibility disclaimers precisely
              because their marketing raises the expectation.
            </p>
            <Verbatim
              attribution="Acquia Subscription and Services Agreement, §9.1 (Acquia Representations & Warranties)"
              refs={[1]}
            >
              &ldquo;Acquia represents and warrants that &hellip; the Subscription
              Services will materially conform with the relevant Documentation, [and]
              the functionality and security of the Subscription Services will not be
              materially decreased during a Subscription Term.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              This is an ordinary software warranty rather than an accessibility
              warranty, and it should not be read as one. It warrants that the tool
              works as documented, not that your website will conform to WCAG. But it
              is a positive commitment of a kind the overlay contracts do not offer at
              all.
              <Cite ids={[1]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              It publishes an accessibility statement and targets a higher bar than
              the law requires
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Acquia states that it &ldquo;aims to adhere to WCAG 2.2 Level AA
              guidelines&rdquo; for its own website and publicly distributed digital
              assets, and invites people who hit barriers to report them.
              <Cite ids={[2]} /> WCAG 2.2 AA is a step above the WCAG 2.1 AA standard
              the DOJ adopted for ADA Title II, so the stated target exceeds the
              current regulatory floor.
              <Cite ids={[16]} /> The statement carries no publication or revision
              date, which is a gap worth noting.
              <Cite ids={[2]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              It describes its own testing method, and admits a gap in it
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Acquia says it uses &ldquo;a combination of tools, Lighthouse and axe,
              to review accessibility&rdquo; and has &ldquo;incorporated VoiceOver and
              keyboard accessibility as part of our testing.&rdquo; It also states it
              is &ldquo;looking to incorporate non-visual desktop access (NVDA) for
              screen reading,&rdquo; which is a candid acknowledgement that the most
              widely used Windows screen reader is not yet part of its standard
              process.
              <Cite ids={[3]} /> Acquia dates the start of this work to the
              formation of its user experience team in 2016, since expanded into a
              Product and Service Design team working alongside Product and
              Engineering.
              <Cite ids={[9]} /> Publishing a method that names its own unfinished
              work is unusual in this market and counts in Acquia&rsquo;s favour.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              The Drupal lineage is a genuine asset
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Drupal has maintained an official Accessibility Team since 2008, treats
              accessibility issues in core as critical bugs, commits core to the
              current WCAG guidelines, and added support for the Authoring Tool
              Accessibility Guidelines (ATAG) 2.0 in Drupal 8 after including Part A
              in Drupal 7.
              <Cite ids={[10]} /> ATAG matters more than it is usually given credit
              for: Part B is about whether the tool helps authors produce accessible
              content in the first place, which is upstream of everything a scanner
              can find later. An organisation building on Drupal starts from a better
              baseline than one retrofitting a widget.
              <Cite ids={[10]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              The accessibility community does not classify it as an overlay
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The Overlay Fact Sheet lists dozens of named overlay vendors, including
              AudioEye, UserWay and accessiBe. Checked on 18 August 2026, Acquia,
              Monsido and PageAssist appear nowhere on that list.
              <Cite ids={[12]} /> That absence is not proof of quality, but it is a
              checkable signal that practitioners who scrutinise this category closely
              have not put Acquia in it.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              It covers PDFs and mobile, which many tools skip
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The platform scans PDFs for accessibility errors and checks mobile
              rendering.
              <Cite ids={[5]} /> Inaccessible PDFs are one of the most common and most
              persistent barriers on public sector sites, and they sit entirely outside
              what a runtime overlay can reach, so including them is a substantive
              difference rather than a feature-list entry.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- PageAssist */}
      <Section
        id="pageassist"
        eyebrow="The exception"
        icon={ScrollText}
        heading="PageAssist, the widget-shaped part"
        intro="Acquia does ship a visitor-facing toolbar. It is the one component that invites comparison with overlays, so it deserves direct scrutiny rather than a footnote."
      >
        <div className="flex flex-col gap-8">
          <Verbatim
            attribution="Acquia Product Documentation, “PageAssist introduction,” Web Governance"
            refs={[6]}
          >
            &ldquo;Acquia Web Governance PageAssist is a personalization toolbar that
            makes a website more user-friendly and visually accessible for your
            visitors. PageAssist alerts you about potential accessibility issues on
            your website and provides a quick way to fix issues. PageAssist requires
            the Web Governance script.&rdquo;
          </Verbatim>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              What it lets a visitor change
            </h3>
            <ul className="text-muted-foreground grid max-w-5xl list-disc gap-2 pl-5 text-sm leading-relaxed sm:grid-cols-2 sm:gap-x-10">
              {pageAssistFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              It is available in twelve languages and requires the Web Governance
              script to be present on the site.
              <Cite ids={[6]} />
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              Where it stays on the right side of the line, and where it does not
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Most of that list is presentation control: fonts, spacing, cursor size,
              colour scheme, contrast, pausing animation. Acquia markets it as a
              personalisation toolbar and attaches no compliance claim to it, which is
              the honest description of what such a control does.
              <Cite ids={[6]} />
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Two entries go further than presentation.{" "}
              <span className="text-foreground font-medium">
                &ldquo;Change navigation to keyboard&rdquo;
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                &ldquo;Hide all images&rdquo;
              </span>{" "}
              alter how the page behaves and what it contains, not merely how it
              looks. Those are the categories where the peer-reviewed research found
              overlays most often interfering with assistive technology that users
              already had configured.
              <Cite ids={[14]} /> We have found no independent published testing of
              PageAssist specifically, so this is a question to put to Acquia rather
              than a documented failure.
            </p>
            <Callout title="The redundancy point applies here too." tinted>
              Participants in the ASSETS study repeatedly observed that presentation
              controls of this kind largely duplicate settings their operating system
              and browser already provide, and that the value is mainly for people not
              yet fluent with those native tools.
              <Cite ids={[14]} /> That is a fair description of PageAssist&rsquo;s
              likely benefit: real for some visitors, and not a substitute for fixing
              the page.
            </Callout>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------------- Terms */}
      <Section
        id="terms"
        eyebrow="Contract"
        icon={Gavel}
        heading="The accessibility terms"
        tinted
        intro="What a vendor puts in its contract is usually a better guide to what it believes it is selling than what it puts on its website."
      >
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            Acquia&rsquo;s Subscription and Services Agreement follows an ordinary
            enterprise software pattern. Section 9.1 warrants that the Subscription
            Services will materially conform with the Documentation and that
            functionality and security will not be materially decreased during the
            term. Section 9.4 then disclaims everything not expressly granted:
            <Cite ids={[1]} />
          </p>
          <Verbatim attribution="Acquia Subscription and Services Agreement, §9.4 (Disclaimer)" refs={[1]}>
            &ldquo;Except as expressly provided herein, Acquia makes no warranties of
            any kind, whether express, implied, oral or written, statutory or
            otherwise, and Acquia hereby disclaims all implied warranties and
            conditions, including, to the maximum extent permitted by applicable law,
            any warranties of merchantability or fitness for any particular
            purpose.&rdquo;
          </Verbatim>
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            Aggregate liability is capped at the amount paid or payable for the
            services giving rise to the claim, with the usual carve-outs for matters
            that cannot be limited by law. Trial services are provided &ldquo;as
            is&rdquo; with no warranty and no indemnification.
            <Cite ids={[1]} />
          </p>
          <Callout title="What is absent is the finding.">
            There is no accessibility-specific disclaimer in the agreement, no clause
            excluding indemnity for third-party accessibility claims, and no covenant
            barring the customer from suing over them. Overlay contracts contain those
            clauses because their marketing creates the expectation that has to be
            disclaimed. Acquia does not need one because it never promises the
            outcome.
            <Cite ids={[1]} />
          </Callout>
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            The practical consequence for a buyer is unchanged, and worth stating
            plainly: the legal obligation to have an accessible website stays with you
            either way. Under ADA Title II the rule reaches content &ldquo;provided or
            made available&rdquo; through vendors and licensors, so no procurement
            decision moves the duty off the public entity.
            <Cite ids={[16]} />
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------------- Limitations */}
      <Section
        id="limits"
        eyebrow="Open questions"
        icon={TriangleAlert}
        heading="Limitations and open questions"
        intro="A more honest model is not a complete answer. These are the limits that apply to Acquia specifically, and the questions worth putting to them in an evaluation."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-base font-semibold">
              Automated detection has a hard ceiling
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              A scanner finds machine-detectable defects. It cannot judge whether
              alternative text conveys the right meaning, whether a heading structure
              reflects the actual document, or whether a person can complete a
              multi-step task such as a permit application or a checkout. Those
              failures are disproportionately the ones that generate complaints and
              litigation, and they need human testing with assistive technology.
              Acquia&rsquo;s materials do not overstate this, but a buyer reading a
              green dashboard could still draw the wrong conclusion.
              <Cite ids={[5]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              Finding is not fixing, and the backlog is the whole problem
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The model depends entirely on the customer having capacity to act on
              what the scan returns. For a small public body where one person already
              carries several systems, a subscription that reliably produces a long
              prioritised list may change very little on the site itself. The tool
              makes the problem visible and auditable, which has real value, but
              visibility is not remediation.
              <Cite ids={[5]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              Bulk actions can quietly suppress findings
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Fast Track allows issues to be marked fixed, reviewed or ignored across
              many pages at once, and Acquia documents that ignored snippets are not
              taken into consideration by subsequent scans, advising that the option
              be used &ldquo;only if you are certain.&rdquo;
              <Cite ids={[7]} /> Used carefully that is efficient. Used under deadline
              pressure it is a mechanism for making a dashboard look better without the
              site changing. Any evaluation should ask who can mark issues ignored and
              whether that is audited.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              No published VPAT or Accessibility Conformance Report
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Acquia publishes an accessibility statement and a product accessibility
              page describing its testing approach, but we could not locate a
              published VPAT or Accessibility Conformance Report for Web Governance or
              for the wider platform.
              <Cite ids={[2, 3]} /> In federal and public-sector procurement an ACR is
              the normal way a supplier evidences conformance of its own product.
              <Cite ids={[17]} /> Since the accessibility of the authoring and
              dashboard interfaces determines whether a disabled staff member can do
              the job, this is a reasonable thing to request before signing.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              No independent published research on the product
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The peer-reviewed literature on this market studies overlays, and
              PageAssist was not among the products tested.
              <Cite ids={[14]} /> Practitioner survey data covers overlays and widgets
              as a category rather than scanning platforms.
              <Cite ids={[15]} /> So the favourable assessment on this page rests on
              Acquia&rsquo;s own documentation and on reasoning from the model, not on
              independent testing. That is a real limitation of this review, and we
              would rather say so than imply an evidence base that does not exist.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- What remains */}
      <Section
        id="what-remains"
        eyebrow="The remaining work"
        icon={Wrench}
        heading="What it leaves you to do"
        tinted
        intro="A governance platform hands you visibility and a prioritised queue. It is worth being concrete about what still has to be done by people after the scan finishes, because that is the part organisations consistently underestimate."
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              Most WCAG success criteria cannot be evaluated by software
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The clearest evidence on this comes from a company with every reason to
              argue the opposite. Deque sells automated testing tooling, and its
              coverage report is an argument that automation is more capable than the
              industry gives it credit for. Even so, it puts criteria-level coverage
              at{" "}
              <span className="text-foreground font-medium">
                16 of the 50 WCAG 2.1 Level AA success criteria
              </span>
              , which it acknowledges supports the commonly cited 20 to 30 per cent
              figure.
              <Cite ids={[18]} />
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Deque&rsquo;s counter-argument is that criteria are the wrong unit,
              because a handful of criteria generate most real-world defects. Measured
              by volume of issues across more than 2,000 first-time audits covering
              over 13,000 pages and nearly 300,000 issues, its automated testing
              identified{" "}
              <span className="text-foreground font-medium">57.38%</span> of issues.
              <Cite ids={[18]} />
            </p>
            <Callout title="Both numbers are true, and they answer different questions.">
              If you are asking &ldquo;how much of my defect backlog can a scanner
              find,&rdquo; the answer is a little over half on the most
              automation-favourable published measure. If you are asking &ldquo;can a
              scanner tell me whether I conform to WCAG,&rdquo; the answer is that
              roughly two thirds of the success criteria are outside what it can
              decide. Procurement usually asks the first question. Regulators and
              plaintiffs ask the second.
              <Cite ids={[18]} />
            </Callout>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              The judgement-based half, made concrete
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              These are the questions a scan cannot settle. Every one of them needs a
              person, and most need a person testing with assistive technology:
            </p>
            <ul className="text-muted-foreground grid max-w-5xl list-disc gap-2.5 pl-5 text-sm leading-relaxed lg:grid-cols-2 lg:gap-x-10">
              <li>
                Whether alternative text conveys the meaning the image carries, rather
                than merely existing.
              </li>
              <li>
                Whether the heading structure reflects the actual document, rather than
                merely being sequential.
              </li>
              <li>
                Whether a keyboard user can complete a multi-step task such as a permit
                application, a booking or a checkout.
              </li>
              <li>
                Whether focus order matches the visual order a sighted user would
                follow.
              </li>
              <li>
                Whether an error message explains how to fix the problem, not just that
                one exists.
              </li>
              <li>
                Whether a screen reader announces a custom component in a way that makes
                it operable.
              </li>
              <li>
                Whether captions and transcripts are accurate, not just present.
              </li>
              <li>
                Whether a page still works at 200% zoom and 400% reflow on a real
                device.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              And four things the subscription does not include
            </h3>
            <ol className="grid gap-px border-y sm:grid-cols-2">
              {[
                {
                  title: "Writing most of the fixes",
                  body: "Outside the narrow set PageCorrect handles, every finding resolves into a code or content change that somebody has to make, review and ship. The platform assigns that work; it does not do it.",
                  refs: [5, 19],
                },
                {
                  title: "Remediating the PDFs, unless you buy that too",
                  body: "The scanner flags inaccessible PDFs, and Acquia sells PDF Remediation as a separate paid add-on. On the base subscription, tagging structure, reading order and table headers remain a manual job, and on public sector sites the back catalogue is usually large.",
                  refs: [5, 20],
                },
                {
                  title: "Testing with assistive technology",
                  body: "Nothing in the platform runs your key journeys against JAWS, NVDA or VoiceOver. Acquia applies that kind of testing to its own products, not to yours.",
                  refs: [3],
                },
                {
                  title: "Producing evidence that satisfies procurement",
                  body: "A scan report is not an audit statement or an Accessibility Conformance Report. Public-sector buyers are increasingly asked for the latter.",
                  refs: [17],
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="bg-background flex flex-col gap-2 p-5 lg:p-6"
                >
                  <strong className="text-foreground text-sm font-semibold">
                    {item.title}
                  </strong>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                    <Cite ids={item.refs} />
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            None of this is a criticism of Acquia. A governance platform that finds
            defects, ranks them and tracks whether the backlog is shrinking is doing
            the job it says it does, and doing it against real standards. The point is
            narrower and it applies to every tool in this category: the scan is the
            start of the work, not the end of it. An organisation that buys monitoring
            without also securing the capacity to remediate and the human testing to
            cover the judgement-based criteria will have better reporting and the same
            website.
            <Cite ids={[5, 18]} />
          </p>
        </div>
      </Section>

      {/* --------------------------------------------------------- Compare */}
      <Section
        id="compare"
        eyebrow="Comparison"
        icon={ListChecks}
        heading="How it differs from overlay vendors"
        tinted
        intro="This is the distinction that most often gets flattened in procurement conversations, so it is worth setting out side by side."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
            <caption className="text-muted-foreground pb-3 text-left text-xs">
              Acquia Web Governance compared with the runtime-remediation model sold
              by overlay vendors.
            </caption>
            <thead>
              <tr className="border-b-2">
                <th scope="col" className="text-foreground py-3 pr-6 font-semibold">
                  Dimension
                </th>
                <th scope="col" className="text-foreground py-3 pr-6 font-semibold">
                  Acquia Web Governance
                </th>
                <th scope="col" className="text-foreground py-3 font-semibold">
                  Overlay products
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.dimension} className="border-b align-top">
                  <th scope="row" className="text-foreground py-4 pr-6 text-left font-medium">
                    {row.dimension}
                  </th>
                  <td className="text-muted-foreground py-4 pr-6">{row.acquia}</td>
                  <td className="text-muted-foreground py-4">{row.overlay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
          For the evidence behind the right-hand column, including each
          vendor&rsquo;s own contractual language and the peer-reviewed user research,
          see our companion review of{" "}
          <a href="/research/accessibility-overlays" className="text-primary hover:underline">
            accessibility overlays, AudioEye and UserWay
          </a>
          .
        </p>
      </Section>

      {/* ------------------------------------------- Claims that don't hold up */}
      <Section
        id="not-supported"
        eyebrow="Corrections"
        icon={TriangleAlert}
        heading="Claims that do not hold up"
        intro="Assertions about Acquia that circulate in both directions, corrected against the record. Several of these would favour us commercially if we let them stand."
      >
        <div className="flex flex-col gap-5">
          {[
            {
              claim: "“Acquia is an accessibility overlay.”",
              response: (
                <>
                  Inaccurate. Its accessibility product scans and reports; remediation
                  happens in the customer&rsquo;s codebase. The optional PageAssist
                  toolbar is a visitor personalisation control that carries no
                  compliance claim, and Acquia does not appear on the Overlay Fact
                  Sheet&rsquo;s vendor list.
                  <Cite ids={[5, 6, 12]} />
                </>
              ),
            },
            {
              claim: "“Acquia never applies fixes at runtime, only in your codebase.”",
              response: (
                <>
                  Not accurate, and we stated this incorrectly in an earlier version of
                  this page. The base platform behaves that way, but the paid
                  PageCorrect add-on repairs issues without CMS access, with changes
                  &ldquo;immediately reflected on your website.&rdquo; For the issues it
                  covers that is remediation in the vendor&rsquo;s layer.
                  <Cite ids={[19, 20]} />
                </>
              ),
            },
            {
              claim: "“Acquia was fined by the FTC over accessibility claims.”",
              response: (
                <>
                  No. The $1,000,000 order was against accessiBe. Acquia is not a party
                  and has not been the subject of a comparable action in the public
                  record.
                  <Cite ids={[13]} />
                </>
              ),
            },
            {
              claim: "“Acquia’s contract disclaims accessibility, like the overlay vendors.”",
              response: (
                <>
                  Not supported. We read the Subscription and Services Agreement in
                  full: it contains no accessibility disclaimer, no accessibility
                  indemnity carve-out and no covenant not to sue. It carries an
                  ordinary warranty that the services will materially conform with the
                  documentation.
                  <Cite ids={[1]} />
                </>
              ),
            },
            {
              claim: "“Acquia Web Governance makes your site WCAG compliant.”",
              response: (
                <>
                  Overstated, and Acquia does not say this. The platform identifies and
                  prioritises issues; conformance depends on whether the organisation
                  fixes them and on human testing of the things a scanner cannot judge.
                  <Cite ids={[5]} />
                </>
              ),
            },
            {
              claim: "“Buying a governance platform transfers the compliance obligation.”",
              response: (
                <>
                  It does not. Under the ADA Title II rule the obligation reaches
                  content provided or made available through vendors and licensors, so
                  it stays with the covered entity regardless of tooling.
                  <Cite ids={[16]} />
                </>
              ),
            },
            {
              claim: "“Monsido, Acquia Optimize and Acquia Web Governance are different products.”",
              response: (
                <>
                  They are the same platform under three names. Monsido was acquired in
                  January 2024, rebranded Acquia Optimize during 2024, and renamed
                  Acquia Web Governance during 2025. Documentation still lives under
                  several of these URLs.
                  <Cite ids={[4, 7, 8]} />
                </>
              ),
            },
          ].map((item) => (
            <div key={item.claim} className="flex flex-col gap-2 border-t pt-5">
              <h3 className="text-foreground text-base font-semibold">{item.claim}</h3>
              <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
                {item.response}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------- References */}
      <Section
        id="references"
        eyebrow="Sources"
        icon={Quote}
        heading="References"
        tinted
        intro="Primary documents are linked directly wherever they are publicly hosted. All links were retrieved and checked on 18 August 2026."
      >
        <ol className="flex list-none flex-col gap-5 p-0">
          {references.map((reference) => (
            <li
              key={reference.id}
              id={`ref-${reference.id}`}
              className="flex scroll-mt-24 gap-4 border-t pt-4"
            >
              <span className="text-primary w-7 shrink-0 text-sm font-semibold tabular-nums">
                {reference.id}.
              </span>
              <div className="flex flex-col gap-1.5">
                <p className="text-foreground max-w-4xl text-sm leading-relaxed">
                  {reference.citation}
                </p>
                <p className="text-muted-foreground text-xs">
                  <span className="text-primary font-medium">{reference.kind}</span>
                </p>
                {reference.note ? (
                  <p className="text-muted-foreground max-w-4xl text-xs leading-relaxed italic">
                    {reference.note}
                  </p>
                ) : null}
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary inline-flex w-fit items-center gap-1.5 text-xs break-all transition-colors"
                >
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                  <span>{reference.href.replace(/^https?:\/\//, "")}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-background mt-2 flex flex-col gap-3 rounded-xl border p-6">
          <h3 className="text-foreground text-sm font-semibold">
            Method, limitations and corrections
          </h3>
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            This page was compiled from primary sources: Acquia&rsquo;s subscription
            agreement, accessibility statement, product pages and product
            documentation, Drupal community documentation, corporate announcements,
            federal regulatory material and peer-reviewed research. The subscription
            agreement was read in full rather than searched, which is how we can state
            that it contains no accessibility clause. Claims that could not be verified
            against a primary source were omitted.
          </p>
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            The principal limitation is stated in the body and repeated here because it
            matters: there is no independent published research testing Acquia&rsquo;s
            accessibility product or PageAssist. The favourable assessment rests on
            Acquia&rsquo;s own documentation and on reasoning from how the model works,
            not on external testing. Vendor documentation can change without notice,
            and negotiated enterprise agreements may differ from the published standard
            terms, so a signed order form governs over anything summarised here.
          </p>
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            Perspective Tester provides manual accessibility testing and code
            remediation. Acquia is both a potential competitor and a platform our
            clients run on. If you believe anything on this page is inaccurate or has
            become out of date, write to{" "}
            <a
              href="mailto:Info@perspectivetester.com"
              className="text-primary hover:underline"
            >
              Info@perspectivetester.com
            </a>{" "}
            and we will correct it and record the date of the correction. Nothing on
            this page is legal advice.
          </p>
        </div>
      </Section>
    </>
  );
}
