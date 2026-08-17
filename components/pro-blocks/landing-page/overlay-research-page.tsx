import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  ArrowRight,
  BookOpen,
  CircleCheck,
  CodeXml,
  ExternalLink,
  FileCode2,
  FlaskConical,
  Gavel,
  Landmark,
  Layers,
  MonitorCog,
  Quote,
  ScrollText,
  TriangleAlert,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * References
 *
 * Every factual claim on this page carries a numbered citation that
 * resolves to this list. Ordering is stable: append new entries, never
 * renumber, so external links to #ref-N keep pointing at the same source.
 * ------------------------------------------------------------------ */

type SourceKind =
  | "Court document"
  | "Regulatory"
  | "AudioEye document"
  | "UserWay document"
  | "Peer-reviewed research"
  | "Academic research"
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
    citation:
      "Settlement Agreement, LightHouse for the Blind and Visually Impaired et al. v. ADP, Inc. et al., No. 4:20-cv-09020-HSG (N.D. Cal.), Section III (Definitions). Executed December 2021.",
    href: "https://www.lflegal.com/wp-content/uploads/2021/12/ADP-and-SF-Lighthouse-settlement-agreement.pdf",
    kind: "Court document",
    note: "Originally filed as Case No. CGC-20-586626 (San Francisco Superior Court, 17 September 2020); removed to the Northern District of California on 16 December 2020.",
  },
  {
    id: 2,
    citation:
      "Disability Rights Advocates, “LightHouse for the Blind and Visually Impaired v. ADP TotalSource” case record.",
    href: "https://dralegal.org/case/lighthouse-for-the-blind-and-visually-impaired-v-adp-totalsource/",
    kind: "Court document",
  },
  {
    id: 3,
    citation:
      "Law Office of Lainey Feingold, “Another Web Access Overlay Company Sued by a Small Business.” Posted 16 February 2025, updated 17 February 2026.",
    href: "https://www.lflegal.com/2025/02/userway-overlay-lawsuit/",
    kind: "Court document",
    note: "Covers BloomsyBox.com LLC v. UserWay Inc. in the U.S. District Court for the District of Delaware, and links both the 31-page complaint and the 19-page Magistrate’s Report and Recommendation dated 13 February 2026.",
  },
  {
    id: 4,
    citation:
      "AudioEye, Inc., Annual Report on Form 10-K for the fiscal year ended 31 December 2025. Filed with the U.S. Securities and Exchange Commission.",
    href: "https://www.sec.gov/Archives/edgar/data/1362190/000110465926027159/aeye-20251231x10k.htm",
    kind: "AudioEye document",
    note: "Statements in a Form 10-K are made under federal securities law and represent the company’s most carefully worded public self-description.",
  },
  {
    id: 5,
    citation: "AudioEye, Inc., Terms of Service, §§ 10.1, 10.2 and 10.3.",
    href: "https://www.audioeye.com/terms-of-service/",
    kind: "AudioEye document",
    note: "Retrieved 17 August 2026.",
  },
  {
    id: 6,
    citation: "AudioEye, Inc., Service Level Agreement.",
    href: "https://www.audioeye.com/sla/",
    kind: "AudioEye document",
    note: "Retrieved 17 August 2026. Commits to availability and support response times, not to accessibility outcomes.",
  },
  {
    id: 7,
    citation:
      "AudioEye, “Everything You Need to Know About AudioEye’s Expert Custom Testing and Remediation,” 14 April 2022.",
    href: "https://www.audioeye.com/post/audioeye-manual-testing-and-remediation/",
    kind: "AudioEye document",
  },
  {
    id: 8,
    citation:
      "AudioEye, “Everything You Need to Know About AudioEye’s Auto Remediations,” 3 February 2022.",
    href: "https://www.audioeye.com/post/audioeye-auto-remediations/",
    kind: "AudioEye document",
  },
  {
    id: 9,
    citation:
      "AudioEye, “Setting the Record Straight on AudioEye’s Approach to Digital Accessibility,” 3 January 2024.",
    href: "https://www.audioeye.com/post/setting-the-record-straight-on-audioeyes-approach/",
    kind: "AudioEye document",
  },
  {
    id: 10,
    citation: "AudioEye, “AudioEye Assurance” product page.",
    href: "https://www.audioeye.com/solution/audioeye-assurance/",
    kind: "AudioEye document",
    note: "Retrieved 17 August 2026.",
  },
  {
    id: 11,
    citation: "AudioEye, 2026 Web Accessibility Litigation Report.",
    href: "https://www.audioeye.com/guides/2026-web-accessibility-litigation-report/",
    kind: "AudioEye document",
  },
  {
    id: 12,
    citation: "Adrian Roselli, “#AudioEye Will Get You Sued,” February 2023.",
    href: "https://adrianroselli.com/2023/02/audioeye-will-get-you-sued.html",
    kind: "Independent testing",
    note: "Hands-on testing of the AudioEye toolkit on an AudioEye customer’s site, with an archive of AudioEye marketing claims from 2019 to 2021.",
  },
  {
    id: 13,
    citation: "Adrian Roselli, “AudioEye Has Dropped Its Suit Against Me,” 3 January 2024.",
    href: "https://adrianroselli.com/2024/01/audioeye-has-dropped-its-suit-against-me.html",
    kind: "Independent testing",
    note: "Includes the parties’ joint statement. Full settlement terms are confidential.",
  },
  {
    id: 14,
    citation: "UserWay Inc., Terms of Use.",
    href: "https://userway.org/terms/",
    kind: "UserWay document",
    note: "Retrieved 17 August 2026. Sections cited: UserWay Services, Disclaimer of Warranties, Indemnification, Limitation of Liability.",
  },
  {
    id: 15,
    citation:
      "Level Access, “Level Access Completes Acquisition of UserWay, Signaling the Next Evolution of Digital Accessibility.” Completed 20 March 2024.",
    href: "https://www.levelaccess.com/news/level-access-completes-acquisition-of-userway-signaling-the-next-evolution-of-digital-accessibility/",
    kind: "UserWay document",
    note: "Definitive agreement announced 31 December 2023; all-cash transaction valued at approximately US$98.7 million.",
  },
  {
    id: 16,
    citation:
      "Adrian Roselli, “#UserWay Will Get You Sued.” First published September 2021, updated through February 2026.",
    href: "https://adrianroselli.com/2021/09/userway-will-get-you-sued.html",
    kind: "Independent testing",
    note: "Multi-year hands-on testing of the UserWay widget. Also archives WebAIM’s June 2023 statements about WAVE, and the procedural history of Paguada v. YieldStreet.",
  },
  {
    id: 17,
    citation:
      "Tlamelo Makati, Garreth W. Tigwell and Kristen Shinohara, “The Promise and Pitfalls of Web Accessibility Overlays for Blind and Low Vision Users,” in Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS ’24), St. John’s, NL, Canada, 27–30 October 2024. ACM, 12 pages. DOI 10.1145/3663548.3675650.",
    href: "https://dl.acm.org/doi/10.1145/3663548.3675650",
    kind: "Peer-reviewed research",
    note: "Technological University Dublin and Rochester Institute of Technology. 47 blind and low-vision survey respondents; 12 follow-up semi-structured interviews.",
  },
  {
    id: 18,
    citation:
      "Daniela Kubesch, “The Impact of Web Accessibility Overlays,” double-degree master’s thesis, Salzburg University of Applied Sciences and Halmstad University, 2024.",
    href: "https://overlays.dnikub.dev/",
    kind: "Academic research",
    note: "Technical evaluation of three overlays against WCAG 2.1 AA plus a task-based user study with 21 participants with permanent visual impairments. UserWay was among the products tested; AudioEye was not.",
  },
  {
    id: 19,
    citation:
      "WebAIM, “Survey of Web Accessibility Practitioners #3 Results.” Surveyed January 2021, published March 2021.",
    href: "https://webaim.org/blog/practitioners-survey-3/",
    kind: "Survey data",
    note: "758 valid responses from accessibility practitioners; 29.1% of respondents reported having a disability.",
  },
  {
    id: 20,
    citation: "Overlay Fact Sheet, overlayfactsheet.com.",
    href: "https://overlayfactsheet.com/en/",
    kind: "Community statement",
    note: "Retrieved 17 August 2026. Both AudioEye and UserWay appear on its list of named vendors.",
  },
  {
    id: 21,
    citation:
      "National Federation of the Blind, Resolution 2021-04, “Regarding the Use of Overlays to Make Websites Accessible to the Blind,” adopted in Convention 10 July 2021.",
    href: "https://nfb.org/resources/speeches-and-reports/resolutions/2021-resolutions",
    kind: "Community statement",
    note: "Names EqualWeb, Max Access, UserWay, TruAbilities, AudioEye and accessiBe.",
  },
  {
    id: 22,
    citation:
      "U.S. Federal Trade Commission, “FTC Order Requires Online Marketer to Pay $1 Million for Deceptive Claims that its AI Product Could Make Websites Compliant with Accessibility Guidelines,” 3 January 2025.",
    href: "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites",
    kind: "Regulatory",
    note: "Proposed complaint and consent order against accessiBe. Commission vote 5–0.",
  },
  {
    id: 23,
    citation:
      "U.S. Federal Trade Commission, “FTC Approves Final Order Requiring accessiBe to pay $1 Million,” 22 April 2025.",
    href: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million",
    kind: "Regulatory",
    note: "Final consent order against accessiBe Inc. and accessiBe Ltd. Commission vote 3–0. Neither AudioEye nor UserWay is a party.",
  },
  {
    id: 24,
    citation:
      "U.S. Department of Justice, “Extension of Compliance Dates for Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities,” interim final rule, Federal Register, published and effective 20 April 2026.",
    href: "https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web",
    kind: "Regulatory",
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
  { href: "#what", label: "What an accessibility overlay is" },
  { href: "#at-a-glance", label: "AudioEye and UserWay at a glance" },
  { href: "#audioeye", label: "AudioEye: the documentary record" },
  { href: "#userway", label: "UserWay: the documentary record" },
  { href: "#evidence", label: "What independent research finds" },
  { href: "#useful", label: "Where overlays do help" },
  { href: "#legal", label: "The legal and regulatory record" },
  { href: "#not-supported", label: "Claims that do not hold up" },
  { href: "#references", label: "References" },
];

