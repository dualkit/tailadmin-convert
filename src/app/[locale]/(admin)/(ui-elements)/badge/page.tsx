import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Badge from "@/components/ui/badge/Badge";
import { PlusIcon } from "@/icons";
import { Metadata } from "next";
import React from "react";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Next.js Badge | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Badge page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function BadgePage() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle="Badges" />
      <div className="space-y-5 sm:space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              {t('badge.with-light-background')}
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {/* Light Variant */}
              <Badge variant="light" color="primary">
                {t('badge.primary')}
              </Badge>
              <Badge variant="light" color="success">
                {t('badge.success')}
              </Badge>{" "}
              <Badge variant="light" color="error">
                {t('badge.error')}
              </Badge>{" "}
              <Badge variant="light" color="warning">
                {t('badge.warning')}
              </Badge>{" "}
              <Badge variant="light" color="info">
                {t('badge.info')}
              </Badge>
              <Badge variant="light" color="light">
                {t('badge.light')}
              </Badge>
              <Badge variant="light" color="dark">
                {t('badge.dark')}
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              {t('badge.with-solid-background')}
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {/* Light Variant */}
              <Badge variant="solid" color="primary">
                {t('badge.primary')}
              </Badge>
              <Badge variant="solid" color="success">
                {t('badge.success')}
              </Badge>{" "}
              <Badge variant="solid" color="error">
                {t('badge.error')}
              </Badge>{" "}
              <Badge variant="solid" color="warning">
                {t('badge.warning')}
              </Badge>{" "}
              <Badge variant="solid" color="info">
                {t('badge.info')}
              </Badge>
              <Badge variant="solid" color="light">
                {t('badge.light')}
              </Badge>
              <Badge variant="solid" color="dark">
                {t('badge.dark')}
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              {t('badge.light-background-with-left')}
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="light" color="primary" startIcon={<PlusIcon />}>
                {t('badge.primary')}
              </Badge>
              <Badge variant="light" color="success" startIcon={<PlusIcon />}>
                {t('badge.success')}
              </Badge>{" "}
              <Badge variant="light" color="error" startIcon={<PlusIcon />}>
                {t('badge.error')}
              </Badge>{" "}
              <Badge variant="light" color="warning" startIcon={<PlusIcon />}>
                {t('badge.warning')}
              </Badge>{" "}
              <Badge variant="light" color="info" startIcon={<PlusIcon />}>
                {t('badge.info')}
              </Badge>
              <Badge variant="light" color="light" startIcon={<PlusIcon />}>
                {t('badge.light')}
              </Badge>
              <Badge variant="light" color="dark" startIcon={<PlusIcon />}>
                {t('badge.dark')}
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              {t('badge.solid-background-with-left')}
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="solid" color="primary" startIcon={<PlusIcon />}>
                {t('badge.primary')}
              </Badge>
              <Badge variant="solid" color="success" startIcon={<PlusIcon />}>
                {t('badge.success')}
              </Badge>{" "}
              <Badge variant="solid" color="error" startIcon={<PlusIcon />}>
                {t('badge.error')}
              </Badge>{" "}
              <Badge variant="solid" color="warning" startIcon={<PlusIcon />}>
                {t('badge.warning')}
              </Badge>{" "}
              <Badge variant="solid" color="info" startIcon={<PlusIcon />}>
                {t('badge.info')}
              </Badge>
              <Badge variant="solid" color="light" startIcon={<PlusIcon />}>
                {t('badge.light')}
              </Badge>
              <Badge variant="solid" color="dark" startIcon={<PlusIcon />}>
                {t('badge.dark')}
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              {t('badge.light-background-with-right')}
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="light" color="primary" endIcon={<PlusIcon />}>
                {t('badge.primary')}
              </Badge>
              <Badge variant="light" color="success" endIcon={<PlusIcon />}>
                {t('badge.success')}
              </Badge>{" "}
              <Badge variant="light" color="error" endIcon={<PlusIcon />}>
                {t('badge.error')}
              </Badge>{" "}
              <Badge variant="light" color="warning" endIcon={<PlusIcon />}>
                {t('badge.warning')}
              </Badge>{" "}
              <Badge variant="light" color="info" endIcon={<PlusIcon />}>
                {t('badge.info')}
              </Badge>
              <Badge variant="light" color="light" endIcon={<PlusIcon />}>
                {t('badge.light')}
              </Badge>
              <Badge variant="light" color="dark" endIcon={<PlusIcon />}>
                {t('badge.dark')}
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              {t('badge.solid-background-with-right')}
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="solid" color="primary" endIcon={<PlusIcon />}>
                {t('badge.primary')}
              </Badge>
              <Badge variant="solid" color="success" endIcon={<PlusIcon />}>
                {t('badge.success')}
              </Badge>{" "}
              <Badge variant="solid" color="error" endIcon={<PlusIcon />}>
                {t('badge.error')}
              </Badge>{" "}
              <Badge variant="solid" color="warning" endIcon={<PlusIcon />}>
                {t('badge.warning')}
              </Badge>{" "}
              <Badge variant="solid" color="info" endIcon={<PlusIcon />}>
                {t('badge.info')}
              </Badge>
              <Badge variant="solid" color="light" endIcon={<PlusIcon />}>
                {t('badge.light')}
              </Badge>
              <Badge variant="solid" color="dark" endIcon={<PlusIcon />}>
                {t('badge.dark')}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
