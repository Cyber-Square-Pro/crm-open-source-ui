import React from "react";
import { ErrorBoundary } from "../../../components/template";
import SignUpComponent from "./SignUp";

const SignUp: React.FC<{}> = ({}) => {
  return (
    <ErrorBoundary>
      <SignUpComponent />
    </ErrorBoundary>
  );
};

export default SignUp;
