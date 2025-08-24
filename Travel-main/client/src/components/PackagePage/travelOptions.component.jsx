import React from "react";

import ExplorePackage from "./packageExplore.component";
import BookingPackage from "./packageBooking.component";

import travel__icon from "../../assets/travel-img.svg";
import plane_package_logo from "../../assets/plane-package-logo.png";
import train_package_logo from "../../assets/Train.png";
import packages from "../../packages.json";

function TravelOptions({ id }) {
  return (
    <>
      <div className="mt-20 flex gap-4">
        <div className="w-9">
          <img src={travel__icon} alt="package-hero" className="" />
        </div>
        <div className="font-semibold">
          <div className="text-3xl">
            Travel options to reach {packages[id - 1].name}
          </div>
          <div className="text-lg">Our recommendations</div>
        </div>
      </div>

      <ExplorePackage
        imgSrc={plane_package_logo}
        explrTitle={`Flight to ${packages[id - 1].name} Airport`}
        priceTitle="Booking options starting from"
        avgPrice="2,900"
        cardHeader1="INDIGO"
        cardTitle1="One way trip"
        cardFooter1="₹ 3,805"
        cardHeader2="AIR INDIA"
        cardTitle2="One way trip"
        cardFooter2="₹ 2,900"
        cardHeader3="SPICEJET"
        cardTitle3="One way trip"
        cardFooter3="₹ 4,100"
        cardHeader4="VISTARA"
        cardTitle4="One way trip"
        cardFooter4="₹ 4,205"
      />
      <BookingPackage
        imgSrc={train_package_logo}
        explrTitle={`Train to ${packages[id - 1].name} Central`}
        priceTitle="Booking Price"
        avgPrice="1,925"
        cardHeader1="PUNJAB MAIL"
        cardTitle1="#23889"
        cardFooter1="Departs on :"
        cardHeader2="HW BDTS EXP"
        cardTitle2="#19020"
        cardFooter2="Departs on :"
        cardHeader3="GOA S KRANTI"
        cardTitle3="#57789"
        cardFooter3="Departs on :"
        cardHeader4="GARIB RATH"
        cardTitle4="#91002"
        cardFooter4="Departs on :"
      />
    </>
  );
}

export default TravelOptions;
