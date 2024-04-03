import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({ children }) => {

  return (
    <>
      <div className="h-full relative ">
          {children}
      </div>
    </>
  );
};

export default AuthTemplate;
