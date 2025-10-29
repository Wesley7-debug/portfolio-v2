"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/SplitText";

interface MenuItem {
  name: string;
  href: string;
}

gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const menuOverlayContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const splitInstances = useRef<SplitText[]>([]);

  const navLinks: MenuItem[] = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const menuFooter: MenuItem[] = [
    { name: "LinkedIn", href: "/" },
    { name: "Twitter", href: "/" },
    { name: "Instagram", href: "/" },
  ];

  /** ✅ Create SplitText for all menu-cols */
  const setupSplitText = useCallback(() => {
    if (!menuOverlayContainerRef.current) return;

    // cleanup old instances
    splitInstances.current.forEach((split) => split.revert());
    splitInstances.current = [];

    const allMenuCols =
      menuOverlayContainerRef.current.querySelectorAll(".menu-col");

    allMenuCols.forEach((col) => {
      const textElements = col.querySelectorAll("a, p");
      textElements.forEach((el) => {
        const split = new SplitText(el, {
          type: "lines",
          mask: "lines",
        });
        gsap.set(split.lines, { yPercent: -110 });
        splitInstances.current.push(split);
      });
    });
  }, []);

  /** ✅ Animate menu open / close */
  const toggleMenu = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      defaults: { ease: "hop" },
      onComplete: () => setIsAnimating(false),
    });

    if (!isActive) {
      // 🔹 OPEN MENU
      setupSplitText();

      tl.to(labelRef.current, { yPercent: -500, duration: 0.8 })
        .set(overlayRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
        })
        .to(
          overlayRef.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 1.1,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          menuOverlayContainerRef.current,
          { y: 0, duration: 1, ease: "power3.out" },
          "<"
        )
        .to(
          mediaRef.current,
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "<"
        );

      // Animate SplitText lines
      const allLines = splitInstances.current.flatMap((s) => s.lines);
      tl.to(
        allLines,
        {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: "power3.out",
        },
        "-=0.3"
      );
    } else {
      // 🔹 CLOSE MENU
      const allLines = splitInstances.current.flatMap((s) => s.lines);

      tl.to(allLines, {
        yPercent: 110,
        duration: 0.6,
        stagger: 0.02,
        ease: "power3.inOut",
      })
        .to(
          mediaRef.current,
          { opacity: 0, duration: 0.4, ease: "power2.inOut" },
          "-=0.3"
        )
        .to(
          overlayRef.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.2"
        )
        .to(labelRef.current, {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.out",
        });

      // Revert SplitText after close for cleanup
      tl.add(() => {
        splitInstances.current.forEach((split) => split.revert());
        splitInstances.current = [];
      });
    }

    setIsActive((prev) => !prev);
  }, [isActive, isAnimating, setupSplitText]);

  useEffect(() => {
    CustomEase.create("hop", ".87, 0, .13, 1");
  }, []);

  return (
    <nav className="fixed top-0 left-0  overflow-hidden z-[99]">
      <NavBar isActive={isActive} onToggle={toggleMenu} labelRef={labelRef} />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="menu-overlay fixed top-0 left-0 w-screen h-screen bg-Bg text-Bg2 overflow-hidden z-[5]"
      >
        <div
          ref={menuOverlayContainerRef}
          className="menu-overlay-content flex -translate-y-full pointer-events-auto will-change-transform fixed top-0 left-0 w-screen h-screen bg-Bg2 text-Bg overflow-hidden z-[2]"
        >
          {/* Media Section */}
          <div
            ref={mediaRef}
            className="menu-media-wrapper flex-2 opacity-0 will-change-opacity hidden lg:block"
          >
            <Image
              className="w-full h-full opacity-[0.25]"
              width={300}
              height={300}
              src="/images/fidelis-3.jpg"
              alt="fidelis picture"
            />
          </div>

          {/* Main Content */}
          <div className="menu-content-wrap flex-3 relative flex">
            <div className="main-content w-full lg:w-[75%] p-8 flex flex-col lg:flex-row items-start lg:items-end gap-20 lg:gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Left Col */}
              <div className="menu-col flex flex-col gap-0.5 flex-3">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="menu-link"
                    onClick={toggleMenu}
                  >
                    <Link
                      href={link.href}
                      className="text-[3rem] lg:text-6xl font-semibold"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Footer Links */}
              <div className="menu-col flex flex-col gap-0.5 flex-2">
                {menuFooter.map((item) => (
                  <div key={item.name} onClick={toggleMenu}>
                    <Link href={item.href} className="text-2xl text-gray-300">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Info */}
            <div className="mx-auto w-full lg:w-[75%] items-end p-6 lg:p-8 flex text-sm lg:text-xl text-gray-300 gap-8">
              <div className="menu-col flex flex-col gap-0.5">
                <p>
                  Port Harcourt,
                  <br />
                  Nigeria
                </p>
              </div>
              <div className="menu-col flex flex-col gap-0.5">
                <p>+234(0) 9015652663</p>
                <p>eugemefidelis573@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
