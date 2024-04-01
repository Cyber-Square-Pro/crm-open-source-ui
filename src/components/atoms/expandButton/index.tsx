import React from "react";

interface Buttonprops {
  children: React.ReactNode;
  hidden: boolean;
  onClick?: () => any;
  size?: string;
}
const ExpandButton = ({ hidden, onClick, children, size = "large" }: Buttonprops) => (
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    className={`font-base border px-0 text-start border-primary w-full rounded-[10px] text-sm items-center border-collapse ${size=== "small" ? "h-[35px]" : "h-[46px]"} ${
      !hidden && "rounded-b-none"
    }`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default ExpandButton;
