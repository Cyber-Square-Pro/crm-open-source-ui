import React from "react";
import { ErrorBoundary } from "../../../components/template";
import ForgotPasswordComponent from "./ForgotPassword";

const ForgotPassword: React.FC<any> = () => {
  return (
    <ErrorBoundary>
      <ForgotPasswordComponent />
    </ErrorBoundary>
  );
};

export default ForgotPassword;
