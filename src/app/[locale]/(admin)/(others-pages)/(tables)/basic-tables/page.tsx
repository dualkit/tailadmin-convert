import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("basic-tables.title"), description: t("basic-tables.description") };
}

export default function BasicTables() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle={t('page-title.basic-table')} />
      <div className="space-y-6">
        <ComponentCard title={t('basic-tables.basic-table-1')}>
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
