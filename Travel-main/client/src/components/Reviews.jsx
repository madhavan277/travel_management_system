import React from "react";
import ReviewCard from "./cards/ReviewCard";
import MainHeading from "./MainHeading";
import { person1, person2, person3 } from "../constants";

const Reviews = () => {
  return (
    <div className="px-20 lg:px-32 w-full">
      <MainHeading blackText={"Customer"} orangeText={"Reviews"} />
      <div className="flex gap-10 w-full overflow-x-auto ">
        <ReviewCard
          name={"Alice ashton"}
          desc={
            "Very nice experience. Loved the hotel and food was of great quality too. Everyone in Voyage team were helpful at every point of time. "
          }
          imageSrc={person1}
        />
        <ReviewCard
          name={"Eddie Munson"}
          desc={
            "Travelling was so easier with Voyage, from good hotel to good taxi and plane services. They got it all covered. Going to fulfill my life long dream of ‘WORLD TOUR’ with voyage."
          }
          imageSrc={person2}
        />
        <ReviewCard
          name={"Prerna Kapoor"}
          desc={
            "Travelling at late 60s could be really hectic. But with travel plans from Voyage I can enjoy my trips without any worries."
          }
          imageSrc={person3}
        />
      </div>
    </div>
  );
};

export default Reviews;