/** Side-by-side comparison drawn from each vendor's own documentation. */
const vendors = [
  {
    vendor: "AudioEye",
    owner: "AudioEye, Inc. (Nasdaq: AEYE)",
    model: "Automation plus certified human experts, delivered through its own layer",
    fixes: "Automated and expert fixes both applied “without affecting the source code”",
    contract: "Offerings “do not guarantee accessibility or compliance”; no defence obligation for accessibility claims; liability capped at six months of fees",
    litigation: "Named in the ADP settlement definition of “Accessible”",
    refs: [4, 5, 7, 1],
  },
  {
    vendor: "UserWay",
    owner: "UserWay Inc., acquired by Level Access March 2024",
    model: "A JavaScript widget that modifies the page in the visitor’s browser",
    fixes: "Applied at runtime by the widget",
    contract: "Products “do not guarantee full compliance”; customer indemnifies UserWay; liability capped at six months of fees or US$100",
    litigation: "Facing a customer class action in the District of Delaware",
    refs: [14, 15, 3],
  },
];

/** Barriers reported by blind and low-vision users on sites that had adopted an overlay. */
const assetsFindings = [
  { issue: "Incorrect reading or focus order", count: 30, percent: "63.83%" },
  { issue: "Unlabelled or incorrectly labelled fields", count: 29, percent: "61.70%" },
  { issue: "Overlay screen reader conflicting with the user’s own screen reader", count: 24, percent: "51.06%" },
  { issue: "Missing or broken links", count: 23, percent: "48.94%" },
  { issue: "Not keyboard accessible", count: 23, percent: "48.94%" },
  { issue: "Text or buttons hidden by other page elements", count: 21, percent: "44.68%" },
  { issue: "Insufficient text colour contrast", count: 4, percent: "8.51%" },
];

/** Which overlay products blind and low-vision respondents reported encountering. */
const encounterRates = [
  { product: "accessiBe", count: 26, percent: "55.32%" },
  { product: "AudioEye", count: 22, percent: "44.81%" },
  { product: "UserWay", count: 17, percent: "36.16%" },
  { product: "EqualWeb", count: 5, percent: "10.64%" },
];

