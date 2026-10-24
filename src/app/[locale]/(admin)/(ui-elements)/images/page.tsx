import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ResponsiveImage from "@/components/ui/images/ResponsiveImage";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";
import { Metadata } from "next";
import React from "react";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Next.js Images | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Images page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function Images() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle="Images" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title={t('images.responsive-image')}>
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title={t('images.image-in-2-grid')}>
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title={t('images.image-in-3-grid')}>
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </div>
  );
}
