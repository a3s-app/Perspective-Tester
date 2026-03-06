"use client";

import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { FileText, PlayCircle } from "lucide-react";

type VideoItem = {
  id: string;
  title: string;
  description: string;
};

const videos: VideoItem[] = [
  {
    id: "aR2hLNmyT9U",
    title: "Justin's Perspective on Blindness",
    description:
      "Justin Salas, our Accessibility Champion at Perspective Tester, guides us through his world of web navigation.",
  },
  {
    id: "usiTK_CvwkA",
    title: "About Perspective Tester",
    description:
      "Hear the story about the inspiration behind Perspective Tester.",
  },
  {
    id: "vhHr1a8bEMc",
    title: "What Makes the Web Inaccessible?",
    description:
      "Justin Salas shares one key reason digital experiences become inaccessible.",
  },
];

function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-xl border bg-secondary">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export function VideoShowcaseSection() {
  const [featuredVideo, ...secondaryVideos] = videos;

  return (
    <section className="bg-background section-padding-y border-b" id="videos">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-3xl flex-col items-center text-center">
          <Tagline>
            <PlayCircle className="h-3.5 w-3.5 text-primary" />
            <span className="text-foreground">Video Library</span>
          </Tagline>
          <h2 className="heading-lg text-foreground">
            Accessibility Stories in Motion
          </h2>
          <p className="text-muted-foreground text-base">
            Watch how Perspective Tester brings engineering equity to digital
            experiences with practical, human-centered accessibility work.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.45fr_1fr]">
          <article className="min-w-0 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
            <VideoEmbed id={featuredVideo.id} title={featuredVideo.title} />
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                Main Video
              </p>
              <h3 className="text-foreground text-lg font-semibold">
                {featuredVideo.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {featuredVideo.description}
              </p>
              <Link
                href="https://p15r.com/wp-content/uploads/2024/03/Our-Story-Video-Alternative-Text-1.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mt-1 inline-flex w-full items-center gap-1.5 text-sm font-medium hover:underline sm:w-fit"
              >
                <FileText className="h-4 w-4" />
                Download Story Video Text Alternative
              </Link>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryVideos.map((video) => (
              <article
                key={video.id}
                className="min-w-0 rounded-2xl border bg-card p-3.5 shadow-sm"
              >
                <VideoEmbed id={video.id} title={video.title} />
                <div className="mt-3 flex flex-col gap-1.5">
                  <h3 className="text-foreground text-base font-semibold">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
