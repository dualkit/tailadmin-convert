"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";
import { ChevronDownIcon } from "@/icons";
import { useTranslations } from "next-intl";

export default function SelectInputs() {
  const t = useTranslations();
  const options = [
    { value: "marketing", label: t('select-inputs.options.marketing') },
    { value: "template", label: t('select-inputs.options.template') },
    { value: "development", label: t('select-inputs.options.development') },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const multiOptions = [
    { value: "1", text: t('select-inputs.option', { number: 1 }), selected: false },
    { value: "2", text: t('select-inputs.option', { number: 2 }), selected: false },
    { value: "3", text: t('select-inputs.option', { number: 3 }), selected: false },
    { value: "4", text: t('select-inputs.option', { number: 4 }), selected: false },
    { value: "5", text: t('select-inputs.option', { number: 5 }), selected: false },
  ];

  return (
    <ComponentCard title={t('select-inputs.select-inputs')}>
      <div className="space-y-6">
        <div>
          <Label>{t('select-inputs.select-input')}</Label>
         <div className="relative">
           <Select
            options={options}
            placeholder={t('select-inputs.select-option')}
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
          <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none end-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon/>
            </span>
         </div>
        </div>
        <div className="relative">
          <MultiSelect
            label={t('select-inputs.multiple-select-options')}
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            {t('select-inputs.selected-values', { values: selectedValues.join(", ") })}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
