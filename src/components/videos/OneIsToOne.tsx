import React from "react";
import { useTranslations } from "next-intl";

export default function OneIsToOne() {
  const t = useTranslations();
  return (
    <div className="overflow-hidden rounded-lg aspect-square">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title={t('one-is-to-one.youtube-video')}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
