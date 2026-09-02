import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";
import { BlogShare } from "@/components/pro-blocks/landing-page/blog-share";
import { BlogAudioReader } from "@/components/pro-blocks/landing-page/blog-audio-reader";
import { ReadingProgress } from "@/components/pro-blocks/landing-page/reading-progress";
import { slugifyHeading, toSegments } from "@/lib/blog";
import { getNewsReadingTime, type NewsItem, type NewsLink } from "@/lib/news";

const LINK_CLASS =
  "font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80";

function ExternalAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ExternalLink
        className="ml-1 inline h-3.5 w-3.5 align-[-0.125em]"
        aria-hidden="true"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function NewsArticlePage({ item }: { item: NewsItem }) {
  const audioText = [
    item.title,
    item.description,
    ...item.content.map((block) => block.text),
  ].join("\n\n");

  const renderText = (text: string, links?: NewsLink[]) =>
    toSegments(text, links).map((segment, index) => {
      if (typeof segment === "string") return segment;
      const key = `${segment.href}-${index}`;
      if (segment.href.startsWith("/")) {
        return (
          <Link key={key} href={segment.href} prefetch className={LINK_CLASS}>
            {segment.text}
          </Link>
        );
      }
      return (
        <ExternalAnchor key={key} href={segment.href} className={LINK_CLASS}>
          {segment.text}
        </ExternalAnchor>
      );
    });

  return (
    <>
      <ReadingProgress />

      <article className="bg-background">
        {/*
          * Full-bleed header photo. The gradient keeps the white text on the
          * dark end of the image on every viewport: left-to-right on desktop,
          * top-to-bottom on mobile where the copy sits at the bottom.
          */}
        <header className="relative isolate overflow-hidden bg-[oklch(0.13_0.035_255)] text-white">
          <Image
            src={assetPath(item.heroImage)}
            alt={item.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.13_0.035_255/.97)_0%,oklch(0.13_0.035_255/.88)_44%,oklch(0.13_0.035_255/.42)_76%,oklch(0.13_0.035_255/.22)_100%)] max-md:bg-[linear-gradient(180deg,oklch(0.13_0.035_255/.7)_0%,oklch(0.13_0.035_255/.6)_35%,oklch(0.13_0.035_255/.95)_100%)]"
            aria-hidden="true"
          />
          <div className="container-padding-x container relative z-10 mx-auto flex min-h-[32rem] flex-col justify-end pb-12 pt-24 sm:min-h-[36rem] sm:pb-16 lg:pb-20">
            <div className="flex max-w-3xl flex-col gap-6">
              <div>
                <Button
                  asChild
                  variant="ghost"
                  className="h-8 -ml-2 rounded-lg px-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white focus-visible:ring-white focus-visible:ring-offset-[oklch(0.13_0.035_255)]"
                >
                  <Link href="/news" prefetch>
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    All news
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="max-w-[20ch] text-balance text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                {item.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  <span>
                    Published <time dateTime={item.date}>{item.dateLabel}</time>
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {getNewsReadingTime(item)}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container-padding-x container mx-auto py-10 lg:py-14">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {item.heroCredit ? (
              <p className="text-xs text-muted-foreground">
                {item.heroCredit.href ? (
                  <ExternalAnchor
                    href={item.heroCredit.href}
                    className="underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {item.heroCredit.text}
                  </ExternalAnchor>
                ) : (
                  item.heroCredit.text
                )}
              </p>
            ) : null}

            <BlogAudioReader text={audioText} />

            {item.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    id={slugifyHeading(block.text)}
                    className="heading-sm mt-6 scroll-mt-24 text-balance text-foreground"
                  >
                    {block.text}
                  </h2>
                );
              }

              return (
                <p
                  key={index}
                  className="text-base leading-relaxed text-muted-foreground lg:text-lg"
                >
                  {renderText(block.text, block.links)}
                </p>
              );
            })}

            <BlogShare title={item.title} slug={item.slug} basePath="/news" />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section
        aria-labelledby="news-cta-heading"
        className="bg-secondary section-padding-y border-t"
      >
        <div className="container-padding-x container mx-auto">
          <div className="bg-primary mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2
              id="news-cta-heading"
              className="text-primary-foreground text-2xl font-semibold text-balance sm:text-3xl"
            >
              Could you show what your agency has done about accessibility?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
              We audit, we fix, and we document every step. A defensible
              program should not break the budget, and it does not have to.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
              >
                <Link href="/contact" prefetch>
                  Let&apos;s talk
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
              >
                <Link href="/a3s" prefetch>
                  See how A3S works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
