"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Input from "../input/InputField";
import Label from "../Label";
import { useTranslations } from "next-intl";

export default function InputStates() {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  // Simulate a validation check
  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  return (
    <ComponentCard
      title={t('input-states.input-states')}
      desc={t('input-states.description')}
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Error Input */}
        <div>
          <Label>{t('input-states.email')}</Label>
          <Input
            type="email"
            defaultValue={email}
            error={error}
            onChange={handleEmailChange}
            placeholder={t('input-states.enter-your-email')}
            hint={error ? t('input-states.this-is-an-invalid-email') : ""}
          />
        </div>

        {/* Success Input */}
        <div>
          <Label>{t('input-states.email')}</Label>
          <Input
            type="email"
            defaultValue={email}
            success={!error}
            onChange={handleEmailChange}
            placeholder={t('input-states.enter-your-email')}
            hint={!error ? t('input-states.valid-email') : ""}
          />
        </div>

        {/* Disabled Input */}
        <div>
          <Label>{t('input-states.email')}</Label>
          <Input
            type="text"
            defaultValue="disabled@example.com"
            disabled={true}
            placeholder={t('input-states.disabled-email')}
            hint={t('input-states.this-field-is-disabled')}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
