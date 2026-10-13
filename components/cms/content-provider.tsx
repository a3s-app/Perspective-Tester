"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type ContentMap = Record<string, Record<string, unknown>>;
const ContentContext = createContext<ContentMap>({});

export function useSiteSettings() {
  const settings = useContext(ContentContext)["site-settings"];
  return {
    contactEmail: String(
      settings?.contactEmail || "Info@perspectivetester.com",
    ),
    name: String(settings?.name || "Perspective Tester"),
  };
}

export function ContentProvider({
  content,
  children,
}: {
  content: ContentMap;
  children: ReactNode;
}) {
  const parent = useContext(ContentContext);
  const value = useMemo(() => ({ ...parent, ...content }), [parent, content]);
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

type WithIcons<T> = T extends { icon: string }
  ? { [K in keyof T]: K extends "icon" ? LucideIcon : WithIcons<T[K]> }
  : T extends (infer U)[]
    ? WithIcons<U>[]
    : T extends object
      ? { [K in keyof T]: WithIcons<T[K]> }
      : T;

function resolveIcons(
  value: unknown,
  icons: Record<string, LucideIcon>,
): unknown {
  if (Array.isArray(value))
    return value.map((item) => resolveIcons(item, icons));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        key === "icon" && typeof item === "string"
          ? (icons[item] ?? Object.values(icons)[0])
          : resolveIcons(item, icons),
      ]),
    );
  }
  return value;
}

/** Content arrives in the server-rendered page; editing does not require a client fetch. */
export function useSection<T extends Record<string, unknown>>(
  slug: string,
  defaults: T,
  icons?: Record<string, LucideIcon>,
): WithIcons<T> {
  const content = useContext(ContentContext);
  const value = content[slug] ?? defaults;
  return useMemo(
    () => (icons ? resolveIcons(value, icons) : value) as WithIcons<T>,
    [value, icons],
  );
}
