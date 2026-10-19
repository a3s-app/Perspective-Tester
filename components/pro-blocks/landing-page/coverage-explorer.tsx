"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Eye,
  Plus,
  ScanLine,
  Search,
  CircleHelp,
} from "lucide-react";
import {
  coverageIssues,
  type CoverageCategory,
} from "@/lib/accessibility-coverage";
import styles from "./accessibility-testing-guide.module.css";

const categories = [
  { id: "all", label: "All issues" },
  { id: "automatic", label: "Automatic" },
  { id: "partial", label: "Partial coverage" },
  { id: "manual", label: "Human testing" },
] as const;

const categoryLabels: Record<CoverageCategory, string> = {
  automatic: "Automatic",
  partial: "Partial coverage",
  manual: "Human testing",
};

const categoryIcons = { automatic: ScanLine, partial: CircleHelp, manual: Eye };

export function CoverageExplorer() {
  const [category, setCategory] = useState<CoverageCategory | "all">("all");
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const search = query.trim().toLowerCase();
  const issues = coverageIssues.filter(
    (issue) =>
      (category === "all" || issue.category === category) &&
      [
        issue.title,
        issue.area,
        issue.summary,
        issue.lighthouse,
        issue.axe,
        issue.humanCheck,
        ...issue.rules,
        ...issue.wcag,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search),
  );

  const reset = () => {
    setQuery("");
    setCategory("all");
    searchInput.current?.focus();
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.explorerToolbar}>
        <div
          role="group"
          aria-label="Filter issues by detection coverage"
          className={styles.filters}
        >
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
              <span>
                {item.id === "all"
                  ? coverageIssues.length
                  : coverageIssues.filter((issue) => issue.category === item.id)
                      .length}
              </span>
            </button>
          ))}
        </div>
        <div className={styles.search}>
          <label htmlFor="coverage-search" className="sr-only">
            Search accessibility issues, rule IDs, or WCAG criteria
          </label>
          <Search size={17} aria-hidden="true" />
          <input
            ref={searchInput}
            id="coverage-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search issues or WCAG…"
          />
        </div>
      </div>
      <div className={styles.resultsMeta}>
        <p role="status" aria-live="polite" aria-atomic="true">
          {issues.length} {issues.length === 1 ? "issue" : "issues"}
          {category !== "all"
            ? ` · ${categoryLabels[category]}`
            : " across automated and human testing"}
        </p>
        <span>Expand to explore</span>
      </div>
      <div className={styles.issueList}>
        {issues.map((issue) => {
          const Icon = categoryIcons[issue.category];
          return (
            <details
              key={issue.id}
              className={styles.issue}
              data-category={issue.category}
            >
              <summary>
                <span className={styles.issueIcon}>
                  <Icon size={19} aria-hidden="true" />
                </span>
                <div className={styles.issueHeading}>
                  <h3>{issue.title}</h3>
                  <p>{issue.summary}</p>
                </div>
                <span className={styles.coverageBadge}>
                  {categoryLabels[issue.category]}
                </span>
                <Plus
                  className={styles.expandIcon}
                  size={19}
                  aria-hidden="true"
                />
              </summary>
              <div className={styles.issueBody}>
                <div className={styles.issueDetails}>
                  <div>
                    <h4>Lighthouse</h4>
                    <p>{issue.lighthouse}</p>
                  </div>
                  <div>
                    <h4>axe-core</h4>
                    <p>{issue.axe}</p>
                  </div>
                  <div className={styles.humanCheck}>
                    <h4>
                      <Eye size={15} aria-hidden="true" /> What to check
                      yourself
                    </h4>
                    <p>{issue.humanCheck}</p>
                  </div>
                </div>
                {(issue.rules.length > 0 || issue.wcag.length > 0) && (
                  <dl className={styles.issueReferences}>
                    {issue.rules.length > 0 && (
                      <div>
                        <dt>Related rules</dt>
                        <dd>
                          {issue.rules.map((rule) => (
                            <code key={rule}>{rule}</code>
                          ))}
                        </dd>
                      </div>
                    )}
                    {issue.wcag.length > 0 && (
                      <div>
                        <dt>WCAG</dt>
                        <dd>{issue.wcag.join(" · ")}</dd>
                      </div>
                    )}
                  </dl>
                )}
                <div className={styles.issueSources}>
                  <span>Sources</span>
                  {issue.sources.map((source) => (
                    <a key={source.href} href={source.href}>
                      {source.label}{" "}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </details>
          );
        })}
        {issues.length === 0 && (
          <div className={styles.emptyState}>
            <Search size={25} aria-hidden="true" />
            <h3>No matching issues</h3>
            <p>Try “keyboard,” “contrast,” or a criterion such as “1.4.3.”</p>
            <button type="button" onClick={reset}>
              Clear search and filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
