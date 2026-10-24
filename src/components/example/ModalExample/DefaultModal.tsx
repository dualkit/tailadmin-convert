"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";

import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import { useModal } from "@/hooks/useModal";
import { useTranslations } from "next-intl";

export default function DefaultModal() {
  const t = useTranslations();
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <div>
      <ComponentCard title={t('default-modal.default-modal')}>
        <Button size="sm" onClick={openModal}>
          {t('default-modal.open-modal')}
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[600px] p-5 lg:p-10"
        >
          <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
            {t('default-modal.modal-heading')}
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            {t('default-modal.lorem-ipsum-dolor-sit')}
          </p>
          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {t('default-modal.lorem-ipsum-dolor-sit-2')}
          </p>
          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>
              {t('default-modal.close')}
            </Button>
            <Button size="sm" onClick={handleSave}>
              {t('default-modal.save-changes')}
            </Button>
          </div>
        </Modal>
      </ComponentCard>
    </div>
  );
}
