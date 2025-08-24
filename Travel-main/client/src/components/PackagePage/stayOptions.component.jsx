import React from "react";

import ExplorePackage from "./packageExplore.component";

import hotel__icon from "../../assets/HotelOptions.png";
import star__logo from "../../assets/Star.png";
import packages from "../../packages.json";

function StayOptions({ id }) {
  return (
    <>
      <div className="mt-12 flex gap-4">
        <div className="w-9">
          <img src={hotel__icon} alt="package-hero" className="" />
        </div>
        <div className="font-semibold">
          <div className="text-3xl">Stay in {packages[id - 1].name}</div>
          <div className="text-lg">Recommended options</div>
        </div>
      </div>

      <ExplorePackage
        imgSrc={star__logo}
        explrTitle="3 Star Hotels"
        priceTitle="Average Price"
        avgPrice="5,257"
        cardHeader1="THE AVION HOTEL"
        cardRating1="3.6"
        cardReview1="Good"
        cardResponse1="(1107 ratings)"
        cardSecondFooter1="Near Mumbai airport"
        cardHeader2="THE RAO HOTEL"
        cardRating2="3.6"
        cardReview2="Good"
        cardResponse2="(1107 ratings)"
        cardSecondFooter2="5.7 KM from Airport"
        cardHeader3="HOTEL AIRLINK"
        cardRating3="3.6"
        cardReview3="Good"
        cardResponse3="(1107 ratings)"
        cardSecondFooter3="950 M from T1 Airport"
        cardHeader4="EMPRESSA HOTEL"
        cardRating4="3.6"
        cardReview4="Good"
        cardResponse4="(1107 ratings)"
        cardSecondFooter4="7.6 KM from Airport"
      />
      <ExplorePackage
        imgSrc={star__logo}
        explrTitle="4 Star Hotels"
        priceTitle="Average Price"
        avgPrice="6,807"
        cardHeader1="THE AVION HOTEL"
        cardRating1="3.6"
        cardReview1="Good"
        cardResponse1="(1107 ratings)"
        cardSecondFooter1="Near Mumbai airport"
        cardHeader2="THE RAO HOTEL"
        cardRating2="3.6"
        cardReview2="Good"
        cardResponse2="(1107 ratings)"
        cardSecondFooter2="5.7 KM from Airport"
        cardHeader3="HOTEL AIRLINK"
        cardRating3="3.6"
        cardReview3="Good"
        cardResponse3="(1107 ratings)"
        cardSecondFooter3="950 M from T1 Airport"
        cardHeader4="EMPRESSA HOTEL"
        cardRating4="3.6"
        cardReview4="Good"
        cardResponse4="(1107 ratings)"
        cardSecondFooter4="7.6 KM from Airport"
      />
      <ExplorePackage
        imgSrc={star__logo}
        explrTitle="5 Star Hotels"
        priceTitle="Average Price"
        avgPrice="11,000"
        cardHeader1="THE AVION HOTEL"
        cardRating1="3.6"
        cardReview1="Good"
        cardResponse1="(1107 ratings)"
        cardSecondFooter1="Near Mumbai airport"
        cardHeader2="THE RAO HOTEL"
        cardRating2="3.6"
        cardReview2="Good"
        cardResponse2="(1107 ratings)"
        cardSecondFooter2="5.7 KM from Airport"
        cardHeader3="HOTEL AIRLINK"
        cardRating3="3.6"
        cardReview3="Good"
        cardResponse3="(1107 ratings)"
        cardSecondFooter3="950 M from T1 Airport"
        cardHeader4="EMPRESSA HOTEL"
        cardRating4="3.6"
        cardReview4="Good"
        cardResponse4="(1107 ratings)"
        cardSecondFooter4="7.6 KM from Airport"
      />
    </>
  );
}

export default StayOptions;
