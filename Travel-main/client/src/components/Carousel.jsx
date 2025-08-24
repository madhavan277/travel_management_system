import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Carousel = ({ images = [] }) => {
  const [activeImg, setactiveImg] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (activeImg >= 4) {
        setactiveImg(0);
      } else {
        setactiveImg(activeImg + 1);
      }
    }, 3000);
  }, [activeImg]);
  return (
    <div
      id="default-carousel"
      className="relative w-full h-full"
      data-carousel="static"
    >
      <div className="relative h-full overflow-hidden rounded-lg">
        {images.map((image, i) => (
          <div
            className={`duration-700 ease-in-out absolute inset-0 transition-all transform  -z-50  ${
              i === activeImg
                ? "translate-x-0"
                : i < activeImg
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            key={i}
          >
            <img
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-90"
              alt="carousel"
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-24 left-1/2 bg-[rgba(249,249,249,0.5)] px-5 py-[6px] rounded-2xl drop-shadow-lg">
        {images.map((_, i) => (
          <button
            type="button"
            className={`w-[14px] h-[14px] rounded-full ${
              activeImg === i ? "bg-[#FFD706]" : "bg-[#F5F5F5]"
            }`}
            key={i}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
