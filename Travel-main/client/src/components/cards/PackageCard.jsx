import React from "react";
import { useNavigate } from "react-router-dom";

const PackageCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="font-roboto w-[300px] shadow-lg rounded-3xl">
      <img src={require(`../../${item.smallImg}`)} alt="" />
      <div className="p-5">
        <h6 className="font-bold text-xl">{item.name}</h6>

        <div className="flex items-center py-2">
          {new Array(Number(item.rating)).fill(null).map((a) => (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>

        <p className="text-sm">{item.desc}</p>
        <div className="my-4">₹ {item.price}</div>
        <button
          className="text-white bg-[#FF8227] hover:bg-[#fa6e0a] duration-300 hover:scale-95 px-7 py-3 rounded-2xl font-semibold text-sm"
          onClick={() => navigate(`/package/${item.id}`)}
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
