import React from "react";

interface Props {
  children: React.ReactNode;
  header: string;
  description?: string | undefined | null;
  handler?: React.ReactNode;
}

export default function PageWrapper(props: Props) {
  const { children, header, handler, description = null } = props;

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-primary text-[32px] font-bold tracking-wide">
          {header}
        </p>
        {handler}
      </div>
      <p className="text-primary text-[16px] tracking-wide">
        {description ?? ""}
      </p>
      <div className="mt-[30px]">{children}</div>
    </div>
  );
}
