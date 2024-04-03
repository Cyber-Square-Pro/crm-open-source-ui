import { Routes as DomRoutes, Route } from "react-router-dom";
import Public from "./RouteTypes/Public";
import Private from "./RouteTypes/Private";
import {
  ForgotPassword,
  Login,
  SignUp,
  ResetPassword,
} from "../screens";
import { ROUTES } from "../utils/constants/routes";
import { RouteDataType } from "./types";
import { GlobalDialog } from "../components/organisms";
import { BaseTemplate } from "../components/template";

export const RoutesData: { [key: string]: RouteDataType } = {
  base: {
    path: ROUTES.base,
    component: Login,
    isPrivate: false,
  },
  signUp: {
    path: ROUTES.signUp,
    component: SignUp,
    isPrivate: false,
  },
  forgotPassword: {
    path: ROUTES.forgotPassword,
    component: ForgotPassword,
    isPrivate: false,
  },
  resetPassword: {
    path: ROUTES.resetPassword,
    component: ResetPassword,
    isPrivate: false,
  },
};

export default function WebRoutes() {
  return (
    <>
      <BaseTemplate key={"any"}>
        <GlobalDialog key={"GlobalDialog"} />
        <DomRoutes key={"DomRoutes"}>
          {Object.keys(RoutesData).map((route, index) => {
            let item: RouteDataType = RoutesData[route];
            return (
              <Route
                key={`web-route-${item.path}`}
                path={item.path}
                element={
                  item.isPrivate ? (
                    <Private
                      element={item.component}
                      sideBar={!!item?.sidebarDisable}
                    />
                  ) : (
                    <Public
                      element={item.component}
                    />
                  )
                }
              />
            );
          })}
        </DomRoutes>
      </BaseTemplate>
    </>
  );
}
