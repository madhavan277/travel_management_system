import React from "react";

import BookingPackage from "./packageBooking.component";

import activities__icon from "../../assets/Tree.png";
import car_logo from "../../assets/car.png";
import park_logo from "../../assets/park.png";
import restaurant_logo from "../../assets/Restaurant.png";

function ActivitiesOptions() {
  return (
    <>
      <div className="mt-12 flex gap-4">
        <div className="w-9">
          <img src={activities__icon} alt="package-hero" className="" />
        </div>
        <div className="font-semibold">
          <div className="text-3xl">Activities</div>
          <div className="text-lg">Most booked</div>
        </div>
      </div>

      <BookingPackage
        imgSrc={park_logo}
        explrTitle="Water kingdom fun park"
        priceTitle="Entry ticket"
        avgPrice="924"
        cardHeader1="ECONOMY"
        cardTitle1="₹ 924"
        cardFooter1="Available on :"
        cardHeader2="ECO + MEAL"
        cardTitle2="₹ 1,299"
        cardFooter2="Available on :"
        cardHeader3="PREMIUM"
        cardTitle3="₹ 2,600"
        cardFooter3="Available on :"
        cardHeader4="VIP"
        cardTitle4="₹ 5,999"
        cardFooter4="Available on :"
      />
      <BookingPackage
        imgSrc={car_logo}
        explrTitle="Full day city tour by Car"
        priceTitle="Price for 3 people"
        avgPrice="6,400"
        cardHeader1="DZIRE"
        cardTitle1="₹ 6,400"
        cardFooter1="Available on :"
        cardHeader2="ETIOS"
        cardTitle2="₹ 8,990"
        cardFooter2="Available on :"
        cardHeader3="INNOVA"
        cardTitle3="₹ 12,600"
        cardFooter3="Available on :"
        cardHeader4="FORTUNER"
        cardTitle4="₹ 25,999"
        cardFooter4="Available on :"
      />
      <BookingPackage
        imgSrc={restaurant_logo}
        explrTitle="Ritazza cafe"
        priceTitle="Average for 2 people"
        avgPrice="624"
        cardHeader1="TABLE-RESERVATION"
        cardTitle1="₹ 624"
        cardFooter1="Available on :"
        cardHeader2="UNLIMITED MEAL"
        cardTitle2="₹ 4,990"
        cardFooter2="Available on :"
        cardHeader3="LIMITED PARTY PACK"
        cardTitle3="₹ 10,000"
        cardFooter3="Available on :"
        cardHeader4="EVENT ORGANIZING"
        cardTitle4="₹ 20,999"
        cardFooter4="Available on :"
      />
    </>
  );
}

export default ActivitiesOptions;
