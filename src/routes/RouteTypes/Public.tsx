import React, { ComponentType } from "react";
import { AuthTemplate } from "../../components/template";

interface Props {
  element: ComponentType<any>;
}

const Public: React.FC<Props> = ({
  element: Element,
}) => {
  return (
    <AuthTemplate>
      <Element />
    </AuthTemplate>
  );
};

export default Public;
