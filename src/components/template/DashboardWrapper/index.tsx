import React from "react";
import {
  language,
} from "../../../assets/icons";
import IconButtonDropdown from "../../atoms/iconDropdown";
import Search from "../../atoms/Search";
import i18n from "../../../utils/i18n/i18n";
import { useTranslation } from "react-i18next";

type Props = {
  children: React.ReactNode;
  onSearch?: (key: string) => void | null;
  defaultSearch?: string | null;
};

const DashboardWrapper: React.FC<Props> = ({
  children,
  onSearch = null,
  defaultSearch = null,
}) => {
  const { t } = useTranslation("translation", { keyPrefix: "constants" });

  const handleOption1Click = () => {
    // console.log("Option 1 clicked");
  };

  const handleOption2Click = () => {
    // console.log("Option 2 clicked");
  };

  const languages = [
    { title: "EN", onClick: handleOption1Click, value: "en" },
    { title: "KO", onClick: handleOption2Click, value: "ko" },
    { title: "JP", onClick: handleOption2Click, value: "jp" },
  ];


  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 mb-[50px] mt-[15px] ">
        <div className=" col-span-7 lg:col-span-10 ">
          {onSearch && (
            <Search
              onChange={(data: string) => {
                onSearch(data);
              }}
              placeholder={t("search") || ""}
              // @ts-ignore
              value={defaultSearch}
            />
          )}
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-around items-center header-dropdown-items">
          <IconButtonDropdown
            icon={language}
            items={languages}
            className=" w-[45px] lg:w-[50px]"
            onClick={(lang) => {
              localStorage.setItem("lang", lang?.value || "en");
              i18n.changeLanguage(lang?.value || "en");
            }}
          />
          <div className="relative">
            
      
          </div>

          <div
            className=" relative mr-2 cursor-pointer"
            onClick={() => {
             
            }}
          >
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardWrapper;
