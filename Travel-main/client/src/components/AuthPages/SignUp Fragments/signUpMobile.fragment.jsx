import React from "react";

function SignUpMobileFragment({ data, handleChange, handleSubmit }) {
  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="f_name" className="text-lg">
            First Name
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="eg: Mark"
            className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100"
            title="enter first name"
            required
            name="fname"
            value={data.fname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="l_name" className="text-lg">
            Last Name
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="eg: Linn"
            className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100"
            title="enter last name"
            required
            value={data.lname}
            onChange={handleChange}
            name="lname"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="tel" className="text-lg">
            Mobile No
          </label>{" "}
          <br />
          <div className="flex gap-2">
            <div className="outline outline-vto-50 bg-white text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100">
              +91
            </div>
            <input
              type="number"
              placeholder="eg: 99XXXX1024"
              className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100"
              title="enter your mobile number"
              required
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="text-lg">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            placeholder="Enter your Password"
            className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100"
            title="enter password"
            required
            value={data.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="cpassword" className="text-lg">
            Confirm Password
          </label>{" "}
          <br />
          <input
            type="password"
            placeholder="Confirm your Password"
            className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100"
            title="re-enter password"
            required
            value={data.cpassword}
            onChange={handleChange}
            name="cpassword"
          />
        </div>
        <button
          className="w-full text-white px-3 py-2 text-lg rounded-lg bg-vto-400 hover:bg-vto-500 focus:bg-vto-100 focus:text-vto-100"
          type="submit"
        >
          Send OTP
        </button>
      </form>
    </>
  );
}

export default SignUpMobileFragment;
