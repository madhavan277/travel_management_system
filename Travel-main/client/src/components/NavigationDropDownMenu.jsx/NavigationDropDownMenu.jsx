import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { TbBuildingCommunity } from "react-icons/tb";
import { BiBadgeCheck } from "react-icons/bi";
import DropDownLink from "./DropDownLink";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/Slices/Extra actions/userActions";

const dropDownLinks = [
  {
    icon: <AiOutlineUser className="w-6 h-6" />,
    heading: "My Account",
    subheading: "Manage your account",
    to: "/account",
  },
  {
    icon: <TbBuildingCommunity className="w-6 h-6" />,
    heading: "Community",
    subheading: "Join your travel tribe now!",
    to: "/community",
  },
  {
    icon: <BiBadgeCheck className="w-6 h-6" />,
    heading: "Offers",
    subheading: "Handpicked best deals",
    to: "/offers",
  },
];

const NavigationDropDownMenu = (props) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/signin");
    window.location.reload();
  };
  return (
    <div {...props}>
      <div className="absolute -right-10 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4">
        <div className="py-1 w-full">
          <div>
            <h6 className="capitalize font-[500] font-poppins">
              Hey traveller
            </h6>
            <p className="text-[13px] font-light">
              Get exclusive deals & Manage your trips
            </p>
          </div>
          {isAuthenticated === false && (
            <div className="flex justify-center">
              <button
                className="rounded bg-[#FF8227] text-md text-white font-light px-7 py-2 my-4 hover:scale-95 hover:bg-[#f86f0d] duration-300"
                onClick={() => navigate("/signin")}
              >
                Login / Sign up
              </button>
            </div>
          )}
          <div className="links mt-3">
            {dropDownLinks.map((link) => (
              <DropDownLink
                key={link.heading}
                icon={link.icon}
                heading={link.heading}
                subheading={link.subheading}
                to={link.to}
              />
            ))}
          </div>
          {isAuthenticated && (
            <div className="flex justify-center">
              <button
                className="rounded bg-[#ff2727] text-sm text-white font-light px-7 py-2 my-2 hover:scale-95 hover:bg-[#f80d0d] duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationDropDownMenu;
