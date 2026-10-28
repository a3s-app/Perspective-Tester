import { draftMode } from "next/headers";

export async function DraftBanner({ path }: { path: string }) {
  if (!(await draftMode()).isEnabled) return null;
  return (
    <div
      role="status"
      className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-amber-200 px-4 py-2 text-center text-sm font-medium text-amber-950"
    >
      <span>Draft preview. This page is not published yet.</span>
      <a
        href={`/api/preview/disable?to=${encodeURIComponent(path)}`}
        className="underline underline-offset-4"
      >
        Exit preview
      </a>
    </div>
  );
}
