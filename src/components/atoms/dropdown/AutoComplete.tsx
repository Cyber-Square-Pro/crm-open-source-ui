import React, { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import useClickOutside from "../../../hooks/outSideClick.hooks";
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
}) => {
  const {t} = useTranslation('translation', { keyPrefix: "constants" })
  const [hidden, setHidden] = useState(true);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [list, setList] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setHidden(true);
  });

  useEffect(() => {
    setList(values);
  }, [values]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const search = (key: string) => {
    let searchList: string[] = [];
    values.forEach((value) => {
      if (value.toLowerCase().includes(key.toLowerCase())) {
        searchList.push(value);
      }
    });
    setList(searchList);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {title ? (
        <div className="flex justify-between ">
          <p className={`text-[14px] ml-1 mb-2`}>{title}</p>
        </div>
      ) : (
        <div className="flex justify-between invisible pt-4">
          <p className={`text-[14px]  ml-1 mb-2`}>.</p>
        </div>
      )}

      <input className="hidden" {...register(name, { required: true })} />
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        className={`text-[${
          value ? "#000" : "#000"
        }]  border border-[#ECBE44] justify-between w-full   font-medium rounded-[10px] text-sm px-4 py-3 text-center inline-flex items-center `}
        type="button"
        onClick={() => {
          if (!isLoading) setHidden(!hidden);
        }}
      >
        {value || placeholder}
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
            {t('search')}
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
          className="py-1 max-h-48 text-sm text-[black] bg-white overflow-y-auto"
          aria-labelledby="dropdownSearchButton"
        >
          {list?.map((val, index) => (
            <li key={`${val}-${index}`} className=" ">
              <a
                onClick={() => {
                  setValue(val);
                  onChange(val);
                  setHidden(!hidden);
                }}
                className="block px-4 py-2 hover:bg-background  hover:text-white"
              >
                {val}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
