import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import ComponentCard from "@/components/common/ComponentCard";
import { useTranslations } from "next-intl";

export default function VideosExample() {
  const t = useTranslations();
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title={t('videos-example.video-ratio-16-9')}>
            <YouTubeEmbed videoId="dQw4w9WgXcQ" />
          </ComponentCard>
          <ComponentCard title={t('videos-example.video-ratio-4-3')}>
            <YouTubeEmbed videoId="dQw4w9WgXcQ" aspectRatio="4:3" />
          </ComponentCard>
        </div>
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title={t('videos-example.video-ratio-21-9')}>
            <YouTubeEmbed videoId="dQw4w9WgXcQ" aspectRatio="21:9" />
          </ComponentCard>
          <ComponentCard title={t('videos-example.video-ratio-1-1')}>
            <YouTubeEmbed videoId="dQw4w9WgXcQ" aspectRatio="1:1" />
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}
