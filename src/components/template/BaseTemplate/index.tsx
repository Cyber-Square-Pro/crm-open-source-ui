import React, { ReactElement } from "react";

type Props = {
  children: ReactElement<any>[];
};

export default function BaseTemplate({ children }: Props) {
  return (
    <div
      className={"bg-white w-screen h-screen overflow-y-scroll hideScroll"}
    >
      {" "}
      {children.map((child) => {
        return React.cloneElement(child, {
          className: "my-class",
        });
      })}
    </div>
  );
}
