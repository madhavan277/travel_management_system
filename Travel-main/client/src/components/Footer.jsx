import React from "react";

const quickLinks = [
  "home",
  "booking",
  "packages",
  "services",
  "review",
  "contact",
];

const Footer = () => {
  return (
    <div className="bg-[#D5EEEE] py-16 px-40">
      <div className="grid grid-cols-4 gap-16">
        <div>
          <h4 className="font-bold text-xl mb-10">About Us</h4>
          <p>
            Voyage is a tour and travel website, for people who love to travel
            but are scared of journey and the bookings part. We are here to help
            all travel enthusiasts.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-10">Branch Locations</h4>
          <ul>
            <li className="capitalize my-2">India</li>
            <li className="capitalize my-2">USA</li>
            <li className="capitalize my-2">Japan</li>
            <li className="capitalize my-2">France</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-10">Quick links</h4>
          <ul>
            {quickLinks.map((item) => (
              <li className="capitalize my-2" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-10">Follow us</h4>
          <ul>
            <li className="capitalize my-2">
              <a href="#home">Facebook</a>
            </li>
            <li className="capitalize my-2">
              <a href="#home">Instagram</a>
            </li>
            <li className="capitalize my-2">
              <a href="#home">Twitter</a>
            </li>
            <li className="capitalize my-2">
              <a href="#home">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
