import React from "react";

function ForgotPassEmailFragments({ email, handleChange, handleSubmit }) {
  return (
    <>
      <div className="text-sm text-gray-500">
        Send a link to your email to reset your password
      </div>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="text-lg">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            placeholder="eg: MarkLin@xyz.com"
            className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100"
            title="enter your email"
            required
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <button
          className="w-full text-white mt-2 px-3 py-2 text-md rounded bg-vto-400 hover:bg-vto-500 focus:bg-vto-100 focus:text-vto-100"
          type="submit"
        >
          Send Reset Link
        </button>
      </form>
    </>
  );
}

export default ForgotPassEmailFragments;
