import BarChartOne from "@/components/charts/bar/BarChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("bar-chart.title"), description: t("bar-chart.description") };
}

export default function page() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle={t('page-title.bar-chart')} />
      <div className="space-y-6">
        <ComponentCard title={t('bar-chart.bar-chart-1')}>
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
