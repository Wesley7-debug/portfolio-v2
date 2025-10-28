import React from "react";
import Hero from "./landingPages/home";
import AboutSec from "./landingPages/AboutSec";
import ServiceSec from "./landingPages/ServiceSec";
import WorkSec from "./landingPages/WorkSec";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import LogoSec from "./landingPages/LogoSec";
import Preloader from "./landingPages/Preloader";
export default function page() {
  return (
    <>
      <Hero />
      <AboutSec />
      <ServiceSec />
      <WorkSec />
      <LogoSec />
      <Cta />
      <Footer />
    </>
  );
}
