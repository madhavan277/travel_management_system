import React from "react";

const MainHeading = ({ blackText, orangeText, ...props }) => {
  return (
    <h4
      className={`font-cormorant text-[#1F1F1F] text-5xl font-semibold pt-20 pb-10 ${{
        ...props,
      }}`}
    >
      {blackText} <span className="text-[#FF8227]">{orangeText}</span>
    </h4>
  );
};

export default MainHeading;
