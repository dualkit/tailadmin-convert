import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultModal from "@/components/example/ModalExample/DefaultModal";
import FormInModal from "@/components/example/ModalExample/FormInModal";
import FullScreenModal from "@/components/example/ModalExample/FullScreenModal";
import ModalBasedAlerts from "@/components/example/ModalExample/ModalBasedAlerts";
import VerticallyCenteredModal from "@/components/example/ModalExample/VerticallyCenteredModal";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("modals.title"), description: t("modals.description") };
}

export default function Modals() {
  const t = useTranslations();
  return (
    <div>
      <PageBreadcrumb pageTitle={t('page-title.modals')} />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
        <DefaultModal />
        <VerticallyCenteredModal />
        <FormInModal />
        <FullScreenModal />
        <ModalBasedAlerts />
      </div>
    </div>
  );
}
