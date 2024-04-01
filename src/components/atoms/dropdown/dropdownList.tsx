import React from "react";

interface Props {
  hidden: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function DropdownList({ hidden = false, children = "", className }: Props) {
  return (
    <div
      id="dropdown"
      className={`z-10 ${
        hidden && "hidden"
      } w-full absolute bg-[#262a37c4] rounded-b-xl ${className}`}
    >
      <ul
        aria-labelledby="dropdownDefaultButton"
        className="divide-y bg-[#1C1F2C] divide-gray-100 border border-primary border-t-0 rounded-b-xl shadow w-full border-collapse"
      >
        {children}
      </ul>
    </div>
  );
}
