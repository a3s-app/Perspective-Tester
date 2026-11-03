"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/blog-index-page.json";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { ArrowRight, CalendarDays, Clock, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";
import { getReadingTime, type BlogPost } from "@/lib/blog";

export function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
  const content = useSection("blog-index-page", defaults);

  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Newspaper
                className="h-3.5 w-3.5 text-primary"
                aria-hidden="true"
              />
              <span className="text-foreground">{content.text_1}</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                {content.heading_2}
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {content.paragraph_3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col gap-10">
          {featured ? (
            <article className="group relative grid gap-0 overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg has-[a:focus-visible]:shadow-lg has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-secondary/40 lg:aspect-auto lg:h-full">
                <Image
                  src={assetPath(featured.heroImage)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  priority
                />
              </div>
              <div className="flex flex-col gap-5 p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="heading-sm text-balance text-foreground">
                  <Link
                    href={`/blog/${featured.slug}`}
                    prefetch
                    className="focus-visible:outline-none after:absolute after:inset-0 after:content-['']"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/10">
                      <Image
                        src={assetPath(featured.author.photo)}
                        alt={content.alt_4}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        {featured.author.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {featured.author.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays
                        className="h-3.5 w-3.5 text-primary"
                        aria-hidden="true"
                      />
                      {featured.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock
                        className="h-3.5 w-3.5 text-primary"
                        aria-hidden="true"
                      />
                      {getReadingTime(featured)}
                    </span>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                    aria-hidden="true"
                  >
                    {content.text_5}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </article>
          ) : null}

          {rest.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg has-[a:focus-visible]:shadow-lg has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-secondary/40">
                    <Image
                      src={assetPath(post.heroImage)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h2 className="text-base font-semibold leading-snug text-foreground">
                      <Link
                        href={`/blog/${post.slug}`}
                        prefetch
                        className="focus-visible:outline-none after:absolute after:inset-0 after:content-['']"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {post.author.name}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock
                          className="h-3.5 w-3.5 text-primary"
                          aria-hidden="true"
                        />
                        {getReadingTime(post)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
