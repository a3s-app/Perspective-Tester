import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCheck,
  CircleHelp,
  Code2,
  Eye,
  Image as ImageIcon,
  ScanLine,
} from "lucide-react";
import { CoverageExplorer } from "./coverage-explorer";
import styles from "./accessibility-testing-guide.module.css";

const differences = [
  [
    "Nested interactive controls",
    "nested-interactive",
    "Disabled",
    "On by default",
  ],
  [
    "Keyboard access to scrollable regions",
    "scrollable-region-focusable",
    "Disabled",
    "On by default",
  ],
  ["Image-map area names", "area-alt", "Disabled", "On by default"],
  ["Image-role alternatives", "role-img-alt", "Disabled", "On by default"],
  [
    "Disclosure and tab names",
    "summary-name · aria-tab-name",
    "Disabled",
    "On by default",
  ],
  [
    "Target size and spacing",
    "target-size",
    "Enabled",
    "Select WCAG 2.2 AA or enable explicitly",
  ],
  [
    "Visible label in accessible name",
    "label-content-name-mismatch",
    "Enabled, hidden and unscored",
    "On by default",
  ],
];

const references = [
  {
    name: "Chrome for Developers",
    title: "Understand the Lighthouse score",
    text: "How audits are weighted, and why manual checks sit outside the score.",
    href: "https://developer.chrome.com/docs/lighthouse/accessibility/scoring",
  },
  {
    name: "Deque",
    title: "Explore the axe-core rules",
    text: "Rule definitions, standards, configuration, and items that need review.",
    href: "https://github.com/dequelabs/axe-core/blob/v4.14.0/doc/rule-descriptions.md",
  },
  {
    name: "W3C Web Accessibility Initiative",
    title: "Evaluate the whole experience",
    text: "Combine technical evaluation with human expertise and user involvement.",
    href: "https://www.w3.org/WAI/test-evaluate/",
  },
];

