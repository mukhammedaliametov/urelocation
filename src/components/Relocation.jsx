import React from "react";
import Img1 from "../assets/relocation1.png";
import Img2 from "../assets/relocation2.png";
import Img3 from "../assets/relocation3.png";
import Img4 from "../assets/relocation4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Relocation = () => {
  const items = [
    { title: "Developer", img: Img1 },
    { title: "Data scientists", img: Img2 },
    { title: "UI designer", img: Img3 },
    { title: "Game developer", img: Img4 },
  ];

  return (
    <div className="w-full lg:w-[1220px] mx-auto text-center py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Who has relocated with the help of Immigram?
      </h2>
      <p className="text-gray-500 mt-2">
        You can be next! Start your relocation journey now
      </p>
      <div className="flex items-center gap-[20px]">
        <div className="hidden lg:block p-[16px] rounded-full cursor-pointer shadow-md">
          <FaChevronLeft className="text-[15px]" />
        </div>
        <div className="mt-10 flex gap-6 px-[20px] lg:px-0 overflow-x-scroll md:grid md:grid-cols-4 md:overflow-visible">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-0 flex-shrink-0 bg-white overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden w-full object-cover rounded-[20px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="group-hover:scale-105 transition-all duration-300"
                />
              </div>

              <div className="p-3">
                <p className="text-gray-700 font-medium group-hover:text-primary-green duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block p-[16px] rounded-full cursor-pointer shadow-md">
          <FaChevronRight className="text-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default Relocation;
