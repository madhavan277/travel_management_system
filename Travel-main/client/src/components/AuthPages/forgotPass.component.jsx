import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../../redux/Slices/entities/userSlice";
import { forgotPassword } from "../../redux/Slices/Extra actions/userActions";

//fragments
import ForgotPassEmailFragments from "./ForgotPass Fragments/forgotPassEmail.fragment";
import ForgotPassMobileFragments from "./ForgotPass Fragments/forgotPassMobile.fragment";
import Loader from "../Loader/Loader";

//images
import login__img from "../../assets/forgotpasspic.svg";
import { clearMessage } from "../../redux/Slices/entities/forgotPasswordSlice";

function ForgotPassPageBody() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    phone: "",
  });
  const [active, setActive] = useState("EmailFragment");
  const navigate = useNavigate();
  const { error, loading, emailMsg, otpMsg, otp } = useSelector(
    (state) => state.forgotPass
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setData((prev) => ({ ...prev, [name]: value, phone: "" }));
    } else {
      setData((prev) => ({ ...prev, [name]: value, email: "" }));
    }
  };

  const handleSubmit = (e) => {
    const { email, phone } = data;
    e.preventDefault();
    if (phone) {
      dispatch(forgotPassword({ phone }));
    } else {
      dispatch(forgotPassword({ email }));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (emailMsg) {
      toast.success(emailMsg);
      dispatch(clearMessage());
      navigate("/signin");
    }
    if (otpMsg) {
      toast.success(otpMsg);
      dispatch(clearMessage());
      navigate(`/password/verify`);
    }
  }, [otpMsg, emailMsg, navigate, error, dispatch, otp]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{ backgroundColor: "#CFF5F5" }}
          className="w-3/4 rounded drop-shadow-lg mx-auto my-auto"
        >
          <div className="my-6 rounded-lg">
            <div className="text-black my-2 flex justify-center items-center">
              <div className="w-full p-12 bg-gray-50 h-full">
                <div className="my-4">
                  <span
                    className="cursor-pointer hover:text-vto-500 text-vto-400 text-sm font-semibold"
                    onClick={() => navigate("/signin")}
                  >
                    Back to login
                  </span>
                </div>

                <div>
                  <div className="flex text-center">
                    <div
                      className={`w-full border-b-2 py-2 mx-2 cursor-pointer font-semibold text-gray-600 hover:text-vto-300 ${
                        active === "EmailFragment" &&
                        "text-vto-400 border-vto-400"
                      }`}
                      onClick={() => setActive("EmailFragment")}
                    >
                      EMAIL
                    </div>
                    <div
                      className={`w-full border-b-2 py-2 mx-2 cursor-pointer font-semibold text-gray-600 hover:text-vto-300 focus:text-vto-400 ${
                        active === "MobileFragment" &&
                        "text-vto-400 border-vto-400"
                      }`}
                      onClick={() => setActive("MobileFragment")}
                    >
                      MOBILE
                    </div>
                  </div>

                  <div className="mb-2 mt-8">
                    <h1 className="text-2xl font-semibold">Forgot Password?</h1>
                  </div>

                  {active === "EmailFragment" && (
                    <ForgotPassEmailFragments
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      email={data.email}
                    />
                  )}
                  {active === "MobileFragment" && (
                    <ForgotPassMobileFragments
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      phone={data.phone}
                    />
                  )}
                </div>
              </div>

              <div className="w-full h-full px-12">
                <div className=" w-full mt-16 flex items-center justify-center">
                  <img src={login__img} alt="login__img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPassPageBody;
