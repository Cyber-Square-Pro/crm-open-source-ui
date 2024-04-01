import React from "react";

interface IProps {
  error: any;
  children?: React.ReactNode;
}

export default function ErrorInput({ error, children }: IProps) {
  return (
    <div>
      {children}
      <ErrorField error={error} />
    </div>
  );
}

export function ErrorField({ error }: IProps) {
  return error ? (
    <span className="text-red-600 text-[12px]">{error.message}</span>
  ) : null;
}
