"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { useModal } from "@/hooks/useModal";
import { useTranslations } from "next-intl";

export default function FormInModal() {
  const t = useTranslations();
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <ComponentCard title={t('form-in-modal.form-in-modal')}>
      <Button size="sm" onClick={openModal}>
        {t('form-in-modal.open-modal')}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[584px] p-5 lg:p-10"
      >
        <form className="">
          <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
            {t('form-in-modal.personal-information')}
          </h4>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="col-span-1">
              <Label>{t('form-in-modal.first-name')}</Label>
              <Input type="text" placeholder={t('form-in-modal.emirhan')} />
            </div>

            <div className="col-span-1">
              <Label>{t('form-in-modal.last-name')}</Label>
              <Input type="text" placeholder={t('form-in-modal.boruch')} />
            </div>

            <div className="col-span-1">
              <Label>{t('form-in-modal.last-name')}</Label>
              <Input type="email" placeholder={t('form-in-modal.emirhanboruch55-gmail-com')} />
            </div>

            <div className="col-span-1">
              <Label>{t('form-in-modal.phone')}</Label>
              <div dir="ltr">
                <Input type="text" placeholder="+09 363 398 46" />
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <Label>{t('form-in-modal.bio')}</Label>
              <Input type="text" placeholder={t('form-in-modal.team-manager')} />
            </div>
          </div>

          <div className="flex items-center justify-end w-full gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={closeModal}>
              {t('form-in-modal.close')}
            </Button>
            <Button size="sm" onClick={handleSave}>
              {t('form-in-modal.save-changes')}
            </Button>
          </div>
        </form>
      </Modal>
    </ComponentCard>
  );
}
