import React from "react";
import { Button } from "../../atoms";

interface Props {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const Status: React.FC<Props> = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <>
      <div className=" flex flex-col items-center gap-10">
        <img src={icon} className=" w-28" />
        <div>
          <p className="text-center pb-2 text-primary font-bold text-2xl">
            {title}
          </p>
          <p className=" text-center text-white text-sm">{description}</p>
        </div>
        <Button label={buttonText} onClick={onClick} className="w-full" />
      </div>
    </>
  );
};

export default Status;
