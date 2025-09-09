import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const FAQ = () => {
  return (
    <div className="font-poppins max-w-[1220px] mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary-black">FAQ</h2>

      <div className="bg-white py-4 px-6 rounded-[20px] mb-[10px]">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="text-base md:text-lg text-[#32333D]">
            What does a Global Talent Visa offer?
          </p>
          <FaAngleDown />
        </div>
      </div>

      <div className="bg-white py-4 px-6 rounded-[20px] mb-[10px]">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="text-base md:text-lg text-[#32333D]">
            Who can apply for the Global Talent Visa?
          </p>
          <FaAngleDown />
        </div>
      </div>

      <div className="bg-white py-4 px-6 rounded-[20px] mb-[10px]">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="text-base md:text-lg text-green-600 font-medium">
            What does a Global Talent Visa offer?
          </p>
          <FaAngleDown />
        </div>
        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
          <p>
            Global Talent candidates in digital tech will need to attach a
            completed Visa application form, which includes:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>A Personal Statement;</li>
            <li>
              A CV, containing your experience, contributions to the relevant
              field, publications, etc;
            </li>
            <li>
              At least 3 letters of recommendation from recognised leaders in
              the tech industry;
            </li>
            <li>
              Up to 10 pieces of evidence in relation to the relevant
              Eligibility Criteria.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-4 px-6 rounded-[20px] mb-[10px]">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="text-base md:text-lg text-[#32333D]">
            What does Immigram offer?
          </p>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
