import React from "react";
import { Link } from "react-router-dom";

const DropDownLink = ({ icon, heading, subheading, to }) => {
  return (
    <Link
      to={to}
      className="text-gray-700 flex gap-3 items-center px-2 mb-2 text-sm hover:bg-gray-100 py-2 rounded duration-300 border-b border-slate-100"
    >
      {icon}
      <span>
        <span className="">{heading}</span>
        <span className="block text-[10px]">{subheading}</span>
      </span>
    </Link>
  );
};

export default DropDownLink;
