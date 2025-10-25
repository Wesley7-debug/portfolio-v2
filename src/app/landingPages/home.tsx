"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import HeroCard from "../components/HeroCard";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  const smoothStop = (p: number) => p * p * (3 - 2 * p);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: heroRef.current,
  //     start: "top top",
  //     end: "75% top",
  //     scrub: 1,
  //     onUpdate: (self) => {
  //       const progress = self.progress;
  //       const opacity = gsap.utils.interpolate(1, 0.5, smoothStop(progress));
  //       gsap.set(".hero-cards", { opacity });

  //       ["#hero-card1", "#hero-card2", "#hero-card3"].forEach(
  //         (cardId, index) => {
  //           const delay = index * 0.9;
  //           const cardProgress = gsap.utils.clamp(
  //             0,
  //             1,
  //             (progress - delay * 0.1) / (1 - delay * 0.1)
  //           );
  //           const y = gsap.utils.interpolate(
  //             "0%",
  //             "250%",
  //             smoothStop(cardProgress)
  //           );
  //           const scale = gsap.utils.interpolate(
  //             1,
  //             0.75,
  //             smoothStop(cardProgress)
  //           );
  //           let x = 0;
  //           let rotation = 0;

  //           if (index === 0) {
  //             x = gsap.utils.interpolate("0%", "90%", smoothStop(cardProgress));
  //             rotation = gsap.utils.interpolate(
  //               0,
  //               -15,
  //               smoothStop(cardProgress)
  //             );
  //           } else if (index === 2) {
  //             x = gsap.utils.interpolate(
  //               "0%",
  //               "-90%",
  //               smoothStop(cardProgress)
  //             );
  //             rotation = gsap.utils.interpolate(
  //               0,
  //               15,
  //               smoothStop(cardProgress)
  //             );
  //           }

  //           gsap.set(cardId, { y, x, rotation, scale });
  //         }
  //       );
  //     },
  //   });
  // }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // DOT bounce loop
      gsap.to("#bounce-dot", {
        y: -10,
        duration: 0.6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // DOT fade on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "50% top",
        scrub: true,
        onUpdate: (self) => {
          const opacity = gsap.utils.interpolate(1, 0, self.progress);
          gsap.to("#bounce-dot", { opacity });
        },
      });

      // RESPONSIVE ANIMATION LOGIC
      ScrollTrigger.matchMedia({
        // Desktop: original animation
        "(min-width: 768px)": function () {
          ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "75% top",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const opacity = gsap.utils.interpolate(
                1,
                0.5,
                smoothStop(progress)
              );
              gsap.set(".hero-cards", { opacity });

              ["#hero-card1", "#hero-card2", "#hero-card3"].forEach(
                (cardId, index) => {
                  const delay = index * 0.9;
                  const cardProgress = gsap.utils.clamp(
                    0,
                    1,
                    (progress - delay * 0.1) / (1 - delay * 0.1)
                  );

                  const y = gsap.utils.interpolate(
                    "0%",
                    "250%",
                    smoothStop(cardProgress)
                  );
                  const scale = gsap.utils.interpolate(
                    1,
                    0.75,
                    smoothStop(cardProgress)
                  );

                  let x = 0;
                  let rotation = 0;
                  if (index === 0) {
                    x = gsap.utils.interpolate(
                      0,
                      90,
                      smoothStop(cardProgress)
                    );
                    rotation = gsap.utils.interpolate(
                      0,
                      -15,
                      smoothStop(cardProgress)
                    );
                  } else if (index === 2) {
                    x = gsap.utils.interpolate(
                      "0%",
                      "-90%",
                      smoothStop(cardProgress)
                    );
                    rotation = gsap.utils.interpolate(
                      0,
                      15,
                      smoothStop(cardProgress)
                    );
                  }

                  gsap.set(cardId, { y, x, rotation, scale });
                }
              );
            },
          });
        },

        // Mobile: simpler sequential drop/fade
        // Mobile: animate cards from right to left on scroll
        "(max-width: 767px)": function () {
          const cards = ["#hero-card1", "#hero-card2", "#hero-card3"];

          // Set initial state so nothing is moved/faded before scroll
          gsap.set(cards, {
            opacity: 1,
            y: 0,
            rotation: 0,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom 95%",
              end: "bottom 65%", // Runs until section scrolls out
              scrub: 1,
            },
          });

          ["#hero-card3", "#hero-card2", "#hero-card1"].forEach(
            (cardId, index) => {
              tl.to(
                cardId,
                {
                  opacity: 0,
                  y: 100,
                  rotation: index % 2 === 0 ? 3 : -3,
                  ease: "power1.out",
                },
                index * 0.1 // staggered by timeline
              );
            }
          );
        },
      });
    }, heroRef);

    return () => ctx.revert(); // clean up
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-screen z-3 min-h-svh lg:h-[115vh] p-2 overflow-hidden relative mt-11 cursor-default text-Bg2"
    >
      {/* Top Banner */}
      <div className="flex gap-2 px-12 items-center mt-5 font-Lato text-[0.5rem] w-full lg:mt-15 justify-between">
        {/* Repeat star blocks */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <img
              key={i}
              src="/svg/star.png"
              alt="star"
              className="size-2 lg:size-2"
            />
          ))}
        </div>
        <h2>2025</h2>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <img
              key={i}
              src="/svg/star.png"
              alt="star"
              className="size-2 lg:size-2"
            />
          ))}
        </div>
        <h2>A115</h2>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <img
              key={i}
              src="/svg/star.png"
              alt="star"
              className="size-2 lg:size-2"
            />
          ))}
        </div>
      </div>
      {/* Heading */}
      <div className="md:mt-15 mt-8  text-[3.5rem] lg:text-[9rem] md:leading-15  leading-12 font-Sora uppercase text-start lg:text-center flex flex-col lg:flex-row lg:justify-center ">
        <h1>CHASING BETTER</h1>
      </div>

      {/* Cards */}
      {/* <div className="hero-cards lg:w-[35%] w-[50%] gap-2 lg:gap-4 flex absolute top-[20%] lg:top-[50%] left-2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 font-Lato text-[0.3rem] lg:text-sm"> */}
      <div className="hero-cards lg:w-[35%] w-[50%] gap-2 lg:gap-4 flex absolute top-[25%] sm:top-[20%] md:top-[25%] lg:top-[50%] left-2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 font-Lato font-semibold text-[0.3rem] lg:text-sm">
        <HeroCard
          id="hero-card1"
          title="Plan"
          number="01"
          icon="/svg/octagon.png"
          bgColor="bg-Card1"
        />
        <HeroCard
          id="hero-card2"
          title="Build"
          number="02"
          icon="/svg/rhombus.png"
          bgColor="bg-Card2"
        />
        <HeroCard
          id="hero-card3"
          title="Ship"
          number="03"
          icon="/svg/round.png"
          bgColor="bg-Card3"
        />
      </div>

      {/* Bottom Left Text */}
      {/* <div className="absolute lg:bottom-15 bottom-15 mb-9 md:left-10 p-[0.35rem] font-Lato lg:w-1/2 "> */}
      <div className="absolute bottom-25 lg:bottom-19 left-2 md:left-10 mb-9 p-2 font-Lato w-[50%]">
        <div className="lg:text-[0.7rem] text-[0.75rem] bg-black text-white rounded-sm px-2 py-1 uppercase w-fit text-nowrap">
          3d software developer
        </div>
        <p className=" lg:w-[40ch] w-[30ch] text-[1.2rem] lg:text-[1.5rem]  font-semibold leading-[clamp(1.4rem, 2.5vw, 1.75rem)]  mt-2">
          i craft fast, expressive and meaningful websites for creators and
          businesses that care about quality always chasing better with every
          project i take on.
        </p>
      </div>

      {/* Bounce Dot */}
      <div className="absolute bottom-15 right-6">
        <div id="bounce-dot" className="w-2 h-2 bg-black rounded-full"></div>
      </div>
    </section>
  );
}
