"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Switch from "../switch/Switch";
import { useTranslations } from "next-intl";

export default function ToggleSwitch() {
  const t = useTranslations();
  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };
  return (
    <ComponentCard title={t('toggle-switch.toggle-switch-input')}>
      <div className="flex gap-4">
        <Switch
          label={t('toggle-switch.default')}
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label={t('toggle-switch.checked')}
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label={t('toggle-switch.disabled')} disabled={true} />
      </div>{" "}
      <div className="flex gap-4">
        <Switch
          label={t('toggle-switch.default')}
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label={t('toggle-switch.checked')}
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label={t('toggle-switch.disabled')} disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
}
