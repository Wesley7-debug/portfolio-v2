"use client";
import React, { JSX, useEffect } from "react";
import Image from "next/image";
import { workData } from "../data/WorkData";
import Link from "next/link";
import Button from "../components/Button";
import gsap from "gsap";
import { CornerDownRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import View from "../components/View";

export default function WorkSec(): JSX.Element {
  gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   //heading underline
  //   const headings = document.querySelectorAll(".underline-animate");
  //   headings.forEach((h2) => {
  //     const underline = h2.querySelectorAll(".underline");
  //     h2.addEventListener("mouseenter", () => {
  //       gsap.to(underline, { width: "100%", duration: 0.4, overwrite: "auto" });
  //     });
  //     h2.addEventListener("mouseleave", () => {
  //       gsap.to(underline, { width: "0%", duration: 0.4, overwrite: "auto" });
  //     });
  //   });

  //   gsap.set(".work-item", {
  //     y: 1000,
  //   });
  //   document.querySelectorAll(".row").forEach((row) => {
  //     const workItem = row.querySelectorAll(".work-item");

  //     workItem.forEach((item, itemIdx) => {
  //       const isLeft = itemIdx === 0;
  //       gsap.set(item, {
  //         rotation: isLeft ? "-50" : "50",
  //         transformOrigin: "center center",
  //       });
  //     });
  //     ScrollTrigger.create({
  //       trigger: row,
  //       start: "top 70%",
  //       onEnter: () => {
  //         gsap.to(workItem, {
  //           y: 0,
  //           rotation: 0,
  //           duration: 0.75,
  //           ease: "power4.inOut",
  //           stagger: 0.25,
  //         });
  //       },
  //     });
  //   });

  //   return () => {};
  // }, []);
  useEffect(() => {
    // 1. Heading underline animation
    const headings = document.querySelectorAll(".underline-animate");
    headings.forEach((h2) => {
      const underline = h2.querySelectorAll(".underline");
      h2.addEventListener("mouseenter", () => {
        gsap.to(underline, { width: "100%", duration: 0.4, overwrite: "auto" });
      });
      h2.addEventListener("mouseleave", () => {
        gsap.to(underline, { width: "0%", duration: 0.4, overwrite: "auto" });
      });
    });

    // 2. Work item scroll animation
    gsap.set(".work-item", {
      y: 1000,
    });

    document.querySelectorAll(".row").forEach((row) => {
      const workItem = row.querySelectorAll(".work-item");

      workItem.forEach((item, itemIdx) => {
        const isLeft = itemIdx === 0;
        gsap.set(item, {
          rotation: isLeft ? "-50" : "50",
          transformOrigin: "center center",
        });
      });

      ScrollTrigger.create({
        trigger: row,
        start: "top 85%",
        onEnter: () => {
          gsap.to(workItem, {
            y: 0,
            rotation: 0,
            duration: 0.75,
            ease: "power4.inOut",
            stagger: 0.25,
          });
        },
      });
    });

    // 3. Custom cursor on work-item hover
    const cursor = document.getElementById("custom-cursor");
    const workItems = document.querySelectorAll(".work-item");

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.classList.add("opacity-100");
      }
      document.body.style.cursor = "none";
      window.addEventListener("mousemove", moveCursor);
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.classList.remove("opacity-100");
      }
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
    };

    workItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup on unmount
    return () => {
      workItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <section className="w-screen h-full overflow-hidden relative mt-50">
      <div className="about-header relative w-full h-[200px] text-wrap text-center content-center px-4 lg:px-25 py-2 mb-5 lg:text-7xl text-4xl">
        <View>
          <h1 className=" font-Sora">
            Europe most aspiring <br />
            <span className=" font-PlayFair ml-1">Featured Works</span>
          </h1>
        </View>
      </div>
      <div
        id="custom-cursor"
        className="pointer-events-none fixed top-0 left-0 z-50 opacity-0 transition-opacity duration-200"
      >
        <div className="bg-Card3 size-10 rounded-full relative px-3 py-2">
          <CornerDownRight className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="work relative w-full  h-full p-5 flex flex-col gap-12  custom-cursor-ignore">
        {Array.from({ length: Math.ceil(workData.length / 2) }).map((_, i) => {
          const startIndex = i * 2;
          const rowItems = workData.slice(startIndex, startIndex + 2);
          return (
            <div
              key={i}
              style={{ cursor: "none" }}
              className="row flex flex-col lg:flex-row gap-4 flex-1 w-full "
            >
              {rowItems.map((item) => (
                <Link href={item.href} key={item.id}>
                  <div className="flex flex-1 flex-col gap-0.5 work-item underline-animate">
                    <Image
                      src={item.image}
                      alt={item.title ?? ""}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover aspect-[5/3] rounded-xl overflow-hidden"
                    />

                    <h2 className="  w-fit text-[1.2rem] font-Sora text-Bg2 relative inline-block ">
                      {item.title} | {item.subtitle}
                      <span className="underline absolute left-0 bottom-0 w-0 h-[1px] bg-black pointer-none: transition-none"></span>
                    </h2>

                    <h3 className="text-[1rem] font-Lato text-Bg2 ">
                      {item.type} - <span>{item.button}</span>
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-5">
        <Button title="See More Projects" />
      </div>
    </section>
  );
}
