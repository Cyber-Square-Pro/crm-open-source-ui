import React from "react";
import { ErrorBoundary } from "../../../components/template";
import LoginComponent from "./Login";

const Login: React.FC<any> = () => {
  return (
    <ErrorBoundary>
      <LoginComponent />
    </ErrorBoundary>
  );
};

export default Login;
