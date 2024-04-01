import React, { ComponentType } from "react";
import { AuthTemplate } from "../../components/template";

interface Props {
  element: ComponentType<any>;
  isMonkeysRemove?: boolean;
}

const Public: React.FC<Props> = ({
  element: Element,
  isMonkeysRemove = false,
}) => {
  if (isMonkeysRemove) {
    return <Element />;
  } else {
    return (
      <AuthTemplate>
        <Element />
      </AuthTemplate>
    );
  }
};

export default Public;
