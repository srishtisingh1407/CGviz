import React from "react";

function Footer() {
  return (
    <div className="bg-[#A6AEBF] text-black py-6 px-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-lg font-semibold mb-4 lg:mb-0">
          <p>
            &copy; 2024 CG Viz Studio. <br />
            All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end space-y-2 text-center lg:text-right">
          <p className="text-xl font-bold">
            Schedule a meeting to discuss your next <br /> visualization project
            with CG Viz Studio
          </p>
          <button className="bg-[#A6AEBF] text-[#377442] py-2 px-4 rounded-lg font-semibold hover:bg-[#D0E8C5] transition">
            Schedule Your Free 3D Visualization Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
