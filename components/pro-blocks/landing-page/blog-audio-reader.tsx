"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Headphones, Pause, Play, Square } from "lucide-react";

type PlayerStatus = "idle" | "playing" | "paused";

// Prefer the most natural-sounding English voice the device offers. Cloud /
// "Natural" / "Online" voices sound markedly more human than local defaults.
const VOICE_PREFERENCES: RegExp[] = [
  /natural/i,
  /\bonline\b/i,
  /\b(aria|jenny|guy|emma|brian|andrew)\b/i,
  /google.*(us|english)/i,
  /\b(samantha|siri)\b/i,
  /microsoft/i,
];

function pickBestVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;
  const english = voices.filter((v) => v.lang?.toLowerCase().startsWith("en"));
  const pool = english.length > 0 ? english : voices;
  const enUs = pool.filter((v) => v.lang?.toLowerCase() === "en-us");
  const ranked = enUs.length > 0 ? enUs : pool;

  for (const pattern of VOICE_PREFERENCES) {
    const match = ranked.find((v) => pattern.test(v.name));
    if (match) return match;
  }
  return (
    ranked.find((v) => v.localService === false) ??
    ranked.find((v) => v.default) ??
    ranked[0]
  );
}

const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2] as const;
// Approximate words-per-minute for a synthesized voice at rate 1. Used to drive
// the progress bar, since the SpeechSynthesis `boundary` event is unreliable
// across browsers (Safari and some Chrome voices never fire it).
const BASE_WPM = 165;

