import React from "react";
import Hero from "./landingPages/home";
import AboutSec from "./landingPages/AboutSec";
import ServiceSec from "./landingPages/ServiceSec";
import WorkSec from "./landingPages/WorkSec";
export default function page() {
  return (
    <>
      <Hero />
      <AboutSec />
      {/* <ServiceSec /> */}
      <WorkSec />
    </>
  );
}
