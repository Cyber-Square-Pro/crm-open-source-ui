import React from "react";
import { ClipLoader } from "react-spinners";
import "./button.css";

interface ButtonProps {
  textColor?: string;
  label: string;
  onClick?: () => void;
  underline?: boolean;
  isLoading?: boolean;
}

const TextButton: React.FC<ButtonProps> = ({
  textColor = "black",
  label,
  onClick = () => {},
  underline = false,
  isLoading = false,
}) => {
  return (
    <button
      type={"button"}
      className={`${underline ? "underline" : ""}`}
      style={{ color: textColor }}
      onClick={() => onClick()}
    >
      {" "}
      {isLoading ? (
        <ClipLoader color={"#ffffff"} size={22} />
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default TextButton;
