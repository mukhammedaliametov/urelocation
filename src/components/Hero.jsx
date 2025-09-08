import React from "react";
import HeroBg from "../assets/hero_bg.png";
import MobileHeroBg from '../assets/mobile_hero_bg.png';
import dealer1 from "../assets/dealer1.svg";
import dealer2 from "../assets/dealer2.svg";
import dealer3 from "../assets/dealer3.svg";
import dealer4 from "../assets/dealer4.svg";
import dealer5 from "../assets/dealer5.svg";
import dealer6 from "../assets/dealer6.svg";
import dealer7 from "../assets/dealer7.svg";
import dealer8 from "../assets/dealer8.svg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Hero = () => {
  const Dealers = [
    { img: dealer1 },
    { img: dealer2 },
    { img: dealer3 },
    { img: dealer4 },
    { img: dealer5 },
    { img: dealer6 },
    { img: dealer7 },
    { img: dealer8 },
  ];
  return (
    <div className="max-w-[1220px] mx-auto px-[16px]">
      <div className="font-poppins ">
        <div className="mt-[90px]">
          <h1 className="w-full lg:w-[50%] text-[30px]/[40px] lg:text-[60px]/[70px] text-primary-black mt-[260px] lg:mt-[100px]">
            One platform meeting <span className="text-primary-green">all your relocation</span> needs
          </h1>
          <p className="w-[300px] md:w-[501px] text-[18px] text-secondary-black my-[25px]">
            Get a Global Talent Visa and relocate to the UK. Start your journey
            now
          </p>
          <div className="flex flex-col md:flex-row items-center gap-[30px] text-secondary-black">
            <button className="flex w-full md:w-auto items-center gap-[5px] text-[13px] lg:text-[16px]  bg-primary-amber border border-primary-amber hover:bg-transparent duration-300 rounded-[60px] px-[16px] lg:px-[26px] py-[20px] lg:py-[13px] text-white hover:text-primary-amber cursor-pointer">
              <IoCheckmarkCircleOutline className="text-[18px]" />
              Take a scoring test
            </button>
            <p className="w-[335px]">Evaluate your chances and get detailed feedback from our team</p>
          </div>
        </div>
        <div className="hidden sm:block absolute top-0 right-0 -z-1 w-[1205px]">
          <img src={HeroBg} alt="hero_bg" />
        </div>
        <div className="block sm:hidden absolute top-0 -right-0 -z-1 w-full">
            <img src={MobileHeroBg} alt="mobile_hero" />
        </div>
      </div>
      <div className="flex overflow-x-scroll lg:overflow-hidden items-center gap-[10px] my-[30px] lg:mt-[120px]">
        {Dealers.map(item => (
            <img src={item.img} alt="dealer" className="w-[142px]" />
        ))}
      </div>
    </div>
  );
};

export default Hero;
