"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";
import { useTranslations } from "next-intl";

export default function TextAreaInput() {
  const t = useTranslations();
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  return (
    <ComponentCard title={t('text-area-input.textarea-input-field')}>
      <div className="space-y-6">
        {/* Default TextArea */}
        <div>
          <Label>{t('text-area-input.description')}</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

        {/* Disabled TextArea */}
        <div>
          <Label>{t('text-area-input.description')}</Label>
          <TextArea rows={6} disabled />
        </div>

        {/* Error TextArea */}
        <div>
          <Label>{t('text-area-input.description')}</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint={t('text-area-input.please-enter-a-valid')}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
