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

// The multipliers shown to the user. These are the *perceived* speeds.
const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2] as const;
// The Web Speech API's `rate` is not linear: Chrome's Google voices scale it
// roughly as rate^1.5, so utterance.rate = 2 sounds ~3x, not 2x (measured on
// Google US English). Map each labelled multiplier to the synthesis rate that
// actually lands near it (rate = label^(1/1.5)), so the labels tell the truth.
const SYNTH_RATE: Record<number, number> = {
  0.75: 0.82,
  1: 1,
  1.25: 1.15,
  1.5: 1.31,
  2: 1.59,
};
function synthRateFor(label: number): number {
  return SYNTH_RATE[label] ?? label;
}
// Approximate words-per-minute at 1x, used to drive the progress bar since the
// SpeechSynthesis `boundary` event is unreliable across browsers (Safari and
// some Chrome voices never fire it). Progress is keyed to the labelled speed.
const BASE_WPM = 165;
// Max characters per utterance. Chrome silently fails to speak (or cuts off)
// long single utterances, so the article is spoken as a queue of short chunks.
const MAX_CHUNK_CHARS = 220;

/**
 * Break the article into short, sentence-aligned chunks. Speaking many small
 * utterances back-to-back is the reliable way around Chrome's long-utterance
 * bug, where a single multi-thousand-character utterance never starts.
 */
function chunkText(text: string): string[] {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return [];

  const sentences = normalized.match(/[^.!?]+[.!?]*\s*/g) ?? [normalized];
  const chunks: string[] = [];
  let current = "";

  for (const raw of sentences) {
    const sentence = raw.trim();
    if (!sentence) continue;
    if (current && current.length + sentence.length + 1 > MAX_CHUNK_CHARS) {
      chunks.push(current);
      current = sentence;
    } else {
      current = current ? `${current} ${sentence}` : sentence;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

export function BlogAudioReader({ text }: { text: string }) {
  const [mounted, setMounted] = useState(false);
  const [supported, setSupported] = useState(false);
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [rate, setRate] = useState(1);
  const [announcement, setAnnouncement] = useState("");

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // The article split into short utterances, plus where we are in the queue.
  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef(0);
  const totalCharsRef = useRef(1);
  const completedCharsRef = useRef(0);

  // Time-based progress tracking within the current chunk.
  const durationMsRef = useRef(1);
  const segmentStartRef = useRef(0);
  const segmentElapsedRef = useRef(0);
  const progressTimerRef = useRef<number | null>(null);

  if (chunksRef.current.length === 0) {
    chunksRef.current = chunkText(text);
    totalCharsRef.current =
      chunksRef.current.reduce((sum, chunk) => sum + chunk.length + 1, 0) || 1;
  }

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
      const withinChunk =
        durationMsRef.current > 0
          ? Math.min(
              1,
              (segmentElapsedRef.current + (Date.now() - segmentStartRef.current)) /
                durationMsRef.current,
            )
          : 0;
      const currentChunkChars =
        chunksRef.current[chunkIndexRef.current]?.length ?? 0;
      const spoken = completedCharsRef.current + withinChunk * currentChunkChars;
      const pct = (spoken / totalCharsRef.current) * 100;
      // Cap below 100 until the final utterance actually ends.
      setProgress(Math.min(99, Math.max(0, pct)));
    }, 200);
  }, [stopProgressTimer]);

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
      stopProgressTimer();
      detachCurrent();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [stopProgressTimer, detachCurrent]);

  // Speak the queue starting at `startIndex`, chaining each chunk to the next.
  // `selectedLabel` is the multiplier shown to the user (0.75x .. 2x); the
  // actual synthesis rate is calibrated so the perceived speed matches.
  const speakFromChunk = useCallback(
    (startIndex: number, selectedLabel: number) => {
      const synth = window.speechSynthesis;
      const chunks = chunksRef.current;
      if (chunks.length === 0) return;

      // Detach the previous utterance's handlers before cancelling, otherwise
      // cancel() fires its onend/onerror asynchronously and resets our state
      // back to "idle" right after the new utterance has started.
      detachCurrent();
      synth.cancel();

      const voice = pickBestVoice(voicesRef.current);
      completedCharsRef.current = chunks
        .slice(0, startIndex)
        .reduce((sum, chunk) => sum + chunk.length + 1, 0);

      const speakChunk = (index: number) => {
        if (index >= chunks.length) {
          setStatus("idle");
          setProgress(0);
          completedCharsRef.current = 0;
          chunkIndexRef.current = 0;
          setAnnouncement("Finished reading the article");
          stopProgressTimer();
          return;
        }

        chunkIndexRef.current = index;
        const chunk = chunks[index];
        const utterance = new SpeechSynthesisUtterance(chunk);
        if (voice) utterance.voice = voice;
        utterance.lang = voice?.lang ?? "en-US";
        utterance.rate = synthRateFor(selectedLabel);
        utterance.pitch = 1;

        const words = chunk.split(/\s+/).filter(Boolean).length;
        // Progress tracks the labelled (perceived) speed, not the synth rate.
        durationMsRef.current = (words / (BASE_WPM * selectedLabel)) * 60000;
        segmentElapsedRef.current = 0;
        segmentStartRef.current = Date.now();

        utterance.onend = () => {
          completedCharsRef.current += chunk.length + 1;
          speakChunk(index + 1);
        };
        utterance.onerror = (event) => {
          // Our own cancel()/restart shows up as interrupted/canceled; ignore.
          if (event.error === "interrupted" || event.error === "canceled") {
            return;
          }
          setStatus("idle");
          setProgress(0);
          stopProgressTimer();
        };

        utteranceRef.current = utterance;
        synth.speak(utterance);
      };

      speakChunk(startIndex);
      setStatus("playing");
      startProgressTimer();
    },
    [detachCurrent, startProgressTimer, stopProgressTimer],
  );

  const handlePlay = useCallback(() => {
    if (status === "paused") {
      window.speechSynthesis.resume();
      segmentStartRef.current = Date.now();
      setStatus("playing");
      setAnnouncement("Resumed playing the article");
      startProgressTimer();
      return;
    }
    speakFromChunk(0, rate);
    setAnnouncement("Playing the article");
  }, [status, rate, speakFromChunk, startProgressTimer]);

  const handlePause = useCallback(() => {
    window.speechSynthesis.pause();
    segmentElapsedRef.current += Date.now() - segmentStartRef.current;
    setStatus("paused");
    setAnnouncement("Paused");
    stopProgressTimer();
  }, [stopProgressTimer]);

  const handleStop = useCallback(() => {
    detachCurrent();
    window.speechSynthesis.cancel();
    completedCharsRef.current = 0;
    chunkIndexRef.current = 0;
    segmentElapsedRef.current = 0;
    setStatus("idle");
    setProgress(0);
    setAnnouncement("Stopped");
    stopProgressTimer();
  }, [detachCurrent, stopProgressTimer]);

  const handleSpeedChange = useCallback(
    (nextRate: number) => {
      setRate(nextRate);
      setAnnouncement(`Speed set to ${nextRate} times`);
      // The Web Speech API can't change rate mid-utterance, so restart from the
      // current chunk if the article is currently playing or paused.
      if (status !== "idle") {
        speakFromChunk(chunkIndexRef.current, nextRate);
      }
    },
    [status, speakFromChunk],
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
          <Headphones className="h-4 w-4 text-primary" aria-hidden="true" />
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
          className="text-foreground hover:bg-accent focus-visible:ring-ring focus-visible:ring-offset-background h-10 shrink-0 rounded-full border border-input bg-card px-2.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-input bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-muted-foreground"
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
