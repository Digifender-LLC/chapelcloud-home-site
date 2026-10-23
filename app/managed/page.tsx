import type { Metadata } from "next";
import { ManagedOverviewPage } from "@/components/ManagedOverviewPage";

export const metadata: Metadata = {
  title: "Care — ChapelCloud Managed",
  description:
    "ChapelCloud remote technology care for churches: network stewardship, security systems, volunteer training, and Sunday-aware support.",
};

export default function ManagedPage() {
  return <ManagedOverviewPage />;
}
