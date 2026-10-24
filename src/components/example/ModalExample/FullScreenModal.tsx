"use client";
import { useModal } from "@/hooks/useModal";
import ComponentCard from "../../common/ComponentCard";

import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import { useTranslations } from "next-intl";

export default function FullScreenModal() {
  const t = useTranslations();
  const {
    isOpen: isFullscreenModalOpen,
    openModal: openFullscreenModal,
    closeModal: closeFullscreenModal,
  } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeFullscreenModal();
  };
  return (
    <ComponentCard title={t('full-screen-modal.full-screen-modal')}>
      <Button size="sm" onClick={openFullscreenModal}>
        {t('full-screen-modal.open-modal')}
      </Button>
      <Modal
        isOpen={isFullscreenModalOpen}
        onClose={closeFullscreenModal}
        isFullscreen={true}
        showCloseButton={true}
      >
        <div className="fixed top-0 start-0 flex flex-col justify-between w-full h-screen p-6 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900 lg:p-10">
          <div>
            <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
              {t('full-screen-modal.modal-heading')}
            </h4>
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
              {t('full-screen-modal.lorem-ipsum-dolor-sit')}
            </p>
            <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
              {t('full-screen-modal.lorem-ipsum-dolor-sit-2')}
            </p>
            <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
              {t('full-screen-modal.lorem-ipsum-dolor-sit-3')}
            </p>
          </div>
          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeFullscreenModal}>
              {t('full-screen-modal.close')}
            </Button>
            <Button size="sm" onClick={handleSave}>
              {t('full-screen-modal.save-changes')}
            </Button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}
