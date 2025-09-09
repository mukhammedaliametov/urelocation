import React from "react";
import Immigration1 from '../assets/immigration1.png';
import Immigration2 from '../assets/immigration2.png';
import Immigration3 from '../assets/immigration3.png';

const ImmigrationPage = () => {
  return (
    <div className="font-poppins bg-white text-[#32333D] mb-[60px]">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Immigration made easy
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Urelocation simplifies the visa process for you and your international
          employees. We’ll handle the fine details so you can focus on other
          tasks.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 space-y-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Fast Service</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              We research, build, submit, and get approved visas in a fraction
              of the time while working around your timelines.
            </p>
          </div>
          <img
            src={Immigration1}
            alt="Fast Service"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={Immigration2}
            alt="Full control"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Full control and visibility
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Our intuitive platform guides you and your employee through every
              step of the immigration process, with at-a-glance status updates
              along the way.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Personalized case managers
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Feel confident with our team of global mobility experts. They’re
              on hand to answer all your questions, letting you focus on what
              really matters.
            </p>
          </div>
          <img
            src={Immigration3}
            alt="Case managers"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ImmigrationPage;
