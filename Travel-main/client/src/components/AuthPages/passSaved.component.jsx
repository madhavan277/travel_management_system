import React from "react";
import { useNavigate } from "react-router-dom";

//images
import pass__saved__img from "../../assets/passsavedpic.svg";
import check__in from "../../assets/verified.gif";

function PassSavedPageBody() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="w-full text-center">
        <div className="w-24 mx-auto">
          <img src={check__in} alt="done" className="w-full" />
        </div>

        <div className="text-3xl font-bold mt-2 mb-3">
          Your password is saved successfully
        </div>

        <div
          className="text-md underline underline-offset-4 font-medium cursor-pointer text-vto-400 hover:text-vto-500"
          onClick={() => Navigate("/signin")}
        >
          Now log back in and say HELLO! to new adventures
        </div>

        <div className="mt-2 w-96 mx-auto">
          <img src={pass__saved__img} alt="login__img" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default PassSavedPageBody;
