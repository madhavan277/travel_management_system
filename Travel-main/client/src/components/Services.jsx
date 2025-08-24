import React from "react";
import ServiceCard from "./cards/ServiceCard";
import MainHeading from "./MainHeading";
import services from "../services.json";

const Services = () => {
  return (
    <div className="px-20 lg:px-32" id="services">
      <MainHeading blackText={"Our"} orangeText={"Services"} />
      <div className="flex gap-7 justify-center flex-wrap">
        {services.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
