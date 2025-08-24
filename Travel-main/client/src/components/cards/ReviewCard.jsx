import React from "react";

const ReviewCard = ({ name, desc, imageSrc }) => {
  return (
    <div className="p-7 bg-[#F9F9F9] min-w-[250px] rounded-xl">
      <img
        src={imageSrc}
        alt=""
        className="mx-auto w-16 h-16 rounded-full object-cover"
      />
      <h3 className="text-[#FF8227] font-bold text-2xl text-center my-3">
        {name}
      </h3>
      <p className="text-sm text-center">{desc}</p>
    </div>
  );
};

export default ReviewCard;
