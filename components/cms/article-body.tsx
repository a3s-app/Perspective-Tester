import { PortableText } from "next-sanity";
import { Square } from "lucide-react";
import type { GuideBody, GuideTable, PortableBody } from "@/sanity.types";
import { safeHref } from "@/cms/content-utils";
import { slugifyHeading } from "@/lib/blog";

type Body = PortableBody | GuideBody | null;
function ArticleTable({ value }: { value: GuideTable }) {
  const [header, ...rows] = value.rows ?? [];
  return (
    <>
      {/* Only one layout is displayed, so assistive tech meets the content once. */}
      <div className="hidden rounded-lg border md:block">
        <table
          aria-label={value.label}
          className="w-full border-collapse text-left text-sm leading-relaxed"
        >
          <thead className="bg-secondary text-foreground">
            <tr>
              {header?.cells?.map((cell, index) => (
                <th key={index} scope="col" className="px-4 py-3 font-semibold">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row._key} className="border-t align-top">
                {row.cells?.map((cell, index) =>
                  index === 0 ? (
                    <th
                      key={index}
                      scope="row"
                      className="px-4 py-3 font-medium text-foreground"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={index} className="px-4 py-3 text-muted-foreground">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul role="list" aria-label={value.label} className="flex flex-col gap-3 md:hidden">
        {rows.map((row) => {
          const [title, ...cells] = row.cells ?? [];
          return (
            <li key={row._key} className="rounded-lg border p-4 text-sm leading-relaxed">
              <p className="text-base font-semibold text-foreground">{title}</p>
              <dl className="mt-3 flex flex-col gap-3">
                {cells.map((cell, index) =>
                  cell ? (
                    <div key={index}>
                      <dt className="font-medium text-foreground">
                        {header?.cells?.[index + 1]}
                      </dt>
                      <dd className="text-muted-foreground">{cell}</dd>
                    </div>
                  ) : null,
                )}
              </dl>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export function ArticleBody({ value }: { value: Body | undefined }) {
  return (
    <PortableText
      value={value ?? []}
      components={{
        types: {
          guideTable: ({ value }) => <ArticleTable value={value} />,
        },
        block: {
          normal: ({ children }) => (
            <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
              {children}
            </p>
          ),
          h2: ({ children, value }) => (
            <h2
              id={slugifyHeading(
                (value.children ?? []).map((c) => c.text ?? "").join(""),
              )}
              className="heading-sm mt-6 scroll-mt-24 text-balance text-foreground"
            >
              {children}
            </h2>
          ),
          h3: ({ children, value }) => (
            <h3
              id={slugifyHeading(
                (value.children ?? []).map((c) => c.text ?? "").join(""),
              )}
              className="mt-2 scroll-mt-24 text-xl font-semibold text-foreground"
            >
              {children}
            </h3>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-5 italic">
              {children}
            </blockquote>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="ml-6 list-disc space-y-2">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="ml-6 list-decimal space-y-2">{children}</ol>
          ),
          check: ({ children }) => (
            <ul role="list" className="space-y-2">
              {children}
            </ul>
          ),
        },
        listItem: {
          check: ({ children }) => (
            <li className="flex gap-3 text-muted-foreground">
              <Square
                className="mt-1 size-4 shrink-0"
                aria-hidden="true"
              />
              <span>{children}</span>
            </li>
          ),
        },
        marks: {
          code: ({ children }) => (
            <code className="rounded bg-secondary px-1 py-0.5 font-mono text-[0.9em] text-foreground">
              {children}
            </code>
          ),
          link: ({ children, value }) => (
            <a
              href={safeHref(value?.href ?? "")}
              className="font-medium text-primary underline underline-offset-4"
            >
              {children}
            </a>
          ),
        },
      }}
    />
  );
}
