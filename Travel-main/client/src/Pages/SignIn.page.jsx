import React from "react";
import AuthNavbar from "../components/AuthPages/AuthNavbar";

//components
import SignInPageBody from "../components/AuthPages/signIn.component";

function SignInPage() {
  return (
    <>
      <AuthNavbar />
      <SignInPageBody />
    </>
  );
}

export default SignInPage;
