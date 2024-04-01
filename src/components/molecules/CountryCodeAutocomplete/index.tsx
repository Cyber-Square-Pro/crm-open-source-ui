import React, { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import useClickOutside from "../../../hooks/outSideClick.hooks";
import { COUNTRY_ICONS } from "../../../utils/constants/constant";
import { useTranslation } from "react-i18next";

interface Props {
  placeholder: string;
  name: string;
  register: any;
  error: any;
  onChange: (data: string) => void;
  values: any[];
  title?: string;
  isLoading?: boolean;
  defaultValue?: string;
  className?: string;
}

const AutoComplete: React.FC<Props> = ({
  placeholder,
  name,
  register,
  error,
  onChange,
  values,
  title,
  isLoading,
  defaultValue,
  className = "w-40"
}) => {
  const {t} = useTranslation("translation", { keyPrefix: "constants"});
  const [hidden, setHidden] = useState(true);
  const [value, setValue] = useState<string | undefined>(
    defaultValue || undefined
  );
  const [list, setList] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setHidden(true);
  });

  useEffect(() => {
    setList(values);
  }, [values]);

  const search = (key: string) => {
    key = key?.replace("+", "");
    let list: string[] = [];
    values.forEach((value) => {
      if (value.phone.toLowerCase().startsWith(key.toLowerCase())) {
        list.push(value);
      }
    });
    setList(list);
  };

  return (
    <div className={`relative w-40 ${className}`} ref={dropdownRef}>
      <div className="flex  ">
        <p className={`text-[14px]  ml-1 mb-2`}>{title ? title : " "}</p>
      </div>

      <input className="hidden" {...register(name, { required: true })} />
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        className={`text-[${
          value ? "#000" : "#000"
        }]  border border-[#ECBE44] justify-between w-full h-[46px] font-medium rounded-[10px] text-sm px-1 md:px-4 py-3 text-center inline-flex items-center `}
        type="button"
        onClick={() => {
          if (!isLoading) setHidden(!hidden);
        }}
      >
        {value ? `+${value}` : placeholder}
        {isLoading ? (
          <ClipLoader color={"#ECBE44"} size={22} />
        ) : (
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </button>

      {error ? (
        <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
      ) : (
        <p className=" invisible">a</p>
      )}

      <div
        id="dropdown"
        className={`z-50 ${
          hidden && "hidden"
        } bg-white  border border-[#ECBE44] divide-y absolute top-[75px] divide-[#ECBE44] rounded  w-full `}
      >
        <div className="p-3">
          <label htmlFor="input-group-search" className="sr-only bg-white">
          {t("search")}
          </label>
          <div className="relative bg-white">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              onChange={(e) => search(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-[white] border border-[#ECBE44] rounded-lg bg-[#1C1F2C] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={t("search") || ""}
            />
          </div>
        </div>
        <ul
          className="py-1  h-32 text-sm text-[black] bg-white overflow-y-auto"
          aria-labelledby="dropdownSearchButton"
        >
          {list?.map((item: any, index) => (
            <li key={index} className=" ">
              <a
                onClick={() => {
                  setValue(item.phone);
                  onChange(item.phone);
                  setHidden(!hidden);
                }}
                className="flex gap-3 px-4 py-2 hover:bg-background  hover:text-white"
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`${COUNTRY_ICONS}${item.code.toLowerCase()}.png`}
                  srcSet={`${COUNTRY_ICONS}${item.code.toLowerCase()}.png 2x`}
                  alt="COUNTRY_ICONS"
                />
                +{item?.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
