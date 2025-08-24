import React from "react";
import MainHeading from "./MainHeading";
import PackageCard from "./cards/PackageCard";
import packageData from "../packages.json";

const Packages = () => {
  return (
    <div className="px-20 lg:px-32" id="packages">
      <MainHeading blackText={"Our"} orangeText={"Packages"} />
      <div className="flex gap-10 flex-wrap justify-center">
        {packageData.map((item) => (
          <PackageCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
