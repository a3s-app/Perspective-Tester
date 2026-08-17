import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  BookOpen,
  CircleCheck,
  ExternalLink,
  FlaskConical,
  Gavel,
  Landmark,
  Layers,
  Quote,
  ScrollText,
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
      "AudioEye, Inc., Annual Report on Form 10-K for the fiscal year ended 31 December 2025. Filed with the U.S. Securities and Exchange Commission.",
    href: "https://www.sec.gov/Archives/edgar/data/1362190/000110465926027159/aeye-20251231x10k.htm",
    kind: "AudioEye document",
    note: "Statements in a Form 10-K are made under federal securities law and represent the company’s most carefully worded public self-description.",
  },
  {
    id: 4,
    citation: "AudioEye, Inc., Terms of Service, §§ 10.1, 10.2 and 10.3.",
    href: "https://www.audioeye.com/terms-of-service/",
    kind: "AudioEye document",
    note: "Retrieved 17 August 2026.",
  },
  {
    id: 5,
    citation: "AudioEye, Inc., Service Level Agreement.",
    href: "https://www.audioeye.com/sla/",
    kind: "AudioEye document",
    note: "Retrieved 17 August 2026.",
  },
  {
    id: 6,
    citation:
      "AudioEye, “Everything You Need to Know About AudioEye’s Expert Custom Testing and Remediation,” 14 April 2022.",
    href: "https://www.audioeye.com/post/audioeye-manual-testing-and-remediation/",
    kind: "AudioEye document",
  },
  {
    id: 7,
    citation:
      "AudioEye, “Everything You Need to Know About AudioEye’s Auto Remediations,” 3 February 2022.",
    href: "https://www.audioeye.com/post/audioeye-auto-remediations/",
    kind: "AudioEye document",
  },
  {
    id: 8,
    citation:
      "AudioEye, “Setting the Record Straight on AudioEye’s Approach to Digital Accessibility,” 3 January 2024.",
    href: "https://www.audioeye.com/post/setting-the-record-straight-on-audioeyes-approach/",
    kind: "AudioEye document",
  },
  {
    id: 9,
    citation: "AudioEye, “AudioEye Assurance” product page.",
    href: "https://www.audioeye.com/solution/audioeye-assurance/",
    kind: "AudioEye document",
    note: "Retrieved 17 August 2026.",
  },
  {
    id: 10,
    citation: "AudioEye, 2026 Web Accessibility Litigation Report.",
    href: "https://www.audioeye.com/guides/2026-web-accessibility-litigation-report/",
    kind: "AudioEye document",
  },
  {
    id: 11,
    citation:
      "Tlamelo Makati, Garreth W. Tigwell and Kristen Shinohara, “The Promise and Pitfalls of Web Accessibility Overlays for Blind and Low Vision Users,” in Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS ’24), St. John’s, NL, Canada, 27–30 October 2024. ACM, 12 pages. DOI 10.1145/3663548.3675650.",
    href: "https://dl.acm.org/doi/10.1145/3663548.3675650",
    kind: "Peer-reviewed research",
    note: "Technological University Dublin and Rochester Institute of Technology. 47 blind and low-vision survey respondents; 12 follow-up semi-structured interviews.",
  },
  {
    id: 12,
    citation:
      "Daniela Kubesch, “The Impact of Web Accessibility Overlays,” double-degree master’s thesis, Salzburg University of Applied Sciences and Halmstad University, 2024.",
    href: "https://overlays.dnikub.dev/",
    kind: "Academic research",
    note: "Technical evaluation of three overlays against WCAG 2.1 AA plus a task-based user study with 21 participants with permanent visual impairments. AudioEye was not among the products tested.",
  },
  {
    id: 13,
    citation:
      "WebAIM, “Survey of Web Accessibility Practitioners #3 Results.” Surveyed January 2021, published March 2021.",
    href: "https://webaim.org/blog/practitioners-survey-3/",
    kind: "Survey data",
    note: "758 valid responses from accessibility practitioners; 29.1% of respondents reported having a disability.",
  },
  {
    id: 14,
    citation: "Overlay Fact Sheet, overlayfactsheet.com.",
    href: "https://overlayfactsheet.com/en/",
    kind: "Community statement",
    note: "1,031 signatories as of 17 August 2026. AudioEye appears on its list of named vendors.",
  },
  {
    id: 15,
    citation:
      "National Federation of the Blind, Resolution 2021-04, “Regarding the Use of Overlays to Make Websites Accessible to the Blind,” adopted in Convention 10 July 2021.",
    href: "https://nfb.org/resources/speeches-and-reports/resolutions/2021-resolutions",
    kind: "Community statement",
    note: "Names AudioEye among the overlay providers discussed.",
  },
  {
    id: 16,
    citation:
      "National Federation of the Blind, Resolution 2021-17, “Regarding accessiBe’s Disrespectful and Misleading Business Practices,” adopted in Convention July 2021.",
    href: "https://nfb.org/resources/speeches-and-reports/resolutions/2021-resolutions",
    kind: "Community statement",
  },
  {
    id: 17,
    citation:
      "U.S. Federal Trade Commission, “FTC Order Requires Online Marketer to Pay $1 Million for Deceptive Claims that its AI Product Could Make Websites Compliant with Accessibility Guidelines,” 3 January 2025.",
    href: "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites",
    kind: "Regulatory",
    note: "Proposed complaint and consent order against accessiBe. Commission vote 5–0.",
  },
  {
    id: 18,
    citation:
      "U.S. Federal Trade Commission, “FTC Approves Final Order Requiring accessiBe to pay $1 Million,” 22 April 2025.",
    href: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million",
    kind: "Regulatory",
    note: "Final consent order against accessiBe Inc. and accessiBe Ltd. Commission vote 3–0.",
  },
  {
    id: 19,
    citation:
      "U.S. Department of Justice, “Extension of Compliance Dates for Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities,” interim final rule, Federal Register, published and effective 20 April 2026.",
    href: "https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web",
    kind: "Regulatory",
  },
  {
    id: 20,
    citation: "Adrian Roselli, “#AudioEye Will Get You Sued,” February 2023.",
    href: "https://adrianroselli.com/2023/02/audioeye-will-get-you-sued.html",
    kind: "Independent testing",
    note: "Hands-on testing of the AudioEye toolkit on an AudioEye customer’s site, with an archive of AudioEye marketing claims from 2019–2021.",
  },
  {
    id: 21,
    citation: "Adrian Roselli, “AudioEye Has Dropped Its Suit Against Me,” 3 January 2024.",
    href: "https://adrianroselli.com/2024/01/audioeye-has-dropped-its-suit-against-me.html",
    kind: "Independent testing",
    note: "Includes the parties’ joint statement. Full settlement terms are confidential.",
  },
  {
    id: 22,
    citation:
      "AudioEye, “AudioEye Acquires ADA Site Compliance, a Digital Accessibility Compliance Company,” September 2024.",
    href: "https://www.prnewswire.com/news-releases/audioeye-acquires-ada-site-compliance-a-digital-accessibility-compliance-company-302262067.html",
    kind: "AudioEye document",
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

/** Section wrapper keeping heading structure and spacing consistent. */
function Section({
  id,
  eyebrow,
  icon: Icon,
  heading,
  intro,
  tinted,
  layout = "reading",
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

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${tinted ? "bg-secondary" : "bg-background"} section-padding-y scroll-mt-20 border-b`}
    >
      <div className="container-padding-x container mx-auto">
        <div
          className={
            isSplit
              ? "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-start lg:gap-16"
              : "mx-auto flex max-w-3xl flex-col gap-6"
          }
        >
          <div
            className={`section-title-gap-lg flex flex-col ${isSplit ? "lg:sticky lg:top-28" : ""}`}
          >
            {eyebrow ? (
              <Tagline variant="ghost">
                {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                <span>{eyebrow}</span>
              </Tagline>
            ) : null}
            <h2 id={`${id}-heading`} className="heading-lg text-foreground">
              {heading}
            </h2>
            {intro ? (
              <p className="text-muted-foreground text-pretty text-base leading-relaxed">
                {intro}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

const contents = [
  { href: "#what", label: "What an overlay is" },
  { href: "#own-documents", label: "What AudioEye’s own documents say" },
  { href: "#evidence", label: "Evidence on effectiveness" },
  { href: "#useful", label: "Where overlays do help" },
  { href: "#legal", label: "The legal and regulatory record" },
  { href: "#not-supported", label: "Claims that do not hold up" },
  { href: "#deadlines", label: "Title II compliance dates" },
  { href: "#references", label: "References" },
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

export function AudioEyeResearchPage() {
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
                AudioEye and Accessibility Overlays: The Documentary Record
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed lg:text-lg">
                A sourced review of what can be established about accessibility
                overlay products and about AudioEye specifically, drawn
                from peer-reviewed research, court filings, SEC disclosures,
                federal regulatory orders, disability-community resolutions and
                AudioEye&rsquo;s own published documentation.
              </p>
            </div>

            <div className="bg-secondary flex flex-col gap-3 rounded-xl border p-6">
              <h2 className="text-foreground text-sm font-semibold">Scope and method</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every factual statement below carries a numbered citation
                resolving to a full reference at the foot of the page, with
                verbatim quotation wherever the precise wording matters. Sources
                published by AudioEye are labelled{" "}
                <span className="text-foreground font-medium">AudioEye document</span>{" "}
                so you can weigh them accordingly. This page covers both what the
                evidence says overlays{" "}
                <span className="text-foreground font-medium">fail</span> to do
                and where research finds they{" "}
                <span className="text-foreground font-medium">genuinely help</span>
                ; claims that circulate widely but do not survive checking are
                collected under{" "}
                <a href="#not-supported" className="text-primary hover:underline">
                  claims that do not hold up
                </a>
                . Where sources conflict or a finding is
                methodology-dependent, that is stated in place rather than
                resolved silently.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground font-medium">Disclosure:</span>{" "}
                Perspective Tester provides manual accessibility testing and code
                remediation and competes with AudioEye. That is why this page is
                built only on documents you can open and check yourself.
              </p>
              <p className="text-muted-foreground text-xs">
                Last reviewed 17 August 2026. All links checked on that date.
                Corrections:{" "}
                <a
                  href="mailto:Info@perspectivetester.com"
                  className="text-primary hover:underline"
                >
                  Info@perspectivetester.com
                </a>
              </p>
            </div>

            <nav aria-labelledby="contents-heading" className="flex flex-col gap-3">
              <h2
                id="contents-heading"
                className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
              >
                Contents
              </h2>
              <ol className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                {contents.map((item, index) => (
                  <li key={item.href} className="flex gap-2 border-t py-2">
                    <span className="text-muted-foreground text-xs tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary text-sm transition-colors"
                    >
                      {item.label}
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
      >
        <p className="text-muted-foreground text-base leading-relaxed">
          Accessibility overlays are third-party tools, typically installed as a
          single line of JavaScript, that modify a website in the visitor&rsquo;s
          browser after the page loads. The peer-reviewed literature describes
          them as tools that &ldquo;use JavaScript to adjust the front-end code of
          a website to enable user-based control of presentation elements, such as
          page presentation, font sizes, and color, among other things.&rdquo;
          <Cite ids={[11]} /> They generally do two things at once: expose a
          settings menu to the visitor, and apply automated repairs to the page&rsquo;s
          markup and accessibility tree.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          The defining characteristic, and the origin of most of the debate, is that the underlying source code is left unchanged. AudioEye
          states this plainly as a design choice and a competitive advantage:
        </p>
        <Verbatim
          attribution="AudioEye, Annual Report on Form 10-K, fiscal year ended 31 December 2025"
          refs={[3]}
        >
          &ldquo;AudioEye stands out among its competitors because it offers
          automated and human assisted technological fixes and continuous
          monitoring of accessibility issues{" "}
          <span className="font-semibold">
            without fundamental changes to the website architecture
          </span>
          .&rdquo;
        </Verbatim>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Whether that is a strength or a weakness is the substance of the
          disagreement, and both readings are set out below.
        </p>
      </Section>

      {/* ------------------------------------------ AudioEye's own documents */}
      <Section
        id="own-documents"
        eyebrow="Primary sources"
        icon={ScrollText}
        heading="What AudioEye’s own documents say"
        tinted
        intro="AudioEye's published support articles, service agreement and contractual terms are more precise than its marketing, and they establish several points that are otherwise contested."
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              On the limits of automation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AudioEye does not claim automation is sufficient, and says so
              repeatedly in its own materials.
            </p>
            <Verbatim
              attribution="AudioEye, “Everything You Need to Know About AudioEye’s Expert Custom Testing and Remediation,” 14 April 2022"
              refs={[6]}
            >
              &ldquo;Nearly one in five accessibility issues remains invisible to
              automated technology as it exists today.&rdquo;
            </Verbatim>
            <Verbatim
              attribution="AudioEye, “Everything You Need to Know About AudioEye’s Expert Custom Testing and Remediation,” 14 April 2022"
              refs={[6]}
            >
              &ldquo;Detecting more subtle errors often requires an understanding
              of context that is beyond even the most sophisticated AI
              today.&rdquo;
            </Verbatim>
            <Verbatim
              attribution="AudioEye, Annual Report on Form 10-K, fiscal year ended 31 December 2025"
              refs={[3]}
            >
              &ldquo;We recognize that automation alone cannot fix all
              accessibility issues, which is why we also offer certified
              accessibility experts, who can provide human assisted technological
              testing and custom fixes.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Its 2026 litigation report puts the ceiling more numerically,
              stating that even the best automated tools detect about two-thirds
              of accessibility barriers and can fix about half of those.
              <Cite ids={[10]} /> On what automation does handle well, AudioEye
              points to pattern-based defects such as heading elements out of
              order, fields lacking labels, links missing destination
              descriptions. It reports delivering &ldquo;more than a
              billion remediations daily&rdquo; from &ldquo;more than 70
              thoroughly tested auto remediations.&rdquo;
              <Cite ids={[7]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              On where fixes are applied
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This is the single most consequential statement in AudioEye&rsquo;s
              documentation, because it establishes that even its expert,
              human-authored remediations are delivered through its own layer
              rather than committed to the customer&rsquo;s codebase.
            </p>
            <Verbatim
              attribution="AudioEye, “Everything You Need to Know About AudioEye’s Expert Custom Testing and Remediation,” 14 April 2022"
              refs={[6]}
            >
              &ldquo;By using native software, we can code custom remediations
              into the automation layer, adding custom fixes for websites that
              need it,{" "}
              <span className="font-semibold">without affecting the source code</span>
              .&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The practical consequence is that remediation persists only while
              the service is active and the script loads correctly. The
              underlying defects remain in the customer&rsquo;s codebase, which
              matters for any organisation that later changes vendor, is asked to
              evidence conformance of the product itself, or ships the same code
              through another channel such as a native app or a partner
              integration.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              On what is contractually guaranteed
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AudioEye&rsquo;s Service Level Agreement commits to availability
              and support responsiveness: 99.9% uptime, and defined
              response windows from one to two hours for fatal issues to 24&ndash;72
              hours for minimal ones. It does not commit to accessibility
              outcomes or WCAG conformance.
              <Cite ids={[5]} /> The Terms of Service address that directly.
            </p>
            <Verbatim attribution="AudioEye Terms of Service, §10.1 (Disclaimer)" refs={[4]}>
              &ldquo;AudioEye&rsquo;s offerings do not address or apply to
              out-of-scope items and{" "}
              <span className="font-semibold">
                do not guarantee accessibility or compliance
              </span>{" "}
              solely except with respect to a limited guarantee (e.g., AudioEye
              Assurance Guarantee) that AudioEye may provide and solely to the
              extent such limited guarantee is provided in writing in an order and
              explicitly labeled as a guarantee.&rdquo;
            </Verbatim>
            <Verbatim attribution="AudioEye Terms of Service, §10.2" refs={[4]}>
              &ldquo;In no event will any of the AudioEye parties be liable for
              any damages (whether direct or otherwise) or subject to any
              indemnification, hold harmless or defense obligations arising out
              of, relating to or resulting from any third party claim alleging
              that any website, tool or application subject to any offering is not
              compliant with any laws, regulations, guidelines or standards
              relating to accessibility &hellip; Customer covenants not to bring
              or assert any claim against any of the AudioEye parties relating to
              such third party claim.&rdquo;
            </Verbatim>
            <Verbatim attribution="AudioEye Terms of Service, §10.3" refs={[4]}>
              &ldquo;In no event will the total cumulative liability of all of the
              AudioEye parties &hellip; exceed the fees paid by customer to
              AudioEye under the order under which such liability arose within the
              six (6) month period preceding the event(s) giving rise to such
              liability.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AudioEye separately markets{" "}
              <span className="text-foreground font-medium">AudioEye Assurance</span>,
              the written limited guarantee §10.1 contemplates. It offers per-page
              coverage and assistance responding to demand letters, and its stated
              payout is the set per-page coverage amount{" "}
              <span className="text-foreground font-medium">or</span> the total
              settlement, whichever is less.
              <Cite ids={[9]} /> Two figures therefore determine what it is worth
              in practice: the per-page amount, and the number of pages covered.
              Negotiated enterprise agreements may depart from these published
              terms, so a signed order form governs over anything summarised here.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              On the overlay label
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AudioEye rejects being grouped with overlay vendors, noting that it
              has &ldquo;spent the last few years building a team of certified
              accessibility experts and people with disabilities.&rdquo;
              <Cite ids={[8]} /> Its stated position is that neither approach
              alone is sufficient:
            </p>
            <Verbatim
              attribution="AudioEye, “Setting the Record Straight on AudioEye’s Approach to Digital Accessibility,” 3 January 2024"
              refs={[8]}
            >
              &ldquo;Automation alone cannot guarantee a fully accessible or
              compliant website &mdash; no matter what some overlay companies
              claim. &hellip; Manual audits alone cannot guarantee an accessible
              browsing experience for every website visitor.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Two further pieces of wording in the 10-K are worth noting because
              they are narrower than the marketing. AudioEye describes its
              products as helping customers reach substantial conformance with
              &ldquo;
              <span className="text-foreground font-medium">
                AudioEye&rsquo;s interpretation of
              </span>{" "}
              the Web Content Accessibility Guidelines,&rdquo; and says its
              solutions help{" "}
              <span className="text-foreground font-medium">mitigate</span> a
              customer&rsquo;s risk of accessibility-related legal action rather
              than remove it.
              <Cite ids={[3]} />
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- Evidence */}
      <Section
        id="evidence"
        eyebrow="Independent evidence"
        icon={FlaskConical}
        heading="What the research finds about effectiveness"
        intro="These findings concern overlay products as a category. Where a study identifies which products it tested, that is stated, because it matters whether AudioEye was among them."
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              Peer-reviewed user research (ACM ASSETS 2024)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The most rigorous published study of overlay user experience is
              Makati, Tigwell and Shinohara&rsquo;s paper at ASSETS &rsquo;24, the
              ACM SIGACCESS conference. The authors surveyed 47 blind and
              low-vision web users over an 11-month recruitment period and
              conducted 12 follow-up semi-structured interviews.
              <Cite ids={[11]} /> Among respondents,{" "}
              <span className="text-foreground font-medium">
                44.81% (22 of 47) reported having encountered AudioEye
              </span>{" "}
              specifically, behind accessiBe (55.32%) and ahead of UserWay
              (36.16%) and EqualWeb (10.64%).
              <Cite ids={[11]} />
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Respondents reported the following barriers on sites that had
              adopted an overlay:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                <caption className="text-muted-foreground pb-3 text-left text-xs">
                  Accessibility issues encountered after overlay adoption, as
                  reported by 47 blind and low-vision respondents. Multiple
                  responses permitted.
                  <Cite ids={[11]} />
                </caption>
                <thead>
                  <tr className="border-b-2">
                    <th scope="col" className="text-foreground py-2 pr-4 font-semibold">
                      Reported barrier
                    </th>
                    <th
                      scope="col"
                      className="text-foreground py-2 pr-4 text-right font-semibold"
                    >
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
            <p className="text-muted-foreground text-sm leading-relaxed">
              The study also found that{" "}
              <span className="text-foreground font-medium">
                20 respondents (42.55%) had abandoned or stopped visiting
                websites they previously used regularly
              </span>{" "}
              because of an overlay.
              <Cite ids={[11]} /> Interview participants described the
              overlay&rsquo;s own screen-reader mode conflicting with the screen
              reader they already used:
            </p>
            <Verbatim
              attribution="Participant P11, quoted in Makati, Tigwell & Shinohara, ASSETS ’24"
              refs={[11]}
            >
              &ldquo;I often can&rsquo;t find the features that I actually want to
              find &hellip; I find that if I turn them off, I usually can find what
              I want, even if it&rsquo;s an unlabeled button, I can figure it out
              better than with them on.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The authors state their own limitations plainly, and they should be
              carried with the findings: the response rate was low, the sample was
              almost entirely blind and low-vision users so the results say little
              about other disabilities, and interviewees skewed towards people
              with professional accessibility or web development expertise.
              <Cite ids={[11]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Technical evaluation and user study (Kubesch, 2024)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Daniela Kubesch&rsquo;s master&rsquo;s thesis combined automated and
              manual WCAG 2.1 AA testing of three overlays with a task-based study
              of 21 participants with permanent visual impairments. It concluded
              that overlays &ldquo;in their current form do not effectively
              improve the usability or UX for individuals with permanent visual
              impairments,&rdquo; and that they &ldquo;cannot meet WCAG 2.1 AA
              standards.&rdquo;
              <Cite ids={[12]} />{" "}
              <span className="text-foreground font-medium">
                The products tested were accessiBe, EqualWeb and UserWay,
                not AudioEye
              </span>
              , so the findings bear on the category rather than on AudioEye
              directly.
              <Cite ids={[12]} />
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Practitioner survey data (WebAIM)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              WebAIM asked 758 accessibility practitioners to rate the
              effectiveness of &ldquo;web accessibility overlays, plugins, or
              widgets that automate accessibility changes in web pages.&rdquo;
              WebAIM reports that{" "}
              <span className="text-foreground font-medium">
                67% rated them not at all or not very effective
              </span>
              , rising to{" "}
              <span className="text-foreground font-medium">72%</span> among
              respondents with disabilities, with 2.4% rating them very effective.
              <Cite ids={[13]} /> The population matters: these are accessibility
              practitioners, 29.1% of whom reported a disability. It is not a
              general survey of assistive technology users and should not be cited
              as one.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Professional and community positions
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The Overlay Fact Sheet, which states that &ldquo;no overlay product
              on the market can cause a website to become fully compliant with any
              existing accessibility standard,&rdquo; carried{" "}
              <span className="text-foreground font-medium">1,031 signatories</span>{" "}
              as of 17 August 2026, including contributors to the WCAG, ARIA and
              HTML specifications. AudioEye appears on its list of named vendors.
              <Cite ids={[14]} /> It is an advocacy document rather than
              peer-reviewed research, though its signatory list is public and
              checkable. The peer-reviewed literature also notes that the European
              Disability Forum and the International Association of Accessibility
              Professionals have warned against over-reliance on overlays as a
              compliance strategy.
              <Cite ids={[11]} />
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The National Federation of the Blind adopted Resolution 2021-04 on
              10 July 2021, which names AudioEye among the overlay providers it
              discusses. Its assessment is notably measured, setting out both
              specific technical limits and a concession about partial benefit:
            </p>
            <Verbatim
              attribution="National Federation of the Blind, Resolution 2021-04, adopted 10 July 2021"
              refs={[15]}
            >
              &ldquo;[O]verlays today have their limitations; for example, they
              cannot determine when a picture that would be described generically
              as &lsquo;two people standing in front of a building&rsquo; should
              be described as &lsquo;Sarah and George standing in front of
              Macy&rsquo;s department store&rsquo;; they cannot automatically add
              audio description to a video presentation; they can inappropriately
              apply headings to text that is not intended to function as a
              heading; they can misinterpret the layout of a table &hellip; and
              they cannot accurately solve an inaccessible visual CAPTCHA.&rdquo;
            </Verbatim>
            <Verbatim
              attribution="National Federation of the Blind, Resolution 2021-04, operative clause"
              refs={[15]}
            >
              &ldquo;[T]his organization insist that current and potential overlay
              customers recognize that complete and long-lasting accessibility
              requires more than a one-time installation of code; that
              accessibility should be a priority throughout the entire lifecycle of
              any product from design to full implementation.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The resolution condemns &ldquo;the unethical practices of overlay
              providers which attempt to convince website owners that overlays are
              the easiest and most affordable way to protect a website owner from
              lawsuits.&rdquo; It is directed at marketing conduct across the
              category. A separate resolution the same year, 2021-17, concerned
              accessiBe specifically.
              <Cite ids={[15, 16]} />
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- Where they help */}
      <Section
        id="useful"
        eyebrow="The other side"
        icon={CircleCheck}
        heading="Where overlays do provide value"
        tinted
        intro="A page that only collected unfavourable findings would not be research. The same sources that document the failures also identify real benefits, and they are worth stating precisely."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-base font-semibold">
              Visual adjustment features help some users
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ASSETS study found that participants &ldquo;did acknowledge
              that there could be benefits provided by overlays, especially for
              users who use them for colour contrast and text enlargement.&rdquo;
              Three survey respondents reported that their access to a website was
              <em> more</em> accessible with an overlay present, and one described
              being able to select style options that met their access needs.
              <Cite ids={[11]} /> Five of the 47 respondents were broadly positive
              about overlays.
              <Cite ids={[11]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              Potentially more useful for disabilities other than blindness
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The study&rsquo;s discussion states that &ldquo;overlays may offer
              some benefits to users with other disabilities, such as those who
              are neurodiverse or deaf or hard of hearing,&rdquo; even while
              falling short for blind users.
              <Cite ids={[11]} /> Participants also suggested value for people who
              are newly disabled and not yet fluent with assistive technology:
            </p>
            <Verbatim
              attribution="Participant P10, quoted in Makati, Tigwell & Shinohara, ASSETS ’24"
              refs={[11]}
            >
              &ldquo;[I]f I were a person that &mdash; maybe a senior that was
              starting to have some vision loss, if I could just change the font
              size or the colour contrast &hellip; small tools like that &hellip; I
              think are beneficial to some people that have reduced vision.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The authors are explicit that their sample was almost entirely blind
              and low-vision users and that their data therefore cannot support
              strong claims about other disability groups in either direction.
              <Cite ids={[11]} /> This is an area where the evidence is genuinely
              thin rather than settled.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              Automation genuinely fixes pattern-based defects at scale
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Automated repair works where defects follow recognisable patterns
              such as headings out of sequence, unlabelled form fields, links
              without discernible destinations.
              <Cite ids={[7]} /> The NFB resolution concedes the same point,
              recording that while overlays cannot guarantee full nonvisual
              access, &ldquo;they may help to make certain parts of a website
              nonvisually accessible.&rdquo;
              <Cite ids={[15]} /> Scale is a real advantage: the one participant
              in the ASSETS study who had worked for an overlay company described
              a fix, once made, propagating to every site running the product.
              <Cite ids={[11]} />
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t pt-6">
            <h3 className="text-foreground text-base font-semibold">
              The important caveat
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Participants repeatedly observed that the features they found
              useful largely duplicate what operating systems and browsers already
              provide:
            </p>
            <Verbatim
              attribution="Participant P8, quoted in Makati, Tigwell & Shinohara, ASSETS ’24"
              refs={[11]}
            >
              &ldquo;[T]hey&rsquo;re kind of cosmetic or superficial &mdash;
              changing the font size, or switching the background colours &hellip;
              A lot of those settings can be done at the browser level &hellip; So
              there&rsquo;s all these native things that people can do with their
              own browsers or operating systems that usually are what the overlay
              is offering.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              So the accurate summary is narrow rather than sweeping: overlays can
              deliver convenience-level presentation controls and can repair a
              defined class of machine-detectable defects. What the evidence does
              not support is that either capability produces conformance with an
              accessibility standard, or substitutes for accessible design and
              code.
              <Cite ids={[11, 12, 14, 15]} />
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
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-base font-semibold">
              The ADP settlement (2021)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              In September 2020 the LightHouse for the Blind and Visually Impaired
              of San Francisco and two of its blind employees sued ADP over the
              accessibility of the Workforce Now payroll and HR platform, under
              California&rsquo;s Unruh Civil Rights Act and Unfair Competition
              Law. The case was removed to the Northern District of California and
              resolved through structured negotiation.
              <Cite ids={[1, 2]} /> The executed agreement&rsquo;s definition of
              &ldquo;Accessible&rdquo; contains this sentence:
            </p>
            <Verbatim
              attribution="Settlement Agreement, Section III (Definitions), LightHouse et al. v. ADP, Inc. et al., No. 4:20-cv-09020-HSG (N.D. Cal.)"
              refs={[1]}
            >
              &ldquo;For the purpose of this Agreement, &lsquo;overlay&rsquo;
              solutions such as those currently provided by companies such as
              AudioEye and AccessiBe will not suffice to achieve
              Accessibility.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Read this precisely. It is a{" "}
              <span className="text-foreground font-medium">
                definition negotiated between private parties
              </span>
              , expressly scoped &ldquo;for the purpose of this Agreement.&rdquo;
              No judge ruled on overlay efficacy. What it does establish is that
              counsel on both sides, including ADP&rsquo;s own, signed language naming AudioEye as a category of solution that would
              not satisfy the obligation being agreed. The remedy chosen is
              equally instructive: ADP agreed to retain an independent web
              accessibility expert, named in the agreement as{" "}
              <span className="text-foreground font-medium">Deque</span>, to adopt
              written procedures for{" "}
              <span className="text-foreground font-medium">manual testing</span>,
              and to bring the site and mobile apps into substantial conformance
              with WCAG 2.1 Level AA within two years.
              <Cite ids={[1]} />
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AudioEye disputes the inference commonly drawn. It states that ADP
              had deployed the product in an &ldquo;opt-in&rdquo; configuration
              that AudioEye advises against, and that had it been enabled by
              default for every visitor, the technology &ldquo;would have
              automatically remediated all of the accessibility violations cited
              in the lawsuit.&rdquo;
              <Cite ids={[8]} /> We have found no independent test of that claim,
              and the settlement text draws no distinction between
              configurations.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              The FTC action, against accessiBe rather than AudioEye
            </h3>
            <div className="border-primary bg-secondary rounded-xl border border-l-4 p-5">
              <p className="text-foreground text-sm leading-relaxed">
                The $1,000,000 federal penalty frequently cited in discussions of
                accessibility widgets was imposed on{" "}
                <span className="font-semibold">accessiBe</span>, a different
                company. AudioEye has not been the subject of this action, or of
                any comparable FTC action in the public record.
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              On 3 January 2025 the FTC announced a proposed complaint and consent
              order against accessiBe Inc. and accessiBe Ltd. concerning its
              accessWidget product, alleging that claims the widget could make any
              website WCAG-compliant were &ldquo;false, misleading, or
              unsubstantiated,&rdquo; and that the company formatted paid
              third-party articles to appear as independent reviews.
              <Cite ids={[17]} /> The Commission approved the final order on 22
              April 2025.
              <Cite ids={[18]} />
            </p>
            <Verbatim
              attribution="Samuel Levine, Director, FTC Bureau of Consumer Protection, 3 January 2025"
              refs={[17]}
            >
              &ldquo;Companies looking for help making their websites WCAG
              compliant must be able to trust that products do what they are
              advertised to do. Overstating a product&rsquo;s AI or other
              capabilities without adequate evidence is deceptive, and the FTC will
              act to stop it.&rdquo;
            </Verbatim>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The order bars accessiBe from representing that its automated
              products can make any website WCAG-compliant, or keep it compliant
              over time, without evidence.
              <Cite ids={[18]} /> Its significance for the category is not that
              every vendor has been penalised, because they have not, but
              that a federal regulator has articulated an evidentiary standard for
              this kind of marketing claim.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t pt-8">
            <h3 className="text-foreground text-base font-semibold">
              Litigation outcomes for organisations running tools
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AudioEye&rsquo;s own 2026 litigation report states that{" "}
              <span className="text-foreground font-medium">
                38.5% of businesses sued in 2025 already had an accessibility
                solution in place
              </span>
              , which it characterises as &ldquo;usually widgets or toolbars that
              promised instant compliance but delivered little more than a false
              sense of security.&rdquo;
              <Cite ids={[10]} /> Total lawsuit counts vary widely between
              trackers depending on how state-court filings are counted, so we
              cite the proportion rather than a headline total.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- Claims that don't hold up */}
      <Section
        id="not-supported"
        eyebrow="Corrections"
        icon={CircleCheck}
        heading="Claims that do not hold up"
        tinted
        layout="split"
        intro="Several assertions about AudioEye circulate widely and are inaccurate or overstated. They are listed here because accuracy cuts both ways."
      >
        <div className="min-w-0">
          <div
            aria-hidden="true"
            className="text-muted-foreground hidden grid-cols-[minmax(0,14rem)_minmax(0,1fr)] gap-8 pb-3 text-xs font-semibold sm:grid"
          >
            <span>Claim</span>
            <span>What the record shows</span>
          </div>
          <dl className="divide-y border-y">
            {[
              {
                claim: "“AudioEye was fined $1 million by the FTC.”",
                response: (
                  <>
                    Incorrect. That order was against accessiBe, a different
                    company.
                    <Cite ids={[17, 18]} />
                  </>
                ),
              },
              {
                claim: "“A court ruled that AudioEye does not work.”",
                response: (
                  <>
                    No court has so ruled. The ADP language is a definition
                    negotiated between settling parties and expressly limited to
                    that agreement.
                    <Cite ids={[1]} />
                  </>
                ),
              },
              {
                claim: "“AudioEye is only a widget.”",
                response: (
                  <>
                    Not accurate as stated. AudioEye employs certified accessibility
                    specialists, sells expert audit and remediation services, and
                    has acquired two human-services accessibility firms.
                    <Cite ids={[3, 22]} /> The substantive question is not whether
                    human expertise exists within the company but where remediation
                    is applied, and AudioEye states that its custom fixes go
                    into the automation layer &ldquo;without affecting the source
                    code.&rdquo;
                    <Cite ids={[6]} />
                  </>
                ),
              },
              {
                claim: "“Overlays are illegal.”",
                response: (
                  <>
                    No law prohibits them. The supportable claim is narrower: they
                    do not by themselves discharge an accessibility obligation, and
                    their presence has not reliably prevented litigation.
                    <Cite ids={[10, 14]} />
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
                    liability. It concerned historical accounting rather than
                    product efficacy and is more than a decade old. The FY2025 10-K
                    discloses no material pending legal proceedings.
                    <Cite ids={[3]} />
                  </>
                ),
              },
              {
                claim: "On AudioEye’s defamation suit against a critic",
                response: (
                  <>
                    In 2023 AudioEye sued accessibility engineer Adrian Roselli for
                    defamation over his published criticism, which included
                    hands-on testing of the AudioEye toolkit on a customer site.
                    <Cite ids={[20]} /> The matter was resolved
                    by agreement and dismissed with prejudice in January 2024. In a
                    joint statement the parties recorded that Roselli&rsquo;s
                    statements were expressions of opinion rather than statements of
                    fact about AudioEye&rsquo;s products, and AudioEye agreed to
                    donate no less than $10,000 to the National Federation of the
                    Blind. Full terms are confidential.
                    <Cite ids={[21]} /> This is part of the public record, but it
                    bears on conduct toward critics, not on whether the product
                    works.
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.claim}
                className="grid gap-3 py-6 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-8"
              >
                <dt>
                  <h3 className="text-foreground text-pretty text-base font-semibold">
                    {item.claim}
                  </h3>
                </dt>
                <dd>
                  <p className="text-muted-foreground text-pretty text-sm leading-relaxed">
                    {item.response}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ------------------------------------------------------- Deadlines */}
      <Section
        id="deadlines"
        eyebrow="Compliance dates"
        icon={Landmark}
        heading="A note on the ADA Title II deadlines"
        intro="Much published material still cites superseded dates, so the current position is worth stating precisely."
      >
        <p className="text-muted-foreground text-base leading-relaxed">
          The Department of Justice&rsquo;s April 2024 rule under Title II of the
          ADA adopted WCAG 2.1 Level AA as the technical standard for state and
          local government web content and mobile applications. On{" "}
          <span className="text-foreground font-medium">20 April 2026</span> the
          DOJ published an interim final rule extending the compliance dates by
          one year. Public entities serving populations of 50,000 or more now have
          until <span className="text-foreground font-medium">26 April 2027</span>
          ; smaller entities and special district governments until{" "}
          <span className="text-foreground font-medium">26 April 2028</span>. The
          technical standard was unchanged. Only the timing moved.
          <Cite ids={[19]} />
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The extension moved the compliance date, not the underlying duty. Title
          II&rsquo;s non-discrimination and effective-communication obligations
          continued to apply throughout, and private plaintiffs may bring claims
          during the extension period.
          <Cite ids={[19]} /> The rule also reaches content &ldquo;provided or
          made available&rdquo; through vendors and licensors, so procuring a
          third-party tool does not move the obligation off the public entity.
          <Cite ids={[19]} />
        </p>
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
                <p className="text-foreground text-sm leading-relaxed">
                  {reference.citation}
                </p>
                <p className="text-muted-foreground text-xs">
                  <span className="text-primary font-medium">{reference.kind}</span>
                </p>
                {reference.note ? (
                  <p className="text-muted-foreground text-xs leading-relaxed italic">
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
          <p className="text-muted-foreground text-sm leading-relaxed">
            This page was compiled from primary sources: court filings, SEC
            disclosures, Federal Register notices, FTC releases, peer-reviewed
            conference proceedings, published survey results, disability-community
            resolutions and AudioEye&rsquo;s own documentation. Claims that could
            not be verified against a primary source were omitted. Where a study
            did not test AudioEye, that is stated rather than glossed. Where
            AudioEye disputes an inference, its position is quoted.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Known limitations: the peer-reviewed user research available on
            overlays is small in scale and concentrated on blind and low-vision
            users; evidence about overlay effects on other disability groups is
            thin. Vendor-published litigation statistics use methodologies that
            are not directly comparable to independent trackers. Contract terms
            summarised here are the published standard terms, and negotiated
            agreements may differ.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Perspective Tester provides manual accessibility testing and code
            remediation and competes with AudioEye. If you believe anything here
            is inaccurate or has become out of date, write to{" "}
            <a
              href="mailto:Info@perspectivetester.com"
              className="text-primary hover:underline"
            >
              Info@perspectivetester.com
            </a>{" "}
            and we will correct it and record the date of the correction. Nothing
            on this page is legal advice.
          </p>
        </div>
      </Section>
    </>
  );
}
