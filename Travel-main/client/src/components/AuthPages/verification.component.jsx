import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//images
import login__img from "../../assets/forgotpasspic.svg";
import {
  clearErrors,
  clearMessage,
} from "../../redux/Slices/entities/forgotPasswordSlice";
import { verifyOTP } from "../../redux/Slices/Extra actions/userActions";

function VerificationPageBody() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    error,
    success,
    otp: userOtp,
  } = useSelector((state) => state.forgotPass);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const USER_OTP = otp.join("");
    if (USER_OTP.length !== 4) return;
    dispatch(verifyOTP({ otp: USER_OTP }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      Navigate(`/password/reset/${userOtp}`);
      dispatch(clearMessage());
    }
  }, [Navigate, error, otp, success, dispatch, userOtp]);

  return (
    <>
      <div
        style={{ backgroundColor: "#CFF5F5" }}
        className="w-3/4 rounded drop-shadow-lg mx-auto my-auto"
      >
        <div className="my-6 rounded-lg">
          <div className="text-black my-2 flex justify-center items-center">
            <div className="w-full py-12 px-12 bg-gray-50 h-full">
              <div className="my-4">
                <span
                  className="cursor-pointer hover:text-vto-500 text-vto-400 text-sm font-semibold"
                  onClick={() => Navigate("/signin")}
                >
                  Back to login
                </span>
              </div>

              <div className="mb-1 mt-2">
                <h1 className="text-2xl font-semibold">Verification</h1>
              </div>

              <div className="text-sm text-gray-500">
                Please validate the verification code we sent you by message.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mt-12">
                  <div className="mb-4 text-center">
                    <div className="mb-4 text-xl font-semibold">
                      Enter 4 digit OTP here
                    </div>
                    {otp.map((data, index) => {
                      return (
                        <input
                          name="otp"
                          type="text"
                          maxLength="1"
                          key={index}
                          value={data}
                          className="w-12 mx-4 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-2xl spin-button-none border-vto-200 focus:border-vto-400 focus:text-vto-400 text-vto-200 transition"
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 mt-12">
                    <button
                      className="w-full text-vto-400 px-3 py-2 border-2 border-vto-400 text-lg rounded-md bg-white hover:bg-vto-50"
                      type="button"
                      onClick={() => setOtp(new Array(4).fill(""))}
                    >
                      Clear
                    </button>
                    <button
                      className="w-full text-white px-3 py-2 border-2 border-vto-400 text-lg rounded-md bg-vto-400 hover:bg-vto-500"
                      type="submit"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </form>

              <div className="mb-8 text-xs text-center mt-2 text-gray-500">
                By continuing, you agree to Voyage's Terms of Use and Privacy
                Policy.
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
    </>
  );
}

export default VerificationPageBody;
