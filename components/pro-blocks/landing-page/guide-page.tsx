import { ArticleBody } from "@/components/cms/article-body";
import { BlogShare } from "@/components/pro-blocks/landing-page/blog-share";
import { ReadingProgress } from "@/components/pro-blocks/landing-page/reading-progress";
import type { Guide } from "@/cms/articles";

export function GuidePage({ guide }: { guide: Guide }) {
  return (
    <>
      <ReadingProgress />
      <article className="bg-background">
        <header className="bg-[oklch(0.13_0.035_255)] text-white">
          <div className="container-padding-x container mx-auto flex flex-col gap-6 pb-12 pt-24 sm:pb-16">
            <h1 className="max-w-[24ch] text-balance text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              {guide.title}
            </h1>
            <p className="text-sm text-white/85">
              <time dateTime={guide.date}>{guide.dateLabel}</time>
              {guide.byline ? ` · ${guide.byline}` : null}
            </p>
          </div>
        </header>
        <div className="container-padding-x container mx-auto py-10 lg:py-14">
          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            <ArticleBody value={guide.body} />
            <BlogShare title={guide.title} slug={guide.slug} basePath="/guides" />
          </div>
        </div>
      </article>
    </>
  );
}
