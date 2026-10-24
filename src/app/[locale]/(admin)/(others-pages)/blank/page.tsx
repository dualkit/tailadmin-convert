import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("blank.title"), description: t("blank.description") };
}

export default function BlankPage() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle={t('page-title.blank-page')} />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            {t('blank.card-title-here')}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            {t('blank.start-putting-content-on')}
          </p>
        </div>
      </div>
    </div>
  );
}