/** Failure modes the Overlay Fact Sheet enumerates. */
const failureModes = [
  "Automated image descriptions are unreliable, because a machine can report that an image contains a chart but not what the chart means.",
  "Form label and error handling repairs are unreliable, which is exactly where checkout and application flows break.",
  "Keyboard access repairs are unreliable, and injected fixes can create focus traps of their own.",
  "Component frameworks such as React, Angular and Vue re-render and discard the overlay’s patches.",
  "Whole content classes are out of reach, including PDF, HTML5 Canvas, SVG and media files.",
  "Injected ARIA can collide with ARIA already in the page, producing duplicate announcements and a confused accessibility tree.",
];

export function OverlayResearchPage() {
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
                  Last reviewed <time dateTime="2026-08-17">17 August 2026</time>
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h1 className="heading-xl text-foreground max-w-5xl text-balance">
                  Accessibility Overlays:{" "}
                  <span className="text-primary">The Documentary Record</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl text-pretty text-base leading-relaxed lg:text-lg">
                  What can actually be established about accessibility overlay
                  products, and about the two most widely deployed vendors,
                  AudioEye and UserWay. Drawn from peer-reviewed research, court
                  filings, SEC disclosures, federal regulatory orders,
                  disability-community resolutions and each company&rsquo;s own
                  published documentation.
                </p>
              </div>
            </header>

            <div className="border-y">
              <div className="grid gap-4 py-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
                <h2 className="text-foreground text-base font-semibold">
                  Scope and method
                </h2>
                <p className="text-muted-foreground max-w-3xl text-pretty text-sm leading-relaxed">
                  Every factual statement below carries a numbered citation
                  resolving to a full reference at the foot of the page, with
                  verbatim quotation wherever the precise wording matters. Sources
                  published by a vendor are labelled as that vendor&rsquo;s own
                  document so you can weigh them accordingly. This page covers both
                  what the evidence says overlays{" "}
                  <span className="text-foreground font-medium">fail</span> to do
                  and where research finds they{" "}
                  <span className="text-foreground font-medium">genuinely help</span>
                  ; claims that circulate widely but do not survive checking are
                  collected under{" "}
                  <a href="#not-supported" className="text-primary hover:underline">
                    claims that do not hold up
                  </a>
                  , including criticisms that would favour us commercially if we
                  repeated them. Where sources conflict or a finding is
                  methodology-dependent, that is stated in place rather than
                  resolved silently.
                </p>
              </div>

              <div className="bg-secondary/60 grid gap-4 border-t py-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
                <h2 className="text-foreground text-sm font-semibold">Disclosure</h2>
                <p className="text-muted-foreground max-w-3xl text-pretty text-sm leading-relaxed">
                  Perspective Tester provides manual accessibility testing and code
                  remediation and competes with both companies discussed here. That
                  is why this page is built only on documents you can open and check
                  yourself.
                </p>
              </div>

              <div className="text-muted-foreground flex flex-col gap-2 border-t py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
                <span>All links checked on 17 August 2026.</span>
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

      {/* ------------------------------------------------- What an overlay is */}
      <Section
        id="what"
        eyebrow="Definition"
        icon={Layers}
        heading="What an accessibility overlay is"
        tinted
        intro="An overlay is a third-party script that changes what the browser renders. The source code of the site is left as it was, which is the origin of nearly every argument that follows."
      >
        <div className="flex flex-col gap-8">
          <p className="text-muted-foreground max-w-4xl text-base leading-relaxed">
            Accessibility overlays are third-party tools, typically installed as a
            single line of JavaScript, that modify a website in the visitor&rsquo;s
            browser after the page loads. The peer-reviewed literature describes
            them as tools that &ldquo;use JavaScript to adjust the front-end code of
            a website to enable user-based control of presentation elements, such as
            page presentation, font sizes, and color, among other things.&rdquo;
            <Cite ids={[17]} /> They generally do two things at once: expose a
            settings menu to the visitor, and apply automated repairs to the
            page&rsquo;s markup and accessibility tree.
          </p>

          <ol className="grid border-y lg:grid-cols-3 lg:divide-x">
            {[
              {
                icon: CodeXml,
                step: "01",
                title: "A script loads",
                description: "A third-party JavaScript layer is added to the site.",
              },
              {
                icon: MonitorCog,
                step: "02",
                title: "The browser view changes",
                description:
                  "Controls and automated repairs modify the rendered experience.",
              },
              {
                icon: FileCode2,
                step: "03",
                title: "Source code stays put",
                description:
                  "The underlying website code is not fundamentally changed.",
              },
            ].map((item) => {
              const StepIcon = item.icon;

              return (
                <li
                  key={item.step}
                  className="flex items-start gap-4 border-b py-6 last:border-b-0 lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
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

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              Why the ceiling is structural rather than a maturity problem
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Because repairs are applied at runtime and inferred from patterns in
              the markup, a defined class of problems is out of reach. The Overlay
              Fact Sheet enumerates them:
              <Cite ids={[20]} />
            </p>
            <ul className="text-muted-foreground grid max-w-5xl list-disc gap-2.5 pl-5 text-sm leading-relaxed lg:grid-cols-2 lg:gap-x-10">
              {failureModes.map((mode) => (
                <li key={mode}>{mode}</li>
              ))}
            </ul>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The clean framing for a non-technical reader is that a script can
              restyle and re-announce what is already there, but it cannot supply
              what was never built. Alternative text that carries meaning, a logical
              heading structure and a keyboard path through a checkout are authoring
              decisions, not runtime ones.
            </p>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------- At a glance */}
      <Section
        id="at-a-glance"
        eyebrow="Orientation"
        icon={ScrollText}
        heading="AudioEye and UserWay at a glance"
        intro="Both sell a layer that sits over the site. They differ in how they describe themselves, in what their contracts allocate to the customer, and in the litigation each currently faces."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[54rem] border-collapse text-left text-sm">
            <caption className="text-muted-foreground pb-3 text-left text-xs">
              Taken from each company&rsquo;s own documentation and from court
              filings.
            </caption>
            <thead>
              <tr className="border-b-2">
                <th scope="col" className="text-foreground py-3 pr-6 font-semibold">
                  Vendor
                </th>
                <th scope="col" className="text-foreground py-3 pr-6 font-semibold">
                  How it describes itself
                </th>
                <th scope="col" className="text-foreground py-3 pr-6 font-semibold">
                  Where fixes land
                </th>
                <th scope="col" className="text-foreground py-3 pr-6 font-semibold">
                  What the contract says
                </th>
                <th scope="col" className="text-foreground py-3 font-semibold">
                  Litigation
                </th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((v) => (
                <tr key={v.vendor} className="border-b align-top">
                  <th scope="row" className="py-4 pr-6 text-left font-medium">
                    <span className="text-foreground block">{v.vendor}</span>
                    <span className="text-muted-foreground mt-1 block text-xs font-normal">
                      {v.owner}
                    </span>
                  </th>
                  <td className="text-muted-foreground py-4 pr-6">{v.model}</td>
                  <td className="text-muted-foreground py-4 pr-6">{v.fixes}</td>
                  <td className="text-muted-foreground py-4 pr-6">{v.contract}</td>
                  <td className="text-muted-foreground py-4">
                    {v.litigation}
                    <Cite ids={v.refs} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout title="The point both contracts agree on.">
          Neither vendor guarantees the outcome its marketing is bought for. AudioEye
          states its offerings &ldquo;do not guarantee accessibility or
          compliance,&rdquo; and UserWay states its products &ldquo;do not guarantee
          full compliance with the WCAG or any other accessibility standard, law, or
          regulation.&rdquo; Both cap liability at six months of fees, and UserWay
          adds an alternative floor of US$100.
          <Cite ids={[5, 14]} />
        </Callout>
      </Section>

      {/* -------------------------------------------------------- AudioEye */}
      <Section
        id="audioeye"
        eyebrow="Vendor"
        icon={ScrollText}
        heading="AudioEye: the documentary record"
        tinted
        intro="AudioEye rejects the overlay label and positions itself as a hybrid of automation and certified human expertise. Its own filings are the most precise account of what that means in practice."
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              Where its fixes are applied
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              AudioEye employs certified accessibility specialists and sells expert
              audit and remediation services, so the &ldquo;just a widget&rdquo;
              characterisation is inaccurate. The substantive question is where the
              remediation lands, and AudioEye answers it directly. Note that this
              applies to its expert, human-authored fixes, not only its automation:
            </p>
            <Verbatim
              attribution="AudioEye, “Everything You Need to Know About AudioEye’s Expert Custom Testing and Remediation,” 14 April 2022"
              refs={[7]}
            >
              &ldquo;By using native software, we can code custom remediations into
              the automation layer, adding custom fixes for websites that need it,{" "}
              <span className="font-semibold">without affecting the source code</span>
              .&rdquo;
            </Verbatim>
            <Verbatim
              attribution="AudioEye, Annual Report on Form 10-K, fiscal year ended 31 December 2025"
              refs={[4]}
            >
              &ldquo;AudioEye stands out among its competitors because it offers
              automated and human assisted technological fixes and continuous
              monitoring of accessibility issues{" "}
              <span className="font-semibold">
                without fundamental changes to the website architecture
              </span>
              .&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The practical consequence is that remediation persists only while the
              service is active and the script loads correctly. The underlying
              defects remain in the customer&rsquo;s codebase, which matters for any
              organisation that later changes vendor, is asked to evidence
              conformance of the product itself, or ships the same code through
              another channel such as a native app.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              On the limits of automation
            </h3>
            <Verbatim
              attribution="AudioEye, “Everything You Need to Know About AudioEye’s Expert Custom Testing and Remediation,” 14 April 2022"
              refs={[7]}
            >
              &ldquo;Nearly one in five accessibility issues remains invisible to
              automated technology as it exists today.&rdquo;
            </Verbatim>
            <Verbatim
              attribution="AudioEye, Annual Report on Form 10-K, fiscal year ended 31 December 2025"
              refs={[4]}
            >
              &ldquo;We recognize that automation alone cannot fix all accessibility
              issues, which is why we also offer certified accessibility experts, who
              can provide human assisted technological testing and custom
              fixes.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Its 2026 litigation report puts the ceiling differently again, stating
              that even the best automated tools detect about two-thirds of
              accessibility barriers and can fix about half of those.
              <Cite ids={[11]} /> On what automation handles well, AudioEye points to
              pattern-based defects such as headings out of order, fields lacking
              labels and links missing destination descriptions, and reports
              delivering more than a billion remediations daily.
              <Cite ids={[8]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              What its contract allocates to the customer
            </h3>
            <Verbatim attribution="AudioEye Terms of Service, §10.1 (Disclaimer)" refs={[5]}>
              &ldquo;AudioEye&rsquo;s offerings do not address or apply to
              out-of-scope items and{" "}
              <span className="font-semibold">
                do not guarantee accessibility or compliance
              </span>{" "}
              solely except with respect to a limited guarantee (e.g., AudioEye
              Assurance Guarantee) that AudioEye may provide and solely to the extent
              such limited guarantee is provided in writing in an order and explicitly
              labeled as a guarantee.&rdquo;
            </Verbatim>
            <Verbatim attribution="AudioEye Terms of Service, §10.2" refs={[5]}>
              &ldquo;In no event will any of the AudioEye parties be liable for any
              damages &hellip; or subject to any indemnification, hold harmless or
              defense obligations arising out of &hellip; any third party claim
              alleging that any website, tool or application subject to any offering
              is not compliant with any laws, regulations, guidelines or standards
              relating to accessibility &hellip; Customer covenants not to bring or
              assert any claim against any of the AudioEye parties relating to such
              third party claim.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Liability is capped at the fees paid in the six months preceding the
              event giving rise to it.
              <Cite ids={[5]} /> The separate Service Level Agreement commits to
              99.9% uptime and defined support response windows, from one to two
              hours for fatal issues to 24 to 72 hours for minimal ones. It does not
              commit to accessibility outcomes.
              <Cite ids={[6]} />
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              AudioEye separately markets{" "}
              <span className="text-foreground font-medium">AudioEye Assurance</span>,
              the written limited guarantee §10.1 contemplates. It offers per-page
              coverage and help responding to demand letters, and its stated payout is
              the set per-page coverage amount{" "}
              <span className="text-foreground font-medium">or</span> the total
              settlement, whichever is less.
              <Cite ids={[10]} /> Two figures therefore determine what it is worth:
              the per-page amount, and the number of covered pages.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              How AudioEye answers the overlay label
            </h3>
            <Verbatim
              attribution="AudioEye, “Setting the Record Straight on AudioEye’s Approach to Digital Accessibility,” 3 January 2024"
              refs={[9]}
            >
              &ldquo;Automation alone cannot guarantee a fully accessible or compliant
              website &hellip; Manual audits alone cannot guarantee an accessible
              browsing experience for every website visitor.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Two further pieces of wording in the 10-K are narrower than the
              marketing. AudioEye describes its products as helping customers reach
              substantial conformance with &ldquo;
              <span className="text-foreground font-medium">
                AudioEye&rsquo;s interpretation of
              </span>{" "}
              the Web Content Accessibility Guidelines,&rdquo; and says its solutions
              help <span className="text-foreground font-medium">mitigate</span> a
              customer&rsquo;s risk of accessibility-related legal action rather than
              remove it.
              <Cite ids={[4]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Independent testing, and a suit against a critic
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Accessibility engineer Adrian Roselli tested the AudioEye toolkit on an
              AudioEye customer&rsquo;s own accessibility statement page in 2023 and
              reported that several controls did not work as described, including
              focus and highlight features, alongside an archive of AudioEye marketing
              from 2019 to 2021 promising compliance &ldquo;from day one.&rdquo;
              <Cite ids={[12]} /> This is one engineer&rsquo;s published testing
              rather than a controlled study, and the product has changed since.
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              In 2023 AudioEye sued Roselli for defamation over that published
              criticism. The matter was resolved by agreement and dismissed with
              prejudice in January 2024. In a joint statement the parties recorded
              that Roselli&rsquo;s statements were expressions of opinion rather than
              statements of fact about AudioEye&rsquo;s products, and AudioEye agreed
              to donate no less than $10,000 to the National Federation of the Blind.
              Full terms are confidential.
              <Cite ids={[13]} /> This is part of the public record, and it bears on
              conduct toward critics rather than on whether the product works.
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- UserWay */}
      <Section
        id="userway"
        eyebrow="Vendor"
        icon={ScrollText}
        heading="UserWay: the documentary record"
        intro="UserWay was acquired by Level Access in an all-cash transaction of approximately US$98.7 million, announced 31 December 2023 and completed 20 March 2024."
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              What its own Terms of Use say
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              UserWay&rsquo;s Terms of Use are unusually direct about what the product
              does not do.
              <Cite ids={[14]} />
            </p>
            <Verbatim attribution="UserWay Terms of Use, “UserWay Services”" refs={[14]}>
              &ldquo;The Products do not guarantee full compliance with the WCAG or any
              other accessibility standard, law, or regulation.&rdquo;
            </Verbatim>
            <Verbatim attribution="UserWay Terms of Use, “Disclaimer of Warranties”" refs={[14]}>
              &ldquo;The services and products are provided &lsquo;as is&rsquo; and
              &lsquo;as available,&rsquo; with all faults.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Two further provisions repay close reading. The indemnification clause
              runs{" "}
              <span className="text-foreground font-medium">
                from the customer to UserWay
              </span>
              , not the other way around: the customer agrees to defend and hold
              UserWay harmless against third-party claims arising from the
              customer&rsquo;s breach. And liability is capped at the fees paid in
              the preceding six months{" "}
              <span className="text-foreground font-medium">or US$100</span>.
              <Cite ids={[14]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              A customer has sued UserWay over its advertising
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              BloomsyBox.com LLC, an online florist, bought a UserWay subscription in
              July 2023 and was sued in December 2023 by a blind consumer who could
              not use its website. BloomsyBox then filed a class action against
              UserWay in the U.S. District Court for the District of Delaware in
              summer 2024, alleging violations of the Delaware Consumer Fraud Act and
              negligent misrepresentation, and pleading that it had relied on
              UserWay&rsquo;s advertising that the overlay would make its site
              accessible and protect it from lawsuits.
              <Cite ids={[3]} />
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              UserWay moved to dismiss. On{" "}
              <span className="text-foreground font-medium">13 February 2026</span> a
              Magistrate Judge issued a 19-page Report and Recommendation that the key
              portions of the case should proceed, specifically the Delaware Consumer
              Fraud Act and negligent misrepresentation claims. That recommendation
              still requires approval by the district judge.
              <Cite ids={[3]} />
            </p>
            <Callout title="Read this precisely." tinted>
              These are allegations that have survived an early procedural test. A
              Magistrate&rsquo;s recommendation that a claim may proceed is not a
              finding that the claim is true, and no court has ruled on the merits.
              <Cite ids={[3]} />
            </Callout>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              An earlier case where the widget did not end the claim
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              In <span className="italic">Paguada v. YieldStreet</span>, YieldStreet
              added the UserWay plug-in around March 2021 while seeking dismissal of
              an accessibility suit. In April 2021 an expert witness identified
              barriers and WCAG failures that persisted despite the plug-in. The
              motion to dismiss was denied, signed 20 October 2021.
              <Cite ids={[16]} /> UserWay itself was not a party; it appeared in the
              motion rather than the original complaint.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              The WAVE episode, and how it ended
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              In June 2023 WebAIM, the accessibility centre at Utah State University
              that produces the widely used WAVE evaluation tool, reported that the
              UserWay script detected WAVE and altered the page when it ran. WebAIM
              gave a worked example of a page with 361 detectable errors in its
              default state returning zero errors once WAVE was activated, because the
              overlay changed all text to black on white and gave every image the
              alternative text &ldquo;image.&rdquo;
              <Cite ids={[16]} /> WebAIM shipped a WAVE update warning users that
              accessiBe and UserWay overlays &ldquo;may manipulate page content to
              suppress detection of accessibility errors.&rdquo;
              <Cite ids={[16]} />
            </p>
            <Callout title="The resolution matters as much as the finding.">
              A week later, on 9 June 2023, WebAIM reported that following dialogue
              with UserWay the company &ldquo;removed all code that changes page
              content when the WAVE accessibility extensions are activated,&rdquo; and
              that a near-future WAVE update would drop the warning. The behaviour was
              documented, and it was also corrected.
              <Cite ids={[16]} />
            </Callout>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              This account rests on WebAIM&rsquo;s contemporaneous public statements
              as archived in Roselli&rsquo;s article. We have included it because
              anything affecting whether an evaluation tool reports accurately goes to
              the reliability of the evidence buyers rely on, and we have included the
              correction for the same reason.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Independent testing and past marketing
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Roselli has tested the UserWay widget repeatedly since 2021 and
              documented failures including reduced contrast, link-visibility
              regressions and text-resize problems. He also archives UserWay marketing
              from that period promising &ldquo;full WCAG and ADA compliance from day
              one, and every single day thereafter,&rdquo; a claim considerably
              stronger than the current Terms of Use permit.
              <Cite ids={[16, 14]} /> As with the AudioEye testing above, this is one
              engineer&rsquo;s published work rather than a controlled study, and the
              product has changed over the intervening years.
            </p>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Evidence */}
      <Section
        id="evidence"
        eyebrow="Independent evidence"
        icon={FlaskConical}
        heading="What independent research finds"
        tinted
        intro="These findings concern overlay products as a category. Where a study names the products it tested, that is stated, because it determines which vendors the finding actually reaches."
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              Peer-reviewed user research (ACM ASSETS 2024)
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The most rigorous published study of overlay user experience is Makati,
              Tigwell and Shinohara&rsquo;s paper at ASSETS &rsquo;24, the ACM
              SIGACCESS conference. The authors surveyed 47 blind and low-vision web
              users over an 11-month recruitment period and conducted 12 follow-up
              semi-structured interviews. Both AudioEye and UserWay appear in the data
              by name.
              <Cite ids={[17]} />
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
                <caption className="text-muted-foreground pb-3 text-left text-xs">
                  Overlay products respondents reported encountering. Multiple
                  responses permitted.
                  <Cite ids={[17]} />
                </caption>
                <thead>
                  <tr className="border-b-2">
                    <th scope="col" className="text-foreground py-2 pr-4 font-semibold">
                      Product
                    </th>
                    <th scope="col" className="text-foreground py-2 pr-4 text-right font-semibold">
                      Respondents
                    </th>
                    <th scope="col" className="text-foreground py-2 text-right font-semibold">
                      Share
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {encounterRates.map((row) => (
                    <tr key={row.product} className="border-b">
                      <td className="text-muted-foreground py-2 pr-4">{row.product}</td>
                      <td className="text-muted-foreground py-2 pr-4 text-right tabular-nums">
                        {row.count}
                      </td>
                      <td className="text-foreground py-2 text-right tabular-nums">
                        {row.percent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Respondents reported the following barriers on sites that had adopted an
              overlay:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                <caption className="text-muted-foreground pb-3 text-left text-xs">
                  Accessibility issues encountered after overlay adoption. Multiple
                  responses permitted.
                  <Cite ids={[17]} />
                </caption>
                <thead>
                  <tr className="border-b-2">
                    <th scope="col" className="text-foreground py-2 pr-4 font-semibold">
                      Reported barrier
                    </th>
                    <th scope="col" className="text-foreground py-2 pr-4 text-right font-semibold">
                      Respondents
                    </th>
                    <th scope="col" className="text-foreground py-2 text-right font-semibold">
                      Share
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assetsFindings.map((row) => (
                    <tr key={row.issue} className="border-b">
                      <td className="text-muted-foreground py-2 pr-4">{row.issue}</td>
                      <td className="text-muted-foreground py-2 pr-4 text-right tabular-nums">
                        {row.count}
                      </td>
                      <td className="text-foreground py-2 text-right tabular-nums">
                        {row.percent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Twenty respondents, 42.55%, had abandoned or stopped visiting websites
              they previously used regularly because of an overlay.
              <Cite ids={[17]} /> Interview participants described the
              overlay&rsquo;s own screen-reader mode conflicting with the screen
              reader they already used:
            </p>
            <Verbatim
              attribution="Participant P11, quoted in Makati, Tigwell & Shinohara, ASSETS ’24"
              refs={[17]}
            >
              &ldquo;I often can&rsquo;t find the features that I actually want to
              find &hellip; I find that if I turn them off, I usually can find what I
              want, even if it&rsquo;s an unlabeled button, I can figure it out better
              than with them on.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The authors state their limitations plainly, and they should travel with
              the findings: the response rate was low, the sample was almost entirely
              blind and low-vision users so the results say little about other
              disabilities, and interviewees skewed towards people with professional
              accessibility or web development expertise.
              <Cite ids={[17]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Technical evaluation and user study (Kubesch, 2024)
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              A master&rsquo;s thesis combining automated and manual WCAG 2.1 AA
              testing of three overlays with a task-based study of 21 participants
              with permanent visual impairments concluded that overlays &ldquo;in
              their current form do not effectively improve the usability or UX for
              individuals with permanent visual impairments,&rdquo; and that they
              &ldquo;cannot meet WCAG 2.1 AA standards.&rdquo;
              <Cite ids={[18]} />{" "}
              <span className="text-foreground font-medium">
                UserWay was among the products tested. AudioEye was not.
              </span>
              <Cite ids={[18]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Practitioner survey and community positions
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              WebAIM asked 758 accessibility practitioners to rate the effectiveness
              of &ldquo;web accessibility overlays, plugins, or widgets that automate
              accessibility changes in web pages.&rdquo; WebAIM reports that{" "}
              <span className="text-foreground font-medium">
                67% rated them not at all or not very effective
              </span>
              , rising to <span className="text-foreground font-medium">72%</span>{" "}
              among respondents with disabilities, with 2.4% rating them very
              effective.
              <Cite ids={[19]} /> Note the population: these are accessibility
              practitioners, 29.1% of whom reported a disability. It is not a general
              survey of assistive technology users and should not be cited as one.
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The National Federation of the Blind adopted Resolution 2021-04 on 10
              July 2021, which names both AudioEye and UserWay among the overlay
              providers it discusses. Its assessment is measured, setting out specific
              technical limits alongside a concession about partial benefit:
            </p>
            <Verbatim
              attribution="National Federation of the Blind, Resolution 2021-04, adopted 10 July 2021"
              refs={[21]}
            >
              &ldquo;[O]verlays today have their limitations; for example, they cannot
              determine when a picture that would be described generically as
              &lsquo;two people standing in front of a building&rsquo; should be
              described as &lsquo;Sarah and George standing in front of Macy&rsquo;s
              department store&rsquo;; they cannot automatically add audio description
              to a video presentation &hellip; and they cannot accurately solve an
              inaccessible visual CAPTCHA.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The Overlay Fact Sheet, which states that no overlay product on the
              market can cause a website to become fully compliant with any existing
              accessibility standard, names both AudioEye and UserWay among its listed
              vendors.
              <Cite ids={[20]} /> It is an advocacy document rather than peer-reviewed
              research, and its signatory list is public and checkable.
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- Where they help */}
      <Section
        id="useful"
        eyebrow="The other side"
        icon={CircleCheck}
        heading="Where overlays do help"
        intro="The same sources that document the failures also record genuine benefits. Stating them precisely is what separates research from marketing."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-base font-semibold">
              Visual adjustment features help some users
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The ASSETS study found that participants &ldquo;did acknowledge that
              there could be benefits provided by overlays, especially for users who
              use them for colour contrast and text enlargement.&rdquo; Three survey
              respondents reported that their access to a website was more accessible
              with an overlay present, and five of the 47 were broadly positive.
              <Cite ids={[17]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              Potentially more useful for disabilities other than blindness
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The study&rsquo;s discussion states that overlays &ldquo;may offer some
              benefits to users with other disabilities, such as those who are
              neurodiverse or deaf or hard of hearing,&rdquo; even while falling short
              for blind users.
              <Cite ids={[17]} /> Participants also suggested value for people who are
              newly disabled and not yet fluent with assistive technology:
            </p>
            <Verbatim
              attribution="Participant P10, quoted in Makati, Tigwell & Shinohara, ASSETS ’24"
              refs={[17]}
            >
              &ldquo;[I]f I were a person that, maybe a senior that was starting to
              have some vision loss, if I could just change the font size or the colour
              contrast &hellip; small tools like that &hellip; I think are beneficial
              to some people that have reduced vision.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The authors are explicit that their sample was almost entirely blind and
              low-vision users and cannot support strong claims about other disability
              groups in either direction.
              <Cite ids={[17]} /> This is an area where the evidence is genuinely thin
              rather than settled.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              Automation genuinely fixes pattern-based defects at scale
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Automated repair works where defects follow recognisable patterns, such
              as headings out of sequence, unlabelled form fields and links without
              discernible destinations.
              <Cite ids={[8]} /> The NFB resolution concedes the same point, recording
              that while overlays cannot guarantee full nonvisual access, &ldquo;they
              may help to make certain parts of a website nonvisually
              accessible.&rdquo;
              <Cite ids={[21]} /> Scale is a real advantage: a fix made once
              propagates to every site running the product.
              <Cite ids={[17]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              The important caveat
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Participants repeatedly observed that the features they found useful
              largely duplicate what operating systems and browsers already provide:
            </p>
            <Verbatim
              attribution="Participant P8, quoted in Makati, Tigwell & Shinohara, ASSETS ’24"
              refs={[17]}
            >
              &ldquo;[T]hey&rsquo;re kind of cosmetic or superficial, changing the font
              size, or switching the background colours &hellip; A lot of those
              settings can be done at the browser level &hellip; So there&rsquo;s all
              these native things that people can do with their own browsers or
              operating systems that usually are what the overlay is offering.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              So the accurate summary is narrow rather than sweeping: overlays can
              deliver convenience-level presentation controls and can repair a defined
              class of machine-detectable defects. What the evidence does not support
              is that either capability produces conformance with an accessibility
              standard, or substitutes for accessible design and code.
              <Cite ids={[17, 18, 20, 21]} />
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Legal / regulatory */}
      <Section
        id="legal"
        eyebrow="Legal and regulatory"
        icon={Gavel}
        heading="The legal and regulatory record"
        tinted
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              The ADP settlement names AudioEye
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              In September 2020 the LightHouse for the Blind and Visually Impaired of
              San Francisco and two of its blind employees sued ADP over the
              accessibility of the Workforce Now payroll and HR platform, under
              California&rsquo;s Unruh Civil Rights Act and Unfair Competition Law. The
              case was removed to the Northern District of California and resolved
              through structured negotiation.
              <Cite ids={[1, 2]} /> The executed agreement&rsquo;s definition of
              &ldquo;Accessible&rdquo; contains this sentence:
            </p>
            <Verbatim
              attribution="Settlement Agreement, Section III (Definitions), LightHouse et al. v. ADP, Inc. et al., No. 4:20-cv-09020-HSG (N.D. Cal.)"
              refs={[1]}
            >
              &ldquo;For the purpose of this Agreement, &lsquo;overlay&rsquo; solutions
              such as those currently provided by companies such as AudioEye and
              AccessiBe will not suffice to achieve Accessibility.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Read this precisely. It is a definition negotiated between private
              parties and expressly scoped &ldquo;for the purpose of this
              Agreement.&rdquo; No judge ruled on overlay efficacy. What it does
              establish is that counsel on both sides, including ADP&rsquo;s own,
              signed language naming AudioEye as a category of solution that would not
              satisfy the obligation being agreed. The remedy chosen is equally
              instructive: ADP agreed to retain an independent web accessibility
              expert, named in the agreement as{" "}
              <span className="text-foreground font-medium">Deque</span>, to adopt
              written procedures for{" "}
              <span className="text-foreground font-medium">manual testing</span>, and
              to bring the site and mobile apps into substantial conformance with WCAG
              2.1 Level AA within two years.
              <Cite ids={[1]} />
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              AudioEye disputes the inference commonly drawn. It states that ADP had
              deployed the product in an &ldquo;opt-in&rdquo; configuration that
              AudioEye advises against, and that had it been enabled by default for
              every visitor, the technology &ldquo;would have automatically remediated
              all of the accessibility violations cited in the lawsuit.&rdquo;
              <Cite ids={[9]} /> We have found no independent test of that claim, and
              the settlement text draws no distinction between configurations.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              The FTC action reached accessiBe, not these two vendors
            </h3>
            <Callout title="Read this before citing it.">
              The $1,000,000 federal penalty frequently invoked in discussions of
              accessibility widgets was imposed on{" "}
              <span className="font-semibold">accessiBe</span>, a different company.
              Neither AudioEye nor UserWay is a party to it, and neither has been the
              subject of a comparable FTC action in the public record.
              <Cite ids={[22, 23]} />
            </Callout>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              On 3 January 2025 the FTC announced a proposed complaint and consent
              order against accessiBe Inc. and accessiBe Ltd. concerning its
              accessWidget product, alleging that claims the widget could make any
              website WCAG-compliant were &ldquo;false, misleading, or
              unsubstantiated,&rdquo; and that the company formatted paid third-party
              articles to appear as independent reviews. The Commission approved the
              final order on 22 April 2025.
              <Cite ids={[22, 23]} />
            </p>
            <Verbatim
              attribution="Samuel Levine, Director, FTC Bureau of Consumer Protection, 3 January 2025"
              refs={[22]}
            >
              &ldquo;Companies looking for help making their websites WCAG compliant
              must be able to trust that products do what they are advertised to do.
              Overstating a product&rsquo;s AI or other capabilities without adequate
              evidence is deceptive, and the FTC will act to stop it.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The significance for the category is not that every vendor has been
              penalised, because they have not, but that a federal regulator has
              articulated an evidentiary standard for this kind of marketing claim, and
              that standard applies to any seller making it.
              <Cite ids={[23]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Installing a tool has not reliably prevented litigation
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              AudioEye&rsquo;s own 2026 litigation report states that{" "}
              <span className="text-foreground font-medium">
                38.5% of businesses sued in 2025 already had an accessibility solution
                in place
              </span>
              , which it characterises as &ldquo;usually widgets or toolbars that
              promised instant compliance but delivered little more than a false sense
              of security.&rdquo;
              <Cite ids={[11]} /> Because this is a vendor&rsquo;s own published
              research it is difficult to dismiss as competitor framing. Total lawsuit
              counts vary widely between trackers depending on how state-court filings
              are counted, so we cite the proportion rather than a headline total.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Compliance dates under ADA Title II
            </h3>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              Much published material still cites superseded dates. The Department of
              Justice&rsquo;s April 2024 rule adopted WCAG 2.1 Level AA for state and
              local government web content and mobile apps. On 20 April 2026 the DOJ
              published an interim final rule extending the compliance dates by one
              year: entities serving populations of 50,000 or more now have until{" "}
              <span className="text-foreground font-medium">26 April 2027</span>, and
              smaller entities and special district governments until{" "}
              <span className="text-foreground font-medium">26 April 2028</span>. The
              technical standard was unchanged. Only the timing moved.
              <Cite ids={[24]} />
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
              The extension moved the compliance date, not the underlying duty. Title
              II obligations continued to apply throughout, and the rule reaches
              content &ldquo;provided or made available&rdquo; through vendors and
              licensors, so procuring either product does not move the obligation off
              the public entity.
              <Cite ids={[24]} />
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- Claims that don't hold up */}
      <Section
        id="not-supported"
        eyebrow="Corrections"
        icon={TriangleAlert}
        heading="Claims that do not hold up"
        intro="Several assertions about these vendors circulate widely and are inaccurate or overstated. They are listed because accuracy has to cut against our own interest as well as for it."
      >
        <div className="flex flex-col gap-5">
          {[
            {
              claim: "“AudioEye or UserWay was fined $1 million by the FTC.”",
              response: (
                <>
                  Incorrect. That order was against accessiBe, a different company.
                  <Cite ids={[22, 23]} />
                </>
              ),
            },
            {
              claim: "“A court has ruled that UserWay’s claims were fraudulent.”",
              response: (
                <>
                  Overstated. A Magistrate Judge recommended on 13 February 2026 that
                  consumer fraud and negligent misrepresentation claims may proceed.
                  That is an early procedural step, not a ruling on the merits, and it
                  still requires district-judge approval.
                  <Cite ids={[3]} />
                </>
              ),
            },
            {
              claim: "“A court ruled that AudioEye does not work.”",
              response: (
                <>
                  No court has so ruled. The ADP language is a definition negotiated
                  between settling parties and expressly limited to that agreement.
                  <Cite ids={[1]} />
                </>
              ),
            },
            {
              claim: "“AudioEye is only a widget.”",
              response: (
                <>
                  Not accurate as stated. AudioEye employs certified accessibility
                  specialists and sells expert audit and remediation services. The
                  substantive question is not whether human expertise exists in the
                  company but where remediation is applied, and AudioEye states its
                  custom fixes go into the automation layer &ldquo;without affecting
                  the source code.&rdquo;
                  <Cite ids={[4, 7]} />
                </>
              ),
            },
            {
              claim: "“UserWay still spoofs accessibility checkers.”",
              response: (
                <>
                  Not supported. WebAIM documented the behaviour in June 2023 and
                  reported a week later that UserWay had removed the code that changed
                  page content when WAVE was activated. Presenting the finding without
                  the correction misrepresents the record.
                  <Cite ids={[16]} />
                </>
              ),
            },
            {
              claim: "“Overlays are illegal.”",
              response: (
                <>
                  No law prohibits them. The supportable claim is narrower: they do not
                  by themselves discharge an accessibility obligation, and their
                  presence has not reliably prevented litigation.
                  <Cite ids={[11, 20]} />
                </>
              ),
            },
            {
              claim: "“AudioEye has a history of securities fraud.”",
              response: (
                <>
                  Misleading. A shareholder class action followed a restatement of
                  AudioEye&rsquo;s 2014 quarterly results and settled in 2017 for
                  $1.525m paid by the company&rsquo;s insurer, with no admission of
                  liability. It concerned historical accounting rather than product
                  efficacy and is more than a decade old. The FY2025 10-K discloses no
                  material pending legal proceedings.
                  <Cite ids={[4]} />
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
        intro="Primary documents are linked directly wherever they are publicly hosted. All links were retrieved and checked on 17 August 2026."
      >
        <ol className="flex list-none flex-col gap-5 p-0">
          {references.map((reference) => (
            <li
              key={reference.id}
              id={`ref-${reference.id}`}
              className="flex scroll-mt-24 gap-4 border-t pt-4"
            >
              <span className="text-primary shrink-0 text-sm font-semibold tabular-nums">
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
            This page was compiled from primary sources: court filings, SEC
            disclosures, Federal Register notices, FTC releases, peer-reviewed
            conference proceedings, published survey results, disability-community
            resolutions and each vendor&rsquo;s own documentation. Claims that could
            not be verified against a primary source were omitted. Where a study did
            not test a given product, that is stated rather than glossed. Where a
            vendor disputes an inference, its position is quoted. Where a documented
            problem was later corrected, the correction is reported alongside it.
          </p>
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            Known limitations: the peer-reviewed user research available on overlays
            is small in scale and concentrated on blind and low-vision users, so
            evidence about other disability groups is thin. Independent hands-on
            testing of both products comes substantially from one engineer, and both
            products have changed since that testing. Vendor-published litigation
            statistics use methodologies that are not directly comparable to
            independent trackers. Contract terms summarised here are the published
            standard terms; negotiated enterprise agreements may differ, and a signed
            order form governs.
          </p>
          <p className="text-muted-foreground max-w-4xl text-sm leading-relaxed">
            Perspective Tester provides manual accessibility testing and code
            remediation and competes with both companies discussed here. If you
            believe anything on this page is inaccurate or has become out of date,
            write to{" "}
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
