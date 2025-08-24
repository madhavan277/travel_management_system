import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { airplaneLogo, homeIcon, searchIcon } from "../constants";
import NavigationDropDownMenu from "./NavigationDropDownMenu.jsx/NavigationDropDownMenu";

const navigationMenu = [
  "home",
  "book",
  "packages",
  "services",
  "gallery",
  "community",
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    return () => {
      setIsActive(false);
    };
  }, []);
  return (
    <nav className="bg-[rgba(217,217,217,0.5)] px-20 lg:px-32 py-5 fixed w-full backdrop-blur-sm z-50">
      <div className="flex justify-between">
        <div className="logo flex items-center gap-3">
          <img src={airplaneLogo} alt="plane" className="w-[25px] h-[31px]" />
          <div className="font-roboto font-extrabold text-2xl">VOYAGE</div>
        </div>
        <ul className="flex gap-10 items-center font-roboto">
          {navigationMenu.map((item) => (
            <li className="capitalize" key={item}>
              <a
                href={`#${item}`}
                className={`hover:text-vto-400 ${
                  location.hash.includes(item) &&
                  "text-vto-400 underline underline-offset-8 decoration-2"
                } duration-300 drop-shadow-sm`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-14">
          <div className="relative" onMouseLeave={() => setIsActive(false)}>
            <img
              src={homeIcon}
              alt="plane"
              onMouseOver={() => setIsActive(true)}
              className="w-6 h-6 hover:scale-95 duration-300 cursor-pointer"
              onClick={() => setIsActive((prev) => !prev)}
            />
            <NavigationDropDownMenu
              className={
                isActive
                  ? "translate-y-0 duration-500"
                  : "-translate-y-2 opacity-0 invisible duration-500"
              }
            />
          </div>

          <img src={searchIcon} alt="plane" className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
