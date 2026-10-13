import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from '@/sanity/client';

export const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value);
export function shape(values: unknown[]): unknown {
  const present = values.filter(v => v !== undefined && v !== null);
  if (present.some(Array.isArray)) return [shape(present.flatMap(v => Array.isArray(v) ? v : []))];
  if (present.some(isObject)) {
    const objects = present.filter(isObject);
    return Object.fromEntries([...new Set(objects.flatMap(Object.keys))].map(k => [k, shape(objects.map(o => o[k]))]));
  }
  return present[0] ?? '';
}
const builder = createImageUrlBuilder({projectId, dataset});
export function imageURL(image: unknown, fallback = ''): string {
  if (typeof image === 'string') return safeHref(image, fallback);
  if (!isObject(image) || !isObject(image.asset) || typeof image.asset._ref !== 'string') return fallback;
  return builder.image({ ...image, asset: { _ref: image.asset._ref } }).width(1920).fit('max').auto('format').url();
}
export function safeHref(value: string, fallback = '#'): string {
  return /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(value.trim()) ? value : fallback;
}
/** Preserve each template's shape, including intentional empty lists and strings. */
export function decodeContent(value: unknown, sample: unknown): unknown {
  if (Array.isArray(sample)) {
    const row = shape(sample);
    return Array.isArray(value) ? value.map(v => decodeContent(v, row)) : [];
  }
  if (isObject(sample)) {
    const source = isObject(value) ? value : {};
    return Object.fromEntries(Object.entries(sample).map(([key, v]) => [key, decodeContent(source[key], v)]));
  }
  if (isObject(value) && value._type === 'image') return imageURL(value);
  if (typeof sample === 'number') return typeof value === 'number' ? value : 0;
  if (typeof sample === 'boolean') return value === true;
  return typeof value === 'string' ? value : '';
}
export function jsonLD(value: unknown) { return JSON.stringify(value).replace(/</g, '\\u003c'); }
