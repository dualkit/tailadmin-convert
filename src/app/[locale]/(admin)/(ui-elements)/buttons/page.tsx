import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/icons";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("buttons.title"), description: t("buttons.description") };
}

export default function Buttons() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle={t('page-title.buttons')} />
      <div className="space-y-5 sm:space-y-6">
        {/* Primary Button */}
        <ComponentCard title={t('buttons.primary-button')}>
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              {t('buttons.button-text')}
            </Button>
            <Button size="md" variant="primary">
              {t('buttons.button-text')}
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title={t('buttons.primary-button-with-left')}>
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" startIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
            <Button size="md" variant="primary" startIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Primary Button with Start Icon */}
        <ComponentCard title={t('buttons.primary-button-with-right')}>
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" endIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
            <Button size="md" variant="primary" endIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title={t('buttons.secondary-button')}>
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              {t('buttons.button-text')}
            </Button>
            <Button size="md" variant="outline">
              {t('buttons.button-text')}
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title={t('buttons.outline-button-with-left')}>
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
            <Button size="md" variant="outline" startIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Outline Button with Start Icon */}
        <ComponentCard title={t('buttons.outline-button-with-right')}>
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" endIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
            <Button size="md" variant="outline" endIcon={<BoxIcon />}>
              {t('buttons.button-text')}
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
