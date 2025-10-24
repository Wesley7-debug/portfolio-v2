"use client";

import { CornerDownRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Cta() {
  // First box refs
  const containerRef1 = useRef<HTMLDivElement>(null);
  const underLineRef1 = useRef<HTMLSpanElement>(null);
  const arrowRef1 = useRef<SVGSVGElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);

  // Second box refs
  const containerRef2 = useRef<HTMLDivElement>(null);
  const underLineRef2 = useRef<HTMLSpanElement>(null);
  const arrowRef2 = useRef<SVGSVGElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animateBox = (
      container: HTMLDivElement | null,
      underline: HTMLSpanElement | null,
      arrow: SVGSVGElement | null,
      text: HTMLHeadingElement | null,
      underlineColor: string
    ) => {
      if (!container || !underline || !arrow || !text) return;

      const handleMouseEnter = () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
          backgroundColor: underlineColor,
        });
        gsap.to(arrow, { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
        gsap.to(text, { x: 20, duration: 0.4, ease: "power2.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(underline, {
          width: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(arrow, {
          x: -40,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(text, { x: 0, duration: 0.4, ease: "power2.out" });
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      // Initialize arrow and text positions
      gsap.set(arrow, { x: -40, opacity: 0 });
      gsap.set(text, { x: 0 });

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const cleanup1 = animateBox(
      containerRef1.current,
      underLineRef1.current,
      arrowRef1.current,
      textRef1.current,
      "white"
    );

    const cleanup2 = animateBox(
      containerRef2.current,
      underLineRef2.current,
      arrowRef2.current,
      textRef2.current,
      "black"
    );

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <section className="w-screen min-h-screen h-[120vh] bg-Bg overflow-hidden relative  mt-30 lg:mt-0 flex justify-center items-center">
      <div className="w-full justify-center items-center px-4 h-full flex flex-col lg:flex-row gap-8 mx-auto my-auto">
        {/* === Box 1 === */}
        <div
          ref={containerRef1}
          className="lg:flex-1 lg:w-[400px] w-full  h-[400px] bg-Bg2 rounded-2xl relative flex flex-col px-2 py-8 lg:gap-2"
        >
          <div className="text-white text-2xl px-8">
            <h2 className="font-Sora">You feel it too?</h2>
            <h2 className="font-PlayFair">Let's talk. No strings attached.</h2>
          </div>

          {/* Hover area */}
          <div className="absolute bottom-8 text-white font-extrabold">
            <div className="relative inline-flex items-center gap-3 cursor-pointer">
              <CornerDownRight
                ref={arrowRef1}
                className="text-white size-7 lg:size-13"
              />
              <h1
                ref={textRef1}
                className="font-Lato text-4xl  lg:text-6xl relative"
              >
                Let's Work
                <span
                  ref={underLineRef1}
                  className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white block"
                ></span>
              </h1>
            </div>
          </div>
        </div>

        {/* === Box 2 === */}
        <div
          ref={containerRef2}
          className=" lg:flex-1 bg-Card2 w-full lg:w-[400px] relative lg:h-[400px] h-[350px] rounded-2xl px-2 pt-6 text-black flex flex-col justify-between "
        >
          <div className="text-2xl px-8">
            <h2 className="font-Sora">Offer for developers!</h2>
            <h2 className="font-PlayFair">
              Get cool animated UI components that make your design beautiful.
            </h2>
          </div>
          {/* Hover area */}
          <div className="absolute bottom-8 font-extrabold">
            <div className="relative inline-flex items-center gap-3 cursor-pointer">
              <CornerDownRight ref={arrowRef2} className=" size-7 lg:size-13" />
              <h1
                ref={textRef2}
                className="font-Lato text-4xl  lg:text-7xl relative text-wrap"
              >
                Component <br /> Library
                <span
                  ref={underLineRef2}
                  className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-black block"
                ></span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
