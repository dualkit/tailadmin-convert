import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function ResponsiveImage() {
  const t = useTranslations();
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <Image
          src="/images/grid-image/image-01.png"
          alt={t('responsive-image.cover')}
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
          width={1054}
          height={600}
        />
      </div>
    </div>
  );
}
