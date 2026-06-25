import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";
import { BlogShare } from "@/components/pro-blocks/landing-page/blog-share";
import type { BlogPost } from "@/lib/blog";

export function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Header */}
      <article className="bg-background">
        <header className="section-padding-y border-b">
          <div className="container-padding-x container mx-auto">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              <div>
                <Button
                  asChild
                  variant="ghost"
                  className="h-8 -ml-2 rounded-lg px-2 text-sm font-medium text-muted-foreground"
                >
                  <Link href="/blog" prefetch>
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    All articles
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <Tagline key={tag} variant="ghost">
                    {tag}
                  </Tagline>
                ))}
              </div>

              <h1 className="heading-xl text-balance text-foreground">
                {post.title}
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                {post.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-primary/10">
                    <Image
                      src={assetPath(post.author.photo)}
                      alt={`${post.author.name}, ${post.author.role}`}
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">
                      {post.author.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.author.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays
                      className="h-3.5 w-3.5 text-primary"
                      aria-hidden="true"
                    />
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock
                      className="h-3.5 w-3.5 text-primary"
                      aria-hidden="true"
                    />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-4xl py-10 lg:py-12">
            <figure className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl border bg-secondary/40 shadow-sm">
                <Image
                  src={assetPath(post.heroImage)}
                  alt={post.heroAlt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              {post.heroCredit ? (
                <figcaption className="text-xs text-muted-foreground">
                  {post.heroCredit}
                </figcaption>
              ) : null}
            </figure>
          </div>
        </div>

        {/* Body */}
        <div className="container-padding-x container mx-auto pb-16 lg:pb-24">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {post.content.map((block, index) =>
              block.type === "heading" ? (
                <h2
                  key={index}
                  className="heading-sm mt-6 text-balance text-foreground"
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={index}
                  className="text-base leading-relaxed text-muted-foreground lg:text-lg"
                >
                  {block.text}
                </p>
              ),
            )}

            <BlogShare title={post.title} slug={post.slug} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-secondary section-padding-y border-t">
        <div className="container-padding-x container mx-auto">
          <div className="bg-primary mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-primary-foreground text-2xl font-semibold text-balance sm:text-3xl">
              Ready to Make Your Digital Products Accessible?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
              Whether you need a full managed service or a platform to track your
              own remediation, we have a solution for you.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/contact" prefetch>
                  Talk to Sales
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/blog" prefetch>
                  Read more articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
