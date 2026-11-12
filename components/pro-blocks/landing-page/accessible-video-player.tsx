"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import {
  Captions,
  CaptionsOff,
  Maximize,
  Minimize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";

// The browser draws its own media controls inside the <video>, and their
// focus ring is a thin, low-contrast line the site cannot restyle (WCAG 2.4.7,
// 1.4.11). These are ordinary buttons and a range input with the site's focus
// outline: white, 2px, offset, on a dark bar (well above 3:1).
//
// Before hydration (or without JavaScript) the native controls are shown, so
// the video always stays playable.

const CONTROL =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function clock(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function AccessibleVideoPlayer({
  src,
  poster,
  captions,
  title,
  className,
  videoClassName,
  videoRef,
}: {
  src: string;
  poster?: string;
  captions: string;
  title: string;
  className?: string;
  videoClassName?: string;
  videoRef?: RefObject<HTMLVideoElement | null>;
}) {
  const ownRef = useRef<HTMLVideoElement>(null);
  const video = videoRef ?? ownRef;
  const frame = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setEnhanced(true);
    // Metadata can load before hydration attaches onLoadedMetadata.
    const v = video.current;
    if (v && v.readyState >= 1) setDuration(v.duration);
    if (v) setMuted(v.muted);
  }, [video]);

  useEffect(() => {
    const onChange = () =>
      setFullscreen(document.fullscreenElement === frame.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const el = () => video.current;

  const togglePlay = () => {
    const v = el();
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  const toggleCaptions = () => {
    const track = el()?.textTracks[0];
    if (!track) return;
    const next = !captionsOn;
    track.mode = next ? "showing" : "hidden";
    setCaptionsOn(next);
  };

  const toggleMute = () => {
    const v = el();
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const box = frame.current;
    const v = el() as
      (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (document.fullscreenElement) void document.exitFullscreen();
    else if (box?.requestFullscreen) void box.requestFullscreen();
    // iPhone Safari only allows the video itself to go full screen.
    else v?.webkitEnterFullscreen?.();
  };

  return (
    <div
      ref={frame}
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border bg-black",
        fullscreen && "h-full rounded-none border-0",
        className,
      )}
    >
      <video
        ref={video}
        src={src}
        poster={poster}
        controls={!enhanced}
        playsInline
        // Metadata only (a few KB): the duration is needed so the seek slider
        // is usable before playback starts.
        preload="metadata"
        aria-label={title}
        className={cn(
          "w-full bg-black object-contain",
          fullscreen ? "min-h-0 flex-1" : videoClassName,
        )}
        onClick={enhanced ? togglePlay : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      >
        <track
          kind="captions"
          src={captions}
          srcLang="en"
          label="English"
          default
        />
        <a href={src}>Download {title}</a>
      </video>

      {enhanced ? (
        <div
          role="group"
          aria-label={`${title}: video controls`}
          className="flex flex-col gap-1 bg-[oklch(0.13_0.035_255)] px-2 pb-2 pt-3"
        >
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={1}
            value={Math.min(time, duration || 0)}
            onChange={(e) => {
              const next = Number(e.target.value);
              // Update the slider at once, so repeated arrow presses add up
              // instead of waiting for the video's next timeupdate.
              setTime(next);
              const v = el();
              if (v) v.currentTime = next;
            }}
            aria-label="Seek"
            aria-valuetext={`${clock(time)} of ${clock(duration)}`}
            disabled={!duration}
            className="mx-1 h-6 cursor-pointer accent-white disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
          {/* Wraps on narrow players, so no control is ever cut off. */}
          <div className="flex flex-wrap items-center gap-1">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className={CONTROL}
            >
              {playing ? (
                <Pause className="size-5" aria-hidden="true" />
              ) : (
                <Play className="size-5" aria-hidden="true" />
              )}
            </button>
            <span className="px-1 text-sm tabular-nums text-white">
              {clock(time)} / {clock(duration)}
            </span>
            <div className="ml-auto flex items-center gap-1">
              <button
                type="button"
                onClick={toggleCaptions}
                aria-label="Captions"
                aria-pressed={captionsOn}
                className={CONTROL}
              >
                {captionsOn ? (
                  <Captions className="size-5" aria-hidden="true" />
                ) : (
                  <CaptionsOff className="size-5" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label="Mute"
                aria-pressed={muted}
                className={CONTROL}
              >
                {muted ? (
                  <VolumeX className="size-5" aria-hidden="true" />
                ) : (
                  <Volume2 className="size-5" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={fullscreen ? "Exit full screen" : "Full screen"}
                className={CONTROL}
              >
                {fullscreen ? (
                  <Minimize className="size-5" aria-hidden="true" />
                ) : (
                  <Maximize className="size-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
