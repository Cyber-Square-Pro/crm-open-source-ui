import React, { useContext } from "react";
import { MobileContext } from "../../../App";
import { AuthLanguage } from "../../molecules/AuthLanguage/authLanguage";

type Props = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({ children }) => {
  const value = React.useContext(MobileContext);
  const {isMobile} = useContext(MobileContext);

  return (
    <>
      <div className="h-full relative ">
        {value.isMobile && (
          <div className="absolute top-0 w-full bg-[#262a37c4] py-[20px] pl-[20px]">
            <div
              className="flex w-full justify-between items-center relative"
              style={{ zIndex: 9999 }}
            >
              
            </div>
          </div>
        )}
        {!value.isMobile && 
          <div className={`absolute left-5 lg:left-10 ${isMobile ? "top-24" : "top-10"}`}> </div>
        }
        {!value.isMobile && (
            <AuthLanguage />
        )}
        <div className="px-[20px]  max-w-lg mx-auto h-full relative z-50">
          {value.isMobile && <AuthLanguage />}
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthTemplate;
