"use client";

import React from "react";
import { FaBuilding, FaCouch, FaCube, FaCity } from "react-icons/fa";

function Service() {
  return (
    <div className="text-black bg-white border-b-2 mx-6  sm:mx-10 border-[#A6AEBF] ">
      <div className="rounded-r-[50px] mx-6 sm:mx-10 p-10">
        <div className="flex justify-start flex-col gap-3 p-6 sm:p-10 uppercase">
          <h3 className="text-sm sm:text-base text-[#432E54]">// Our Service:</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432E54]">
            Elevate Your Vision with Our Expertise
          </h1>
        </div>

        <div className="bg-[#c8e4bc] flex flex-col sm:flex-row justify-center items-center gap-8 p-8 sm:p-10 transition-opacity">
    
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-72 sm:w-80 lg:w-96 h-96">
            <FaBuilding className="text-5xl sm:text-6xl mb-4 text-[#432E54]" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center text-[#432E54]">
              Architectural Visualization
            </h2>
            <p className="text-center text-[#432E54]">
              Bring your architectural designs to life with detailed, photorealistic 3D renderings.
            </p>
          </div>

       
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-72 sm:w-80 lg:w-96 h-96">
            <FaCouch className="text-5xl sm:text-6xl mb-4 text-[#432E54]" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center text-[#432E54]">
              Interior Design Renderings
            </h2>
            <p className="text-center text-[#432E54]">
              Showcase your interior design concepts with immersive 3D visualizations.
            </p>
          </div>

       
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-72 sm:w-80 lg:w-96 h-96">
            <FaCube className="text-5xl sm:text-6xl mb-4 text-[#432E54]" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center text-[#432E54]">
              3D Product Visualization
            </h2>
            <p className="text-center text-[#432E54]">
              Create captivating 3D product renderings to showcase your designs.
            </p>
          </div>

      
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-72 sm:w-80 lg:w-96 h-96">
            <FaCity className="text-5xl sm:text-6xl mb-4 text-[#432E54]" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center text-[#432E54]">
              Urban Planning Visualizations
            </h2>
            <p className="text-center text-[#432E54]">
              Bring your urban planning projects to life with detailed 3D renderings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
