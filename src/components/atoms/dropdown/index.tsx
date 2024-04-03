import React, { useRef, useState } from "react";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import ExpandButton from "../expandButton";
import DropdownList from "./dropdownList";
import LabelCard from "../labelCard";
import useClickOutside from "../../../hooks/outSideClick.hooks";

interface OptionProps {
  label: string;
  value: string;
  subLabel?: string;
}

interface Props {
  placeholder?: string | any;
  options: OptionProps[];
  name: string;
  control?: any;
  value?: string;
  error?: any;
  onChange(e: string): any;
  className?: string;
  size?: string;
}

export default function Dropdown({
  placeholder,
  name,
  onChange,
  options,
  value,
  error,
  className,
  size = "large"
}: Props) {
  const [hidden, setHidden] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => {
    setHidden(true);
  });

  return (
    <div ref={dropdownRef} className={`relative text-white rounded-[10px] ${className}`}>
      <ExpandButton hidden={hidden} onClick={() => setHidden((s) => !s)} size={size}>
        {!!!value ? (
          <div
            className={`h-full p-2 px-4 flex justify-between items-center bg-[#262a37c4] rounded-[10px] text-base ${
              !hidden && "rounded-b-none"
            }`}
          >
            {options?.find((val) => val.value === value)?.label || placeholder}
            {hidden ? (
              <KeyboardArrowDownOutlined />
            ) : (
              <KeyboardArrowUpOutlined />
            )}
          </div>
        ) : (
          <LabelCard
            label={placeholder}
            value={options?.find((val) => val.value === value)?.label || value}
            className={`w-full items-center text-base ${
              !hidden && "rounded-b-none"
            }`}
          />
        )}
      </ExpandButton>
      <DropdownList hidden={hidden} className="z-50">
        {options.map((val) => (
          <li key={val.value.toString()} className="py-1">
            <a
              onClick={() => {
                onChange(val.value);
                setHidden(!hidden);
              }}
              href="/"
              className="px-4 py-2 text-sm flex justify-between cursor-pointer"
            >
              {val.label}
              {!!val?.subLabel && (
                <div className="border rounded min-w-[40px] text-center">
                  {val.subLabel}
                </div>
              )}
            </a>
          </li>
        ))}
      </DropdownList>
      {error && <p className="text-[12px] text-[red]">{error?.message}</p>}
    </div>
  );
}
