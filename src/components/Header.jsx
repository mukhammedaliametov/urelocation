import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import MobileLogo from "../assets/mobile_logo.png";
import { IoClose } from "react-icons/io5";

const Header = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  const navItems = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#", icon: FaAngleDown },
    { name: "Blog", link: "#" },
    { name: "Contact", link: "#" },
  ];
  return (
    <div className="max-w-[1220px] mx-auto  flex items-center justify-between py-[20px] px-[16px] font-poppins z-999">
      <Link to={"#"}>
        <img src={Logo} Linklt="logo" className="hidden sm:block w-[80%]" />
        <img
          src={MobileLogo}
          alt="mobile_logo"
          className="block sm:hidden w-[90%]"
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-[40px] ml-[-40px]">
        {navItems.map((item) => {
          return (
            <Link
              to={item.link}
              className="flex items-center gap-[6px] text-primary-black hover:text-primary-green duration-300"
            >
              {item.name} {item.icon && <item.icon />}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-[10px]">
        <button className="flex items-center gap-[5px] text-[13px] lg:text-[16px]  bg-primary-green border border-primary-green hover:bg-transparent duration-300 rounded-[60px] px-[16px] lg:px-[26px] py-[13px] text-white hover:text-primary-green cursor-pointer">
          <IoCheckmarkCircleOutline className="text-[18px]" />
          Take a scoring test
        </button>
        <div onClick={handleClick} className="block lg:hidden text-[25px] text-primary-black">
          <CgMenuRight />
        </div>
      </div>
      <div className={`absolute top-0 flex flex-col gap-[30px] pt-[70px] pl-[80px] bg-white h-screen w-full transition-all duration-300 ${nav ? 'left-0' : 'left-[-100%]'}`}>
        {navItems.map((item) => {
            return(
                <Link to={item.link} onClick={handleClick}>{item.name}</Link>
            )
        })}
        <IoClose onClick={handleClick} className="absolute top-0 right-0 mt-[30px] mr-[15px] text-[25px]" />
      </div>
    </div>
  );
};

export default Header;
