import { PortableText } from "next-sanity";
import type { POST_QUERY_RESULT } from "@/sanity.types";
import { safeHref } from "@/cms/content-utils";
import { slugifyHeading } from "@/lib/blog";

type Body = NonNullable<POST_QUERY_RESULT>["body"];
export function ArticleBody({ value }: { value: Body | undefined }) {
  return (
    <PortableText
      value={value ?? []}
      components={{
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
        },
        marks: {
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
