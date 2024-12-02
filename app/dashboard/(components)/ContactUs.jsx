import React from "react";
import SplineComponent from "./SplineComponent";

function ContactUs() {
  return (
    <div className="mx-10 p-10 mb-10">
      <div className="flex justify-start flex-col gap-3 p-10 uppercase">
        <h3 className="text-[#000101]">// Contact Us:</h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#432E54]">
          Contact Us Today
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-6 bg-[#d7f8c9] rounded-xl shadow-md">
        <div className="w-full lg:w-1/2 h-full max-w-full overflow-hidden rounded-l-xl">
          <SplineComponent />
        </div>

        <div className="w-full lg:w-1/2 p-6 rounded-r-xl">
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-[#432E54]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="p-3 mt-2 border-2 border-[#A6AEBF] rounded-lg focus:outline-none bg-white"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-[#432E54]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-3 mt-2 border-2 border-[#A6AEBF] rounded-lg bg-white"
                  placeholder="Your Email"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-[#432E54]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="p-3 mt-2 border-2 border-[#A6AEBF] rounded-lg bg-white"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 py-3 bg-[#432E54] text-white text-lg font-semibold rounded-lg hover:bg-[#A6AEBF] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
