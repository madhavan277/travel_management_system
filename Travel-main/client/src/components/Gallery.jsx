import React from "react";
import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
} from "../constants";
import MainHeading from "./MainHeading";

const Gallery = () => {
  return (
    <div className="px-20 lg:px-32 w-full" id="gallery">
      <MainHeading blackText={"Our"} orangeText={"Gallery"} />
      <div className="grid grid-cols-3 gap-4 -mb-48">
        <img src={galleryImg1} alt="g1" className="w-full flex-1" />
        <img src={galleryImg2} alt="g2" className="w-full flex-1" />
        <img src={galleryImg3} alt="g3" className="w-full flex-1" />
        <img src={galleryImg4} alt="g4" className="w-full" />
        <img src={galleryImg5} alt="g5" className="w-full -translate-y-[50%]" />
        <img src={galleryImg6} alt="g6" className="w-full" />
      </div>
    </div>
  );
};

export default Gallery;
