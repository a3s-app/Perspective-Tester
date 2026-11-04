"use client";

import { useRef } from "react";
import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/video-showcase-section.json";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { AudioLines, FileText, PlayCircle } from "lucide-react";
import {
  describedVersions,
  type HomepageVideo,
} from "@/lib/video-alternatives";

const retiredVideoIds = new Set(["usiTK_CvwkA"]);

function VideoEmbed({ id, title }: { id: string; title: string }) {
  const content = useSection("video-showcase-section", defaults);

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

function TextAlternative({ video }: { video: HomepageVideo }) {
  const content = useSection("video-showcase-section", defaults);

  if (!video.alternative) return null;

  return (
    <details
      id={`transcript-${video.id}`}
      className="mt-1 rounded-lg border bg-background text-sm"
    >
      <summary className="text-primary flex cursor-pointer items-center gap-1.5 px-3 py-2 font-medium hover:underline">
        <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
        {content.text_1}
        <span className="sr-only">: {video.title}</span>
      </summary>
      <div className="text-muted-foreground flex flex-col gap-2 border-t px-3 py-3 leading-relaxed">
        {video.alternative.map((line, index) =>
          line.kind === "speech" ? (
            <p key={index}>
              <span className="text-foreground font-semibold">
                {line.speaker}:
              </span>{" "}
              {line.text}
            </p>
          ) : (
            <p key={index} className="italic">
              [{line.text}]
            </p>
          ),
        )}
      </div>
    </details>
  );
}

function DescribedVersion({ video }: { video: HomepageVideo }) {
  const version = describedVersions[video.id];
  const player = useRef<HTMLVideoElement>(null);

  if (!version) return null;

  return (
    <details
      id={`described-${video.id}`}
      className="rounded-lg border bg-background text-sm"
      // A closed <details> hides the player but would keep it playing.
      onToggle={(event) => {
        if (!event.currentTarget.open) player.current?.pause();
      }}
    >
      <summary className="text-primary flex cursor-pointer items-center gap-1.5 px-3 py-2 font-medium hover:underline">
        <AudioLines className="h-4 w-4 shrink-0" aria-hidden="true" />
        Audio-described version ({version.duration})
        <span className="sr-only">: {video.title}</span>
      </summary>
      <div className="text-muted-foreground flex flex-col gap-3 border-t px-3 py-3 leading-relaxed">
        <p>
          The picture pauses while a narrator describes what is on screen.
          Captions include the descriptions.
        </p>
        <video
          ref={player}
          src={version.src}
          controls
          playsInline
          preload="none"
          poster={version.poster}
          aria-label={`${video.title}, audio-described version`}
          className="mx-auto max-h-[70vh] w-full rounded-md bg-black"
        >
          <track
            kind="captions"
            src={version.captions}
            srcLang="en"
            label="English"
            default
          />
          <a href={version.src}>
            Download the audio-described version of {video.title}
          </a>
        </video>
      </div>
    </details>
  );
}

export function VideoShowcaseSection() {
  const content = useSection("video-showcase-section", defaults);
  // "About Perspective Tester" was taken off the site in November 2026. The CMS
  // copy of this section can still list it until it is deleted there.
  const videos = (content.videos as HomepageVideo[]).filter(
    (video) => !retiredVideoIds.has(video.id),
  );

  const [featuredVideo, ...secondaryVideos] = videos;

  return (
    <section className="bg-background section-padding-y border-b" id="videos">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-3xl flex-col items-center text-center">
          <Tagline>
            <PlayCircle
              className="h-3.5 w-3.5 text-primary"
              aria-hidden="true"
            />
            <span className="text-foreground">{content.text_2}</span>
          </Tagline>
          <h2 className="heading-lg text-foreground">{content.heading_3}</h2>
          <p className="text-muted-foreground text-base">
            {content.paragraph_4}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.45fr_1fr]">
          <article
            aria-labelledby={`video-card-${featuredVideo.id}`}
            className="min-w-0 rounded-2xl border bg-card p-4 shadow-sm sm:p-5"
          >
            <VideoEmbed id={featuredVideo.id} title={featuredVideo.title} />
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                {content.paragraph_5}
              </p>
              <h3
                id={`video-card-${featuredVideo.id}`}
                className="text-foreground text-lg font-semibold"
              >
                {featuredVideo.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {featuredVideo.description}
              </p>
              <TextAlternative video={featuredVideo} />
              <DescribedVersion video={featuredVideo} />
            </div>
          </article>

          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryVideos.map((video) => (
              <article
                key={video.id}
                aria-labelledby={`video-card-${video.id}`}
                className="min-w-0 rounded-2xl border bg-card p-3.5 shadow-sm"
              >
                <VideoEmbed id={video.id} title={video.title} />
                <div className="mt-3 flex flex-col gap-1.5">
                  <h3
                    id={`video-card-${video.id}`}
                    className="text-foreground text-base font-semibold"
                  >
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                  <TextAlternative video={video} />
                  <DescribedVersion video={video} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
