"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import View from "../components/View";

export default function LogoSec() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    // Select all underline spans within this section
    const underlines = section.querySelectorAll(".underline-logo");

    underlines.forEach((underline) => {
      // Ensure the transform origin is centered
      gsap.set(underline, { transformOrigin: "center center", scaleX: 0 });

      // Animate scaleX instead of width so it grows from center
      gsap.to(underline, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          once: true, // ✅ only play once
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const logos = [
    "/images/agrifro-logo.png",
    "/images/brendan-logo.png",
    "/images/inkflow-studio-logo.png",
    "/images/brevo-logo.png",
    "/images/star-seed-logo.png",
    "/images/omiscient-logo.png",
    "/images/innovatek-logo.png",
    "/images/nudelab-logo.png",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full h-full text-Bg2 overflow-hidden mt-12 p-8 z-3"
    >
      {/* ✅ Underline that grows from center */}
      <div className="h-0.5 my-5 underline-logo bg-black origin-center scale-x-0"></div>

      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="px-4 text-4xl font-semibold mt-6 text-center">
          <View>
            <h1 className="font-PlayFair">
              My Serious <br />
              Relationships:
            </h1>
          </View>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:gap-16 gap-10 px-3 lg:px-20 mt-6">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <Image
                src={logo}
                width={200}
                height={200}
                alt={`Logo ${idx + 1}`}
                className="object-contain w-28 h-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
