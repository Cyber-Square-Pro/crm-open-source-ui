import React from "react";

interface IconProp {
  image: string;
  onPopup(): void;
  className?: string;
}

const PopupIcon: React.FC<IconProp> = ({
  image,
  onPopup,
  className,
}: IconProp) => {
  return (
    <div
      className={`bg-primary min-h-10 max-h-[46px] min-w-10 w-11 rounded-[10px] p-2 flex items-center justify-center ${className} cursor-pointer`}
      onClick={onPopup}
    >
      <img src={image} alt={"image icon"} className="w-6 h-6" />
    </div>
  );
};

export default PopupIcon;
