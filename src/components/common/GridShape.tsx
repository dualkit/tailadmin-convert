import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function GridShape() {
  const t = useTranslations();
  return (
    <>
      <div className="absolute end-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
        <Image
          width={540}
          height={254}
          src="/images/shape/grid-01.svg"
          alt={t('grid-shape.grid')}
        />
      </div>
      <div className="absolute bottom-0 start-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
        <Image
          width={540}
          height={254}
          src="/images/shape/grid-01.svg"
          alt={t('grid-shape.grid')}
        />
      </div>
    </>
  );
}
