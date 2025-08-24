import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SignUpEmailFragment from "./SignUp Fragments/signUpEmail.fragment";
import SignUpMobileFragment from "./SignUp Fragments/signUpMobile.fragment";

import login__img from "../../assets/Journey-cuate.svg";
import google__logo from "../../assets/Google.svg";
import insta__logo from "../../assets/Instagram.svg";
import fb__logo from "../../assets/Facebook.svg";
import tick__icon from "../../assets/tickmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/Slices/Extra actions/userActions";
import { clearErrors } from "../../redux/Slices/entities/userSlice";
import { toast } from "react-toastify";

function SignUpPageBody() {
  const [active, setActive] = useState("EmailFragment");
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setData((prev) => ({ ...prev, [name]: value, phone: "" }));
    }
    if (name === "phone") {
      setData((prev) => ({ ...prev, [name]: value, email: "" }));
    }
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    const { fname, lname, email, password, cpassword, phone } = data;
    e.preventDefault();
    if (password !== cpassword) {
      return toast.error("Password doesnot match");
    }
    const fullName = `${fname} ${lname}`;
    dispatch(registerUser({ name: fullName, email, password, phone }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      toast.success("Sucessfully logged in");
      navigate("/#home");
    }
  }, [isAuthenticated, navigate, error, dispatch]);

  return (
    <>
      <div
        style={{ backgroundColor: "#CFF5F5" }}
        className="w-3/4 rounded drop-shadow-lg mx-auto my-auto"
      >
        <div className="my-6 rounded-lg">
          <div className="text-black my-2 flex justify-center items-center">
            <div className="w-full px-12 bg-gray-50 ">
              <div className="mb-12 mt-8">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
              </div>

              <div className="flex text-center">
                <div
                  className={`w-full border-b-2 py-2 mx-2 cursor-pointer font-semibold text-gray-600 hover:text-vto-300 ${
                    active === "EmailFragment" && "text-vto-400 border-vto-400"
                  }`}
                  onClick={() => setActive("EmailFragment")}
                >
                  EMAIL
                </div>
                <div
                  className={`w-full border-b-2 py-2 mx-2 cursor-pointer font-semibold text-gray-600 hover:text-vto-300 focus:text-vto-400 ${
                    active === "MobileFragment" && "text-vto-400 border-vto-400"
                  }`}
                  onClick={() => setActive("MobileFragment")}
                >
                  MOBILE
                </div>
              </div>

              {active === "EmailFragment" && (
                <SignUpEmailFragment
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  data={data}
                />
              )}
              {active === "MobileFragment" && (
                <SignUpMobileFragment
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  data={data}
                />
              )}

              <div className="my-8 flex items-center justify-between gap-2">
                <hr className="w-1/3" />
                <div>or Continue with</div>
                <hr className="w-1/3" />
              </div>

              <div className="mt-8 text-vto-400">
                <div className="cursor-pointer hover:bg-vto-50 w-full outline outline-1 outline-vto-100 px-3 py-2 rounded text-center flex items-center justify-center gap-4">
                  <img src={google__logo} alt="login__img" />
                  Google
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="cursor-pointer hover:bg-vto-50 w-full outline outline-1 outline-vto-100 px-3 py-2 rounded text-center flex items-center justify-center gap-3">
                    <div className="w-11 flex items-center">
                      <img src={insta__logo} alt="login__img w-full" />
                    </div>
                    Instagram
                  </div>
                  <div className="cursor-pointer hover:bg-vto-50 w-full outline outline-1 outline-vto-100 px-3 py-2 rounded text-center flex items-center justify-center gap-3">
                    <div className="w-11 flex items-center">
                      <img src={fb__logo} alt="login__img w-full" />
                    </div>
                    Facebook
                  </div>
                </div>
                <div
                  className="mt-2 cursor-pointer hover:bg-vto-50 w-full outline outline-1 outline-vto-100 px-3 py-2 rounded text-center flex items-center justify-center gap-4"
                  onClick={() => navigate("/signin")}
                >
                  Already have an account ? Sign In
                </div>
              </div>

              <div className="mb-8 text-xs text-center mt-2 text-gray-500">
                By signing up, you agree to Voyage's Terms of Use and Privacy
                Policy.
              </div>
            </div>

            <div className="w-full h-full px-12">
              <div className=" w-full mt-16 flex items-center justify-center">
                <img src={login__img} alt="login__img" />
              </div>

              <div className="my-4 w-3/4 mx-auto">
                <span className="text-xl">
                  Sign in to to unlock more benefits!
                </span>

                <div className="flex items-center gap-2 mt-4">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>Best Price Guarantee on bookings</span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>Save money on every trip</span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>Track your trip expenses</span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>Get a chance to connect with travellers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPageBody;
