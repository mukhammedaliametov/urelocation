import React from "react";
import Avatar from "../assets/avatar.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const EligibilityPage = () => {
  return (
    <div className="font-poppins text-[#32333D]">
      <section className="max-w-[1220px] mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Not sure if you're eligible?
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Calculate your chances and get detailed feedback from our team
        </p>
        <button className="inline w-full md:w-auto text-[13px] lg:text-[16px]  bg-primary-amber border border-primary-amber hover:bg-transparent duration-300 rounded-[60px] px-[16px] lg:px-[26px] py-[20px] lg:py-[13px] text-white hover:text-primary-amber cursor-pointer">
          Take a scoring test
        </button>
      </section>

      <section className="max-w-[1220px] mx-auto px-6 pb-20">
        <h3 className="text-2xl md:text-3xl font-semibold mb-10">
          Testimonials
        </h3>

        <div className="flex items-center gap-[20px]">
          <div className="hidden lg:block p-[16px] rounded-full cursor-pointer shadow-md">
            <FaChevronLeft className="text-[15px]" />
          </div>
          <div className="bg-orange-50 rounded-2xl p-8 grid md:grid-cols-3 gap-8 items-center">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img
                src={Avatar}
                alt="Adriano K."
                className="w-24 h-24 rounded-full mb-4"
              />
              <h4 className="font-medium text-lg mb-2">Adriano K.</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Co-Founder
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  CEO
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  Game developer
                </span>
              </div>
            </div>
            <div className="md:col-span-2 text-gray-700 space-y-4 leading-relaxed">
              <p>
                I was referred to Immigram by my Ukrainian colleague. What has
                surprised me the most? I was amazed how the Immigram Team
                understood the twists and turns of AI and algorithms I worked on
                at companies like Goldman Sachs and Nomura.
              </p>
              <p className="text-gray-600 text-sm">
                I have a broad experience in academic research with more than 30
                published journal papers and book chapters related to Data
                Science, Machine Learning, Statistical Methods, Optimization,
                and Finance. I was surprised that Immigram Team were able to
                compile my research papers in a way that you could tell they
                comprehended my scientific activity and not just bibliographic
                it. At the end of the day, I came to Immigram for a visa and got
                the visa.
              </p>
            </div>
          </div>
          <div className="hidden lg:block p-[16px] rounded-full cursor-pointer shadow-md">
            <FaChevronRight className="text-[15px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EligibilityPage;
