import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-screen min-h-[50vh] max-h-screen">
      <div className="loader rounded-full w-[70px] h-[70px] animate-spin border-8 border-t-vto-300 border-r-vto-300 border-b-vto-300 border-l-white"></div>
    </div>
  );
};

export default Loader;
