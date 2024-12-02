import React from "react";
import Header from "./dashboard/(components)/Header";
import Hero from "./dashboard/(components)/Hero";
import Service from "./dashboard/(components)/Service";
import Portfolio from "./dashboard/(components)/Portfolio";
import ContactUs from "./dashboard/(components)/ContactUs";
import Footer from "./dashboard/(components)/Footer";


function page() {
  return (
    <div className=" h-screenbackground-gradient h-screen scroll-smooth   ">
      <Header />

      <Hero />

      <Service />

      <Portfolio />

      <ContactUs/>

      <Footer/>
    </div>
  );
}

export default page;
