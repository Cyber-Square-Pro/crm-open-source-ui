import React from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large" | "xtraLarge" | "xl";
  label?: string | any;
  icon?: string;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
}

const SizeConfig: { [key: string]: string } = {
  small: "w-[16px]",
  medium: "w-[20px]",
  large: " w-[25px] lg:w-[30px]",
  xtraLarge: " w-[30px] lg:w-[35px]",
  xl: " w-[40px] lg:w-[52px]",
};

const IconButton: React.FC<ButtonProps> = ({
  size = "medium",
  textColor = "white",
  label,
  icon,
  onClick = () => {},
  className = "justify-center",
  isLoading = false,
}) => {
  return (
    <button
      type="button"
      className={`flex items-center rounded-md gap-2 ${className} ${
        size === "small" ? " text-sm" : "text-base"
      } `}
      style={{ color: textColor }}
      onClick={() => onClick()}
    >
      {isLoading ? (
        <ClipLoader color={"#ffffff"} size={22} />
      ) : (
        <img src={icon} className={`${SizeConfig[size]}`} />
      )}

      {label ? label : null}
    </button>
  );
};

export default IconButton;
