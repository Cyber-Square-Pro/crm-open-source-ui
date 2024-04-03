import { TFunction } from "i18next";
import React from "react";
import { MobileContext } from "../../../App";
import { ROUTES } from "../../../utils/constants/routes";
import { IconButton } from "../../atoms";
import Navigation, { Route } from "../../organisms/navigation";
import MobileNavigation from "../../organisms/navigation/MobileNavigation";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import {
  authAccessToken,
  authRefreshToken,
} from "../../../utils/constants/constant";
import { useNavigate } from "react-router";
import { logout } from "../../../assets/icons";

type Props = {
  children: React.ReactNode;
};

const routes = (t: TFunction): Route[] => {
  return [
    {
      href: ROUTES.dashboard,
      name: t("myNft"),
    },
    {
      href: ROUTES.profile,
      name: t("profile"),
    },
  ];
};

const Footer: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const navigate = useNavigate();

  const {t} = useTranslation('translation', {
    keyPrefix: "common"
  })

  return (
    <div className="absolute w-full bottom-[20px]">
      <div
        className={`flex flex-col items-center gap-5 ${isMobile ? "justify-center" : "px-[80px]"} w-full`}
      >
       
        <IconButton
          icon={logout}
          label={t('signOut') || ""}
          onClick={() => {
            Cookies.remove(authAccessToken);
            Cookies.remove(authRefreshToken);
            navigate(ROUTES.base);
          }}
          size="small"
          textColor={"#ECBE44"}
        />
      </div>
    </div>
  );
};

const DashboardTemplate: React.FC<Props> = ({ children }) => {
  const value = React.useContext(MobileContext);

  const { t } = useTranslation("translation", {
    keyPrefix: "navigation",
  });
  const navigate = useNavigate();

  return (
    <div className="h-full">
      {value.isMobile ? (
        <MobileNavigation
          footer={<Footer isMobile={value.isMobile} />}
          routes={routes(t)}
          title={
            <img
              alt="nav"
              src=""
              className="cursor-pointer w-[120px] h-[35px] md:w-[180px] md:h-[45px]"
              onClick={() => navigate(ROUTES.dashboard)}
            ></img>
          }
        >
          {" "}
          {children}
        </MobileNavigation>
      ) : (
        <Navigation
          footer={<Footer isMobile={value.isMobile} />}
          routes={routes(t)}
          title={
            <img
              alt="nav"
              src=""
              className="cursor-pointer w-[120px] h-[35px] md:w-[180px] md:h-[45px]"
              onClick={() => navigate(ROUTES.dashboard)}
            ></img>
          }
        >
          {children}
          
        </Navigation>
      )}
    </div>
  );
};

export default DashboardTemplate;
