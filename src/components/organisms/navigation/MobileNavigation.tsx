import React, { useState } from "react";
import { Route } from ".";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "../../atoms";
import { mobileNavExpand } from "../../../assets/icons";
import { useNavigate, useLocation } from "react-router";

type Props = {
  children: React.ReactNode;
  title: any;
  routes: Route[];
  footer: React.ReactNode;
};

const MobileNavigation: React.FC<Props> = ({
  children,
  title,
  routes,
  footer,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="flex justify-between gap-2 bg-[#262a37c4] py-[20px] pl-[20px] pr-[15px]">
        {title}
        <IconButton
          icon={mobileNavExpand}
          label=""
          onClick={() => setOpen(true)}
          size="large"
        />
      </div>
      <div className="p-3">{children}</div>
      <Drawer
        sx={{
          height: "100%",
        }}
        anchor={"left"}
        open={open}
        onClose={() => {}}
      >
        <div
          className="w-screen h-full"
        >
          <div className="flex justify-between gap-5 bg-[#262a37c4] py-[20px] px-[20px]">
            {title}
            <IconButton
              icon={mobileNavExpand}
              label=""
              onClick={() => setOpen(false)}
              size="large"
            />
          </div>
          <div className="flex flex-col gap-5 mt-[20px] p-5">
            {routes.map((route: Route, index: number) => (
              <div
                key={route.name}
                className={
                  index < routes.length - 1
                    ? "border-b	border-[#FFFFFF] pb-[10px]"
                    : ""
                }
              >
                <IconButton
                  icon={
                    location.pathname === route.href
                      ? route.selectedIcon
                      : route.image
                  }
                  label={route.name}
                  textColor={
                    location.pathname === route.href ? "#ECBE44" : "#FFFFFF"
                  }
                  onClick={() => {
                    navigate(route.href);
                    setOpen(false);
                  }}
                  size="medium"
                  className="w-full"
                />
              </div>
            ))}
          </div>
          {footer}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNavigation;
