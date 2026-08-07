import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HardwareProductPage } from "@/components/HardwareProductPage";
import {
  getHardwareProduct,
  hardwareProducts,
} from "@/lib/hardware";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return hardwareProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getHardwareProduct(slug);
  if (!product) {
    return { title: "Hardware — ChapelCloud" };
  }
  return {
    title: `${product.title} — ChapelCloud Hardware`,
    description: product.metaDescription,
  };
}

export default async function HardwareSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getHardwareProduct(slug);
  if (!product) notFound();
  return <HardwareProductPage product={product} />;
}
