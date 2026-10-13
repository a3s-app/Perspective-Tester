import { WebsitePage, pageMetadata } from "@/components/cms/website-page";
import { getRoutes } from "@/cms/server";
export const revalidate = 3600;
export const dynamicParams = true;
type Props = { params: Promise<{ slug?: string[] }> };
export async function generateStaticParams() {
  return (await getRoutes())
    .filter((p) => p.path)
    .map((p) => ({ slug: p.path === "/" ? [] : p.path!.slice(1).split("/") }));
}
export async function generateMetadata({ params }: Props) {
  return pageMetadata("/" + ((await params).slug ?? []).join("/"));
}
export default async function Page({ params }: Props) {
  return <WebsitePage path={"/" + ((await params).slug ?? []).join("/")} />;
}
