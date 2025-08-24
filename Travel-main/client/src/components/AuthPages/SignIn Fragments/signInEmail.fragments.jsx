import React from "react";

function SignInEmailFragments({ data, handleSubmit, handleChange }) {
  return (
    <>
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
            value={data.email}
            onChange={handleChange}
          />
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
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full text-white px-3 py-2 text-lg rounded-lg bg-vto-400 hover:bg-vto-500 "
          type="submit"
        >
          Sign In
        </button>
      </form>
    </>
  );
}

export default SignInEmailFragments;
