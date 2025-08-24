import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import ForgotPassPage from "./Pages/ForgotPass.page";

import HomePage from "./Pages/Home.page";
import ResetPassPage from "./Pages/ResetPass.page";
import SignInPage from "./Pages/SignIn.page";
import SignUpPage from "./Pages/SignUp.page";
import VerificationPage from "./Pages/Verification.page";
import PackagePage from "./Pages/Package.page";
import { getUser } from "./redux/Slices/Extra actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/password/forgot" element={<ForgotPassPage />} />
        <Route path="/password/verify" element={<VerificationPage />} />
        <Route path="/password/reset/:token" element={<ResetPassPage />} />
        <Route path="/package/:id" element={<PackagePage />} />

        {/* Logged in user Routes  */}
        <Route element={<ProtectedRoute />}></Route>

        {/* 404 Error Page  */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
