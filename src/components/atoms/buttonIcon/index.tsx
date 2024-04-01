import React from "react";

interface Props {
  icon: React.ReactElement;
  onClick: () => void;
}

export default function ButtonIcon({ icon, onClick }: Props) {
  return (
    <div className="text-black cursor-pointer rounded-[10px]" onClick={onClick}>
      {icon}
    </div>
  );
}
