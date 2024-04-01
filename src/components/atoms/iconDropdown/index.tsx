import React, { useRef, useState } from "react";
import useClickOutside from "../../../hooks/outSideClick.hooks";

interface Props {
  icon?: string;
  content?: any;
  items: { title: string; onClick: () => void }[];
  className?: string;
  readNotifications?: () => void;
  onClick?: (val: any) => void;
}

const IconButtonDropdown: React.FC<Props> = ({
  icon,
  content = null,
  items,
  className = " ",
  readNotifications,
  onClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  return (
    <div ref={dropdownRef} className=" relative">
      <button
        className={`border ${
          isDropdownOpen
            ? " border-primary rounded-t-lg bg-background"
            : "border-transparent md:border-black"
        } px-[5px] py-[6px]`}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
          if (readNotifications) {
            readNotifications();
          }
        }}
      >
        {content ? (
          content
        ) : (
          <p className="text-white">English</p>
        )}
      </button>
      {isDropdownOpen && items?.length > 0 && (
        <div
          className={`absolute z-10 border border-primary rounded-b-lg right-0  bg-background  ${className}`}
          style={{ zIndex: 99999 }}
        >
          <div className="dropdown-item ">
            {items.map((item: any, index) => (
              <button
                key={index}
                className="dropdown-item flex w-full text-white text-left py-1 text-sm lg:text-base px-[9.5px]"
                onClick={() => {
                  if (!!onClick) {
                    onClick(item);
                    setIsDropdownOpen((s) => !s);
                  }
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IconButtonDropdown;
