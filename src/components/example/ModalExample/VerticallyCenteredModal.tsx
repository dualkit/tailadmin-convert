"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import { useModal } from "@/hooks/useModal";
import { useTranslations } from "next-intl";

export default function VerticallyCenteredModal() {
  const t = useTranslations();
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <ComponentCard title={t('vertically-centered-modal.vertically-centered-modal')}>
      <Button size="sm" onClick={openModal}>
        {t('vertically-centered-modal.open-modal')}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        showCloseButton={false}
        className="max-w-[507px] p-6 lg:p-10"
      >
        <div className="text-center">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            {t('vertically-centered-modal.all-done-success-confirmed')}
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            {t('vertically-centered-modal.lorem-ipsum-dolor-sit')}
          </p>

          <div className="flex items-center justify-center w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>
              {t('vertically-centered-modal.close')}
            </Button>
            <Button size="sm" onClick={handleSave}>
              {t('vertically-centered-modal.save-changes')}
            </Button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}
