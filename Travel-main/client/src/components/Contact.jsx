import React from "react";
import { contactImg } from "../constants";
import MainHeading from "./MainHeading";

const Contact = () => {
  return (
    <div className="px-20 lg:px-32" id="community">
      <MainHeading blackText={"Contact"} orangeText={"Us"} />
      <div className="flex gap-10 w-full pb-20">
        <div className="flex-1 w-full p-5">
          <img src={contactImg} alt="contact" className="w-full" />
        </div>
        <div className="flex-1 shadow-lg rounded-2xl px-5 py-3">
          <div className="flex gap-10 justify-between mb-5">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="bg-gray-100 rounded mt-2 py-2 w-fit px-4 outline-none"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="bg-gray-100 rounded mt-2 py-2 w-fit px-4 outline-none"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            className="bg-gray-100 w-full outline-none px-4 py-2 resize-none rounded"
            placeholder="Drop a message..."
          />
          <button className="text-white bg-[#FF8227] hover:bg-[#fa6e0a] duration-300 hover:scale-95 px-8 py-3 rounded-xl mt-4">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
