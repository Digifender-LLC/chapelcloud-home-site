import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ManagedProductPage } from "@/components/ManagedProductPage";
import {
  getManagedProduct,
  managedProducts,
} from "@/lib/managed";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return managedProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getManagedProduct(slug);
  if (!product) {
    return { title: "Managed — ChapelCloud" };
  }
  return {
    title: `${product.title} — ChapelCloud Managed`,
    description: product.metaDescription,
  };
}

export default async function ManagedSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getManagedProduct(slug);
  if (!product) notFound();
  return <ManagedProductPage product={product} />;
}
