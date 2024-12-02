import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SplineComponent from "./SplineComponent";

function Hero() {
  return (
    <div className="relative rounded-t-[50px] py-20 bg-gradient-to-r from-[#aed99a] to-[#C5D3E8] border-[#A6AEBF]">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 uppercase">
        <div className="text-start lg:w-1/2">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#5573b2] mb-8">
            Professional 3D Rendering <br />
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#D0E8C5] mb-8">
            <span className="italic lowercase"></span>
          </h2>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-[#A6AEBF] mb-12">
            Company
          </h3>

          <div className="inline-flex items-center px-6 py-3 bg-[#D0E8C5] text-[#432E54] font-semibold text-lg rounded-full cursor-pointer hover:bg-[#FFF8DE] transition-colors">
            <span>Schedule meet</span>
            <div className="ml-2 flex items-center justify-center w-8 h-8 bg-[#FFF8DE] rounded-full transition-transform group-hover:rotate-180">
              <FaArrowRight className="text-[#432E54] group-hover:text-[#D0E8C5] transition-transform duration-300" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 mx-28 lg:mt-0">
          <SplineComponent />
        </div>
      </div>
    </div>
  );
}

export default Hero;
