import React, { ComponentType } from "react";
import { useNavigate } from "react-router";
import DashboardTemplate from "../../components/template/DashboardTemplate";
import { ROUTES } from "../../utils/constants/routes";
import { getAccessToken } from "../../utils/helpers/helpers";

interface Props {
  element: ComponentType<any>;
  sideBar: boolean;
}

const Private: React.FC<Props> = ({ element: Element, sideBar = false }) => {
  const token = getAccessToken();

  const navigate = useNavigate();

  if (!(token && token !== "")) {
    navigate(ROUTES.base);
  }

  if (sideBar) return <Element />;

  return (
    <DashboardTemplate>
      <Element />
    </DashboardTemplate>
  );
};

export default Private;
