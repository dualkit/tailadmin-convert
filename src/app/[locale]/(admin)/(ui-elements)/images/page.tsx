import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ResponsiveImage from "@/components/ui/images/ResponsiveImage";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("images.title"), description: t("images.description") };
}

export default function Images() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle={t('page-title.images')} />
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
