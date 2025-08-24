import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div className="font-roboto w-[300px] shadow-lg rounded-xl">
      <div className="flex justify-center items-center p-3">
        <img src={require(`../../${item.icon}`)} alt="" className="w-16 " />
      </div>
      <div className="p-4">
        <h4 className="text-2xl font-bold text-center">{item.name}</h4>
        <p className="text-sm mt-4 text-center">{item.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
