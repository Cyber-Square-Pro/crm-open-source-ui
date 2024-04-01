import React from "react";
import "./button.css";
import { ClipLoader } from "react-spinners";

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  backgroundColor = "#0000FF",
  textColor = "black",
  label,
  type = "button",
  onClick = () => {},
  className,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`storybook-button--${size} rounded-md ${className} ${
        disabled && "cursor-not-allowed"
      }`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={() => {
        onClick();
      }}
      disabled={disabled || isLoading}
    >
      <div className={`flex flex-row justify-center items-center gap-2 ${disabled ? "text-[#646464]" : "" }`}>
        {isLoading ? <ClipLoader color={"#ffffff"} size={22} /> : null}
        <span>{label}</span>
      </div>
    </button>
  );
};

export default Button;
