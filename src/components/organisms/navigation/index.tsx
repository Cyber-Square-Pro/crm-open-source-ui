import React from "react";
import { useNavigate, useLocation } from "react-router";
import { ROUTES } from "../../../utils/constants/routes";
import { IconButton } from "../../atoms";

export interface Route {
  name: string;
  image?: string;
  href: string;
  selectedIcon?: string;
  includes?: any;
}

type Props = {
  children: React.ReactNode;
  title: any;
  routes: Route[];
  footer: React.ReactNode;
};

const Navigation: React.FC<Props> = ({ children, title, routes, footer }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-row	h-full hideScroll">
      <div className="h-full max-w-[400px] min-w-[300px]">
        <div className="h-screen overflow-auto absolute border-r border-[#ECBE44] rounded-r-2xl	min-w-[300px] bg-[#262a37c4]">
          <div className="flex justify-center mt-[40px] ">{title}</div>
          <div className="flex flex-col px-[70px] mt-[68px] gap-12">
            {routes.map((route: Route) => (
              <React.Fragment key={route.name}>
                <IconButton
                  key={route.name}
                  icon={
                    location.pathname.includes(route.href) || location.pathname.includes(route.includes)
                      ? route.selectedIcon
                      : route.image
                  }
                  label={route.name}
                  textColor={
                    location.pathname.includes(route.href) || location.pathname.includes(route.includes)
                      ? "#ECBE44"
                      : "#FFFFFF"
                  }
                  onClick={() => {
                    if (location.pathname.includes(ROUTES.dashboard))
                    navigate(route.href);
                  }}
                  size="medium"
                  className="w-full "
                />
              </React.Fragment>
            ))}
          </div>
          {footer}
        </div>
      </div>
      <div className="w-full p-5 overflow-x-hidden hideScroll">{children}</div>
    </div>
  );
};

export default Navigation;
