"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Circle, Send } from "lucide-react";
import Magnetic from "../hooks/MagneticGsap";
import LetsWorkModal from "./LetsWorkModal";

interface NavBarProps {
  isActive: boolean;
  onToggle: () => void;
  labelRef: RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({ isActive, onToggle, labelRef }) => {
  const ballRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setisOpenModal] = useState<boolean>(false);
  useEffect(() => {
    const label = labelRef.current;
    const ball = ballRef.current;
    if (!label || !ball) return;

    // Timeline for hover animation
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
    });

    // Animate the ball from behind the button outward
    tl.fromTo(
      ball,
      { x: -10, opacity: 0, scale: 0.4, rotate: 0 },
      { x: 60, opacity: 1, scale: 1, rotate: 360, duration: 0.7 }
    ).to(ball, {
      x: 80,
      opacity: 0,
      scale: 0.6,
      duration: 0.4,
    });

    // Hover listeners
    const enter = () => tl.restart();
    label.addEventListener("mouseenter", enter);

    return () => {
      label.removeEventListener("mouseenter", enter);
    };
  }, [labelRef]);

  return (
    <React.Fragment>
      {" "}
      <div className="menu-bar font-Lato text-black fixed top-0 left-0 w-screen p-8 flex justify-between z-[999]">
        <div className="logo">LOGO</div>

        <div className="flex items-center gap-2 relative">
          {/* Let's Work button */}
          <div
            onClick={() => setisOpenModal(!isOpenModal)}
            ref={labelRef}
            className="menu-label relative text-sm px-4 py-1 rounded-full bg-white text-Bg2 font-semibold cursor-pointer"
          >
            Let’s Work
          </div>

          {/* Rolling ball animation beside the button */}
          <div
            ref={ballRef}
            className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-5 h-5 bg-Bg2 rounded-full flex justify-center items-center text-white shadow-md"
          >
            <Send size={10} />
          </div>

          {/* Hamburger icon */}
          <button
            aria-label="Toggle menu"
            onClick={onToggle}
            className="menu-toggle"
          >
            <div
              className={`hamburger-icon relative w-7 custom-cursor-ignore h-7 flex justify-center items-center rounded-full transition-colors ${
                isActive ? "bg-Card2" : "bg-white"
              }`}
            >
              {isActive ? (
                <>
                  <span className="absolute bg-Bg2 w-3 h-[1.5px] rotate-45 transition-transform duration-300 custom-cursor-ignore"></span>
                  <span className="absolute bg-Bg2 w-3 h-[1.5px] -rotate-45 transition-transform duration-300 custom-cursor-ignore"></span>
                </>
              ) : (
                <>
                  <span className="bg-Bg2 w-[3px] h-[3px] rounded-full mx-[2px] transition-all custom-cursor-ignore"></span>
                  <span className="bg-Bg2 w-[3px] h-[3px] rounded-full mx-[2px] transition-all custom-cursor-ignore"></span>
                  <span className="bg-Bg2 w-[3px] h-[3px] rounded-full mx-[2px] transition-all custom-cursor-ignore"></span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>
      {isOpenModal && <LetsWorkModal onClose={() => setisOpenModal(false)} />}
    </React.Fragment>
  );
};

export default NavBar;
