import React from "react";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
} from "../constants";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <div className="h-screen" id="home">
      <Navbar />
      <Carousel
        images={[carousel1, carousel2, carousel3, carousel4, carousel5]}
      />
      <div className="absolute top-32 left-24 select-none">
        <h2 className="text-7xl font-[800] text-[#1F1F1F] font-tnr leading-normal tracking-wide drop-shadow-xl">
          Explore the Beauty <br /> of Journey.
        </h2>
        <p className="font-roboto font-medium text-2xl py-5 mb-10">
          If we were meant to stay in one place,
          <br /> we’d have roots instead of feet.
        </p>
        <a
          href="#packages"
          className="text-white bg-[#FF8227] hover:bg-[#fa6e0a] duration-300 px-10 py-4 rounded-2xl font-semibold flex w-fit items-center"
        >
          <span className="mr-3 cursor-pointer">Discover more</span>
          <BsArrowRight className="w-6 h-6 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Header;
