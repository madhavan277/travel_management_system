import React from "react";
import { backpack } from "../constants";
import MainHeading from "./MainHeading";

const BookNow = () => {
  return (
    <div className="px-20 lg:px-32 h-screen" id="book">
      <MainHeading blackText={"Book"} orangeText={"Now"} />
      <div className="flex">
        <div className="flex-1 p-10">
          <img src={backpack} alt="bag" className="w-full h-full" />
        </div>
        <div className="flex-1 p-10">
          <div className="rounded-xl shadow-md w-full h-full p-5 font-roboto">
            <div className="flex flex-col mb-5">
              <label htmlFor="search" className="font-bold">
                Where to
              </label>
              <input
                type="text"
                id="search"
                placeholder="search places"
                className="bg-gray-100 rounded mt-2 py-2 px-4 outline-none"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="search" className="font-bold">
                Number of guests
              </label>
              <input
                type="text"
                id="search"
                placeholder="adults and children"
                className="bg-gray-100 rounded mt-2 py-2 px-4 outline-none"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="search" className="font-bold">
                Arrival
              </label>
              <input
                type="date"
                id="search"
                placeholder="search places"
                className="bg-gray-100 rounded mt-2 py-2 px-4 outline-none"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="search" className="font-bold">
                Leaving
              </label>
              <input
                type="date"
                id="search"
                placeholder="search places"
                className="bg-gray-100 rounded mt-2 py-2 px-4 outline-none"
              />
            </div>
            <button className="text-white bg-[#FF8227] hover:bg-[#fa6e0a] duration-300 hover:scale-95 px-8 py-3 rounded-3xl text-md">
              Book Now --&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
