import React from "react";
import { useTranslation } from "react-i18next";

export default function ComingSoon() {
  const { t } = useTranslation("translation");

  return (
    <div className="w-[98vw] h-[98vh] flex justify-center items-center">
      <span className="text-white text-[32px] md:text-[40px] font-bold">
        {t("constants.comingSoon")}
      </span>
    </div>
  );
}