export function BlogAudioReader({ text }: { text: string }) {
  const [mounted, setMounted] = useState(false);
  const [supported, setSupported] = useState(false);
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [rate, setRate] = useState(1);
  const [announcement, setAnnouncement] = useState("");

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const keepAliveRef = useRef<number | null>(null);

  // Time-based progress tracking.
  const wordCountRef = useRef(0);
  const durationMsRef = useRef(1);
  const elapsedMsRef = useRef(0);
  const segmentStartRef = useRef(0);
  const progressTimerRef = useRef<number | null>(null);

  if (wordCountRef.current === 0) {
    wordCountRef.current = text.trim().split(/\s+/).filter(Boolean).length;
  }

  const stopKeepAlive = useCallback(() => {
    if (keepAliveRef.current !== null) {
      window.clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }, []);

  // Remove handlers from the active utterance so a subsequent cancel() can't
  // fire its onend/onerror and clobber the player state asynchronously.
  const detachCurrent = useCallback(() => {
    const current = utteranceRef.current;
    if (current) {
      current.onend = null;
      current.onerror = null;
      current.onboundary = null;
    }
  }, []);

  const stopProgressTimer = useCallback(() => {
    if (progressTimerRef.current !== null) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  const startProgressTimer = useCallback(() => {
    stopProgressTimer();
    progressTimerRef.current = window.setInterval(() => {
      const total = elapsedMsRef.current + (Date.now() - segmentStartRef.current);
      const pct = durationMsRef.current > 0 ? (total / durationMsRef.current) * 100 : 0;
      // Cap below 100 until the utterance actually ends.
      setProgress(Math.min(99, Math.max(0, pct)));
    }, 200);
  }, [stopProgressTimer]);

  // Chrome stops long utterances after ~15s; pausing/resuming keeps it alive.
  const startKeepAlive = useCallback(() => {
    stopKeepAlive();
    keepAliveRef.current = window.setInterval(() => {
      const synth = window.speechSynthesis;
      if (synth.speaking && !synth.paused) {
        synth.pause();
        synth.resume();
      }
    }, 12000);
  }, [stopKeepAlive]);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    setSupported(true);

    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  useEffect(() => {
    return () => {
      stopKeepAlive();
      stopProgressTimer();
      detachCurrent();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [stopKeepAlive, stopProgressTimer, detachCurrent]);

  const speakFromStart = useCallback(
    (selectedRate: number) => {
      const synth = window.speechSynthesis;

      // Detach the previous utterance's handlers before cancelling, otherwise
      // cancel() fires its onend/onerror asynchronously and resets our state
      // back to "idle" right after the new utterance has started.
      detachCurrent();
      synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const voice = pickBestVoice(voicesRef.current);
      if (voice) utterance.voice = voice;
      utterance.lang = voice?.lang ?? "en-US";
      utterance.rate = selectedRate;
      utterance.pitch = 1;

      utterance.onend = () => {
        setStatus("idle");
        setProgress(0);
        setAnnouncement("Finished reading the article");
        stopKeepAlive();
        stopProgressTimer();
      };
      utterance.onerror = () => {
        setStatus("idle");
        setProgress(0);
        stopKeepAlive();
        stopProgressTimer();
      };

      utteranceRef.current = utterance;

      // Reset and start the time-based progress estimate for this run.
      durationMsRef.current =
        (wordCountRef.current / (BASE_WPM * selectedRate)) * 60000;
      elapsedMsRef.current = 0;
      segmentStartRef.current = Date.now();
      setProgress(0);

      synth.speak(utterance);
      setStatus("playing");
      startKeepAlive();
      startProgressTimer();
    },
    [text, detachCurrent, startKeepAlive, stopKeepAlive, startProgressTimer, stopProgressTimer],
  );

  const handlePlay = useCallback(() => {
    if (status === "paused") {
      window.speechSynthesis.resume();
      segmentStartRef.current = Date.now();
      setStatus("playing");
      setAnnouncement("Resumed playing the article");
      startKeepAlive();
      startProgressTimer();
      return;
    }
    speakFromStart(rate);
    setAnnouncement("Playing the article");
  }, [status, rate, speakFromStart, startKeepAlive, startProgressTimer]);

  const handlePause = useCallback(() => {
    window.speechSynthesis.pause();
    elapsedMsRef.current += Date.now() - segmentStartRef.current;
    setStatus("paused");
    setAnnouncement("Paused");
    stopKeepAlive();
    stopProgressTimer();
  }, [stopKeepAlive, stopProgressTimer]);

  const handleStop = useCallback(() => {
    detachCurrent();
    window.speechSynthesis.cancel();
    elapsedMsRef.current = 0;
    setStatus("idle");
    setProgress(0);
    setAnnouncement("Stopped");
    stopKeepAlive();
    stopProgressTimer();
  }, [detachCurrent, stopKeepAlive, stopProgressTimer]);

  const handleSpeedChange = useCallback(
    (nextRate: number) => {
      setRate(nextRate);
      setAnnouncement(`Speed set to ${nextRate} times`);
      // The Web Speech API can't change rate mid-utterance, so restart if the
      // article is currently playing or paused.
      if (status !== "idle") {
        speakFromStart(nextRate);
      }
    },
    [status, speakFromStart],
  );

  if (!mounted || !supported) {
    return null;
  }

  const isPlaying = status === "playing";
  const playLabel = isPlaying
    ? "Pause"
    : status === "paused"
      ? "Resume"
      : "Listen to this article";

  return (
    <section
      aria-label="Listen to this article"
      className="flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:gap-4"
    >
      <div className="flex items-center gap-2.5">
        <span
          className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          aria-hidden="true"
        >
          <Headphones className="h-4 w-4 text-primary" />
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">
            Listen to this article
          </span>
          <span className="text-xs text-muted-foreground">
            Text-to-speech, read in your browser
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:ml-auto sm:gap-3">
        <div
          className="h-1.5 min-w-16 flex-1 overflow-hidden rounded-full bg-secondary sm:w-28 sm:flex-none"
          role="progressbar"
          aria-label="Playback progress"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={`${Math.round(progress)} percent`}
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-200 ease-out motion-reduce:transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>

        <label htmlFor="tts-speed" className="sr-only">
          Playback speed
        </label>
        <select
          id="tts-speed"
          value={rate}
          onChange={(event) => handleSpeedChange(Number(event.target.value))}
          className="text-foreground hover:bg-accent focus-visible:ring-ring focus-visible:ring-offset-background h-10 shrink-0 rounded-full border bg-card px-2.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {SPEED_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}&times;
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={isPlaying ? handlePause : handlePlay}
          aria-label={playLabel}
          title={playLabel}
          className="focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="h-4 w-4 translate-x-px" aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          onClick={handleStop}
          disabled={status === "idle"}
          aria-label="Stop"
          title="Stop"
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-muted-foreground"
        >
          <Square className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </section>
  );
}
