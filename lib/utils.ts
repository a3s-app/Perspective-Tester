import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a path with the base path for GitHub Pages compatibility */
export function assetPath(path: string): string {
  if (!basePath) return path;
  // Avoid double-prefixing
  if (path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}
