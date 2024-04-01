import React from "react";
import { ErrorBoundary } from "../../../components/template";
import ResetPassword from "./ResetPassword";

const ForgotPassword: React.FC<{}> = ({}) => {
  return (
    <ErrorBoundary>
      <ResetPassword />
    </ErrorBoundary>
  );
};

export default ForgotPassword;
