import React, { useState } from "react";
import { useTranslations } from "next-intl";

const ChartTab: React.FC = () => {
  const t = useTranslations();
  const [selected, setSelected] = useState<
    "optionOne" | "optionTwo" | "optionThree"
  >("optionOne");

  const getButtonClass = (option: "optionOne" | "optionTwo" | "optionThree") =>
    selected === option
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
      <button
        onClick={() => setSelected("optionOne")}
        className={`px-3 py-2 font-medium w-full whitespace-nowrap rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionOne"
        )}`}
      >
        {t('chart-tab.monthly')}
      </button>

      <button
        onClick={() => setSelected("optionTwo")}
        className={`px-3 py-2 font-medium w-full whitespace-nowrap rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionTwo"
        )}`}
      >
        {t('chart-tab.quarterly')}
      </button>

      <button
        onClick={() => setSelected("optionThree")}
        className={`px-3 py-2 font-medium w-full whitespace-nowrap rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionThree"
        )}`}
      >
        {t('chart-tab.annually')}
      </button>
    </div>
  );
};

export default ChartTab;
