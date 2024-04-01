import React from "react";
import { ErrorBoundary } from "../../../components/template";
import ForgotPasswordComponent from "./ForgotPassword";

const ForgotPassword: React.FC<{}> = ({}) => {
  return (
    <ErrorBoundary>
      <ForgotPasswordComponent />
    </ErrorBoundary>
  );
};

export default ForgotPassword;
