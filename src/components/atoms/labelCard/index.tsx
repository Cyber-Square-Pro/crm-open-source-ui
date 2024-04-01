import React from "react";

interface Props {
  label: string;
  value?: string;
  icon?: any;
  className?: string;
}

export default function LabelCard({ label, value, icon, className }: Props) {
  return (
    <div
      className={`flex gap-4 border rounded-[10px] border-primary w-full h-[46px] ${className}`}
    >
      <div className=" h-full border-r border-primary rounded-l-[10px] p-2.5 flex items-center justify-center gap-1 bg-[#262a37c4] w-24 md:w-[145px] text-white">
        {icon}
        {label}
      </div>
      <div className="text-sm p-2.5 rounded-r-[10px] flex items-center text-white">
        {value}
      </div>
    </div>
  );
}
