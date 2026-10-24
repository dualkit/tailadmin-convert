import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Alert from "@/components/ui/alert/Alert";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("alerts.title"), description: t("alerts.description") };
}

export default function Alerts() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle={t('page-title.alerts')} />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title={t('alerts.success-alert')}>
          <Alert
            variant="success"
            title={t('alerts.success-message')}
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="success"
            title={t('alerts.success-message')}
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>
        <ComponentCard title={t('alerts.warning-alert')}>
          <Alert
            variant="warning"
            title={t('alerts.warning-message')}
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="warning"
            title={t('alerts.warning-message')}
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title={t('alerts.error-alert')}>
          <Alert
            variant="error"
            title={t('alerts.error-message')}
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="error"
            title={t('alerts.error-message')}
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title={t('alerts.info-alert')}>
          <Alert
            variant="info"
            title={t('alerts.info-message')}
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="info"
            title={t('alerts.info-message')}
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>
      </div>
    </div>
  );
}
