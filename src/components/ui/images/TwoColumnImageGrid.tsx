import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function TwoColumnImageGrid() {
  const t = useTranslations();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <Image
          src="/images/grid-image/image-02.png"
          alt={t('two-column-image-grid.grid')}
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
          width={517}
          height={295}
        />
      </div>

      <div>
        <Image
          src="/images/grid-image/image-03.png"
          alt={t('two-column-image-grid.grid')}
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
          width={517}
          height={295}
        />
      </div>
    </div>
  );
}
