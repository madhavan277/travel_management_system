import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { voyage__logo } from "../../constants";

const AuthNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="text-2xl font-bold flex items-center gap-4 px-8 py-8">
      <GoChevronLeft
        className="w-8 h-8 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <img src={voyage__logo} alt="login__img" />
      <div onClick={() => navigate("/")} className="cursor-pointer">
        VOYAGE
      </div>
    </div>
  );
};

export default AuthNavbar;
