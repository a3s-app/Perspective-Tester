import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { ArrowRight, CalendarDays, Clock, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";
import { getAllPosts, getReadingTime } from "@/lib/blog";

export function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Newspaper className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span className="text-foreground">Blog</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Notes on Accessibility, in Practice
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Field notes from our team on WCAG 2.2, remediation, and what it
                actually takes to build digital experiences that work for real
                users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col gap-10">
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              prefetch
              aria-label={`Read article: ${featured.title}`}
              className="group block overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg focus-visible:shadow-lg"
            >
              <article className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-secondary/40 lg:aspect-auto lg:h-full">
                  <Image
                    src={assetPath(featured.heroImage)}
                    alt={featured.heroAlt}
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
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/10">
                        <Image
                          src={assetPath(featured.author.photo)}
                          alt=""
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
                      Read article
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ) : null}

          {rest.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  prefetch
                  aria-label={`Read article: ${post.title}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg focus-visible:shadow-lg"
                >
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-secondary/40">
                      <Image
                        src={assetPath(post.heroImage)}
                        alt={post.heroAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h2 className="text-base font-semibold leading-snug text-foreground">
                        {post.title}
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
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
