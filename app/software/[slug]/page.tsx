import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SoftwareProductPage } from "@/components/SoftwareProductPage";
import {
  getSoftwareProduct,
  softwareProducts,
} from "@/lib/software";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return softwareProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getSoftwareProduct(slug);
  if (!product) {
    return { title: "Software — ChapelCloud" };
  }
  return {
    title: `${product.title} — ChapelCloud Software`,
    description: product.metaDescription,
  };
}

export default async function SoftwareSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getSoftwareProduct(slug);
  if (!product) notFound();
  return <SoftwareProductPage product={product} />;
}
