import React from "react";
import { useState } from "react";
import HeroSection from "../components/Layout/hero-section";
import InfoSection from "../components/Layout/InfoSection";
import Navbar from "../components/Layout/navbar-main";
import SideBar from "../components/Layout/sidebar-mobile";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  );
}

export default Homepage;
