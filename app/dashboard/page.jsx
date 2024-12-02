import React from "react";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";
import Service from "./(components)/Service";
import Portfolio from "./(components)/Portfolio";
import ContactUs from "./(components)/ContactUs";
import Footer from "./(components)/Footer";

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
