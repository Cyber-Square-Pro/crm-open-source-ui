import { useTranslation } from "react-i18next";
import IconButtonDropdown from "../../atoms/iconDropdown";
import { language } from "../../../assets/icons";
import { useContext } from "react";
import { MobileContext } from "../../../App";

export const AuthLanguage = ({ className = "" }) => {
  const { i18n } = useTranslation("translation");
  const {isMobile} = useContext(MobileContext);

  const languages = [
    { title: "English", onClick: () => {}, value: "en" },
    { title: "Korean", onClick: () => {}, value: "ko" },
    { title: "Malayalam", onClick: () => {}, value: "jp" },
  ];
  return (
    <div
      className={
        !!className
          ? className
          : `absolute right-5 lg:right-10 z-50 ${isMobile ? "top-24" : "top-10" }`
      }
    >
      <IconButtonDropdown
        icon={language}
        items={languages}
        className=" w-[45px] lg:w-[50px]"
        onClick={(lang) => {
          localStorage.setItem("lang", lang?.value || "en");
          i18n.changeLanguage(lang?.value || "en");
        }}
      />
    </div>
  );
};