export function AccessibilityTestingGuide() {
  return (
    <div className={styles.guide}>
      <section className={styles.hero} aria-labelledby="guide-title">
        <div className={styles.container}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Accessibility testing guide</span>
          </nav>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>
                <BookOpen size={15} aria-hidden="true" /> The accessibility
                field guide
              </p>
              <h1 id="guide-title">
                What scans catch.
                <br />
                <span>What they miss.</span>
              </h1>
              <p className={styles.heroDescription}>
                Lighthouse and axe-core are a strong start. Understand what they
                can detect, where their coverage ends, and what needs a human
                perspective.
              </p>
              <a href="#coverage" className={styles.primaryLink}>
                Explore the coverage <ArrowDown size={17} aria-hidden="true" />
              </a>
              <p className={styles.heroNote}>
                Lighthouse &amp; axe-core <span aria-hidden="true">·</span> WCAG
                2.2 A &amp; AA
              </p>
            </div>

            <div className={styles.example}>
              <div className={styles.exampleHeader}>
                <span className={styles.exampleDot} /> A small example. A big
                distinction.
              </div>
              <div className={styles.exampleImage}>
                <div className={styles.imageSymbol}>
                  <ImageIcon size={32} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <div>
                  <span className={styles.exampleLabel}>
                    An informative chart
                  </span>
                  <code>alt=&quot;Chart&quot;</code>
                </div>
              </div>
              <div className={styles.exampleFinding}>
                <span className={styles.autoIcon}>
                  <Check size={18} aria-hidden="true" />
                </span>
                <div>
                  <p>Alternative text is present</p>
                  <span>A scan can check this.</span>
                </div>
                <span className={styles.smallLabel}>Markup</span>
              </div>
              <div className={styles.exampleFinding}>
                <span className={styles.humanIcon}>
                  <Eye size={18} aria-hidden="true" />
                </span>
                <div>
                  <p>Does it explain the chart?</p>
                  <span>A person needs to judge this.</span>
                </div>
                <span className={styles.smallLabel}>Meaning</span>
              </div>
              <p className={styles.exampleCaption}>
                Having a text alternative and having a useful one are different
                checks.{" "}
                <a href="https://dequeuniversity.com/rules/axe/4.14/image-alt">
                  Read the rule <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="On this page" className={styles.pageNav}>
        <div className={styles.container}>
          <span>In this guide</span>
          <a href="#coverage">Issue coverage</a>
          <a href="#tool-differences">Tool differences</a>
          <a href="#testing-workflow">Testing workflow</a>
          <a href="#sources">Sources</a>
        </div>
      </nav>

      <section
        id="coverage"
        className={`${styles.section} ${styles.container}`}
        aria-labelledby="coverage-heading"
      >
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Know the limits</p>
          <h2 id="coverage-heading">Find an issue. Understand the coverage.</h2>
          <p>
            Look up a barrier to see what automation can establish—and what
            still needs to be tested. Expand any issue for tool details and
            source links.
          </p>
        </div>

        <div className={styles.legend}>
          <div>
            <span className={styles.autoIcon}>
              <ScanLine size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>Automatically detectable</h3>
              <p>A rule can identify a specific failure.</p>
            </div>
          </div>
          <div>
            <span className={styles.partialIcon}>
              <CircleHelp size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>Partial coverage</h3>
              <p>A clue or prerequisite, with limits.</p>
            </div>
          </div>
          <div>
            <span className={styles.humanIcon}>
              <Eye size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>Human testing</h3>
              <p>Meaning, behavior, and real use.</p>
            </div>
          </div>
        </div>

        <CoverageExplorer />

        <div className={styles.scopeNote}>
          <CircleHelp size={19} aria-hidden="true" />
          <p>
            <strong>“Detectable” doesn’t mean “fully tested.”</strong> Results
            depend on the enabled rules, tool version, browser, and page state.
            This is a guide to common issues, not a complete WCAG checklist.
          </p>
        </div>
      </section>

      <section
        id="tool-differences"
        className={styles.comparisonSection}
        aria-labelledby="differences-heading"
      >
        <div className={styles.container}>
          <div className={styles.comparisonIntro}>
            <div>
              <p className={styles.eyebrow}>Behind the results</p>
              <h2 id="differences-heading">
                Same engine.
                <br />
                Different coverage.
              </h2>
            </div>
            <div>
              <p>
                Lighthouse uses axe-core with its own selection of rules.
                Running both can reveal additional issues, but their overlapping
                checks are not independent proof of accessibility.
              </p>
              <a
                className={styles.textLink}
                href="https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/core/gather/gatherers/accessibility.js"
              >
                See Lighthouse’s rule selection{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.toolCards}>
            <article>
              <ScanLine size={22} aria-hidden="true" />
              <h3>Lighthouse</h3>
              <p>
                A selected set of audits, presented with a weighted
                accessibility score. Manual checks sit outside that score.
              </p>
              <span>Useful for a quick starting point</span>
            </article>
            <article>
              <Code2 size={22} aria-hidden="true" />
              <h3>axe-core</h3>
              <p>
                A configurable testing engine. Findings depend on the rules and
                standards you select, and the UI states you expose.
              </p>
              <span>Useful for repeatable checks in your workflows</span>
            </article>
          </div>

          <details className={styles.comparisonDetails}>
            <summary>
              <span>Compare specific rule differences</span>
              <span className={styles.versionLabel}>
                Lighthouse 13.5 · axe-core 4.14
              </span>
              <ArrowDown size={17} aria-hidden="true" />
            </summary>
            <div className={styles.comparisonContent}>
              <p>
                Versions matter. These examples compare Lighthouse 13.5.0 with
                axe-core 4.14.0. Check the versions in your own reports when
                interpreting differences.
              </p>
              <table>
                <caption className="sr-only">
                  Selected rule configuration differences between Lighthouse
                  13.5.0 and axe-core 4.14.0
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Check</th>
                    <th scope="col">Lighthouse</th>
                    <th scope="col">axe-core</th>
                  </tr>
                </thead>
                <tbody>
                  {differences.map(([title, rule, lighthouse, axe]) => (
                    <tr key={rule}>
                      <th scope="row">
                        {title}
                        <code>{rule}</code>
                      </th>
                      <td>{lighthouse}</td>
                      <td>{axe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.comparisonSources}>
                <a href="https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/core/config/default-config.js">
                  Lighthouse report configuration{" "}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a href="https://github.com/dequelabs/axe-core/blob/v4.14.0/doc/rule-descriptions.md">
                  axe-core rule catalog{" "}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </details>

          <div className={styles.scoreNote}>
            <div className={styles.scoreMark} aria-hidden="true">
              <CheckCheck size={27} />
            </div>
            <div>
              <h3>A perfect score is not a complete accessibility test.</h3>
              <p>
                Zero violations means no failures were reported by the checks
                that ran. It doesn’t establish that every WCAG criterion passes
                or every user can complete a task.
              </p>
            </div>
            <a href="https://developer.chrome.com/docs/lighthouse/accessibility/scoring">
              How scoring works <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="testing-workflow"
        className={`${styles.section} ${styles.container}`}
        aria-labelledby="workflow-heading"
      >
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Put it into practice</p>
          <h2 id="workflow-heading">A scan is one part of the process.</h2>
          <p>
            Combine automated checks with deliberate review of the experience
            people actually use.
          </p>
        </div>
        <ol className={styles.workflow}>
          <li>
            <span className={styles.step}>1</span>
            <h3>Scan the right states</h3>
            <p>
              Test key pages, open menus, dialogs, form errors, and later steps
              in a task. Use Lighthouse snapshots or rerun axe after each
              interaction.
            </p>
            <a href="https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/docs/user-flows.md">
              Testing beyond page load{" "}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </li>
          <li>
            <span className={styles.step}>2</span>
            <h3>Review the findings</h3>
            <p>
              Fix confirmed violations. Investigate incomplete results. Keep
              best-practice advice distinct from confirmed WCAG failures.
            </p>
            <a href="https://github.com/dequelabs/axe-core/blob/v4.14.0/doc/API.md#results-object">
              Understanding axe results{" "}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </li>
          <li>
            <span className={styles.step}>3</span>
            <h3>Test with a human perspective</h3>
            <p>
              Complete tasks with a keyboard and screen reader. Review content,
              media, zoom, and errors. Include people with disabilities in
              evaluation.
            </p>
            <a href="https://www.w3.org/WAI/test-evaluate/involving-users/">
              Involving users in evaluation{" "}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </li>
        </ol>
        <div className={styles.resultKey}>
          <h3>Read the result, not just the score</h3>
          <dl>
            <div>
              <dt>Violations</dt>
              <dd>A specific rule failed.</dd>
            </div>
            <div>
              <dt>Incomplete</dt>
              <dd>Investigate; it is not a pass.</dd>
            </div>
            <div>
              <dt>Passes</dt>
              <dd>The tested rule checks passed.</dd>
            </div>
            <div>
              <dt>Inapplicable</dt>
              <dd>No matching content was found.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="sources"
        className={`${styles.sourcesSection} ${styles.container}`}
        aria-labelledby="sources-heading"
      >
        <div className={styles.sourcesHeader}>
          <div>
            <p className={styles.eyebrow}>Go to the source</p>
            <h2 id="sources-heading">Built on official guidance.</h2>
          </div>
          <p>Rule-level references are included with every issue above.</p>
        </div>
        <div className={styles.sourceGrid}>
          {references.map((source) => (
            <a key={source.name} href={source.href}>
              <span>{source.name}</span>
              <h3>
                {source.title} <ArrowUpRight size={19} aria-hidden="true" />
              </h3>
              <p>{source.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="guide-cta-heading">
        <div className={styles.container}>
          <div>
            <p className={styles.eyebrow}>Perspective Tester</p>
            <h2 id="guide-cta-heading">Go beyond the report.</h2>
            <p>Bring automated findings and expert human testing together.</p>
          </div>
          <Link href="/contact">
            Talk about your accessibility needs{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
