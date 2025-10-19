"use client";
import React, { useEffect, useRef } from "react";
import servicesData from "../data/ServicesData";
import "../components/styles/service-sec-style.css";
import ServicesCard from "../components/ServicesCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";

const icons = ["/svg/octagon.png", "/svg/rhombus.png", "/svg/round.png"];
const bgColors = ["#e5d9f6", "#ffd2f3", "#fcdca6"];
export default function ServiceSec() {
  const serviceSectonRef = useRef<HTMLElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  const smoothStop = (p: number) => p * p * (3 - 2 * p);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) return;
    ScrollTrigger.create({
      trigger: serviceSectonRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 3}px`,
      pin: serviceSectonRef.current,
      pinSpacing: true,
    });
    ScrollTrigger.create({
      trigger: serviceSectonRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 3}px`,
      onLeave: () => {
        const serviceRect = serviceSectonRef.current?.getBoundingClientRect();
        const serviceTop = serviceRect
          ? window.pageYOffset + serviceRect.top
          : window.pageYOffset;

        gsap.set(".cards", {
          position: "absolute",
          top: serviceTop,
          left: 0,
          width: "100vw",
          height: "100vh",
        });
      },
      onEnterBack: () => {
        gsap.set(".cards", {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        });
      },
    });

    //   ScrollTrigger.create({
    //     trigger: serviceSectonRef.current,
    //     start: "top bottom",
    //     end: `+=${window.innerHeight * 4}`,
    //     scrub: 1,
    //     onUpdate: (self) => {
    //       const progress = self.progress;
    //       const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
    //       const headerY = gsap.utils.interpolate(
    //         "400%",
    //         "0%",
    //         smoothStop(headerProgress)
    //       );
    //       gsap.set(".service-header", {
    //         y: headerY,
    //       });
    //       ["#card-1", "#card-2", "#card-3"].forEach((cardId, idx) => {
    //         const delay = idx * 0.5;
    //         const cardProgress = gsap.utils.clamp(
    //           0,
    //           1,
    //           (progress - delay * 0.1) / (0.9 - delay * 0.1)
    //         );
    //         const innderCard = document.querySelector(
    //           `${cardId}.flip-card-inner`
    //         );
    //         let y;
    //         if (cardProgress < 0.4) {
    //           const normalizeProgress = cardProgress / 0.4;
    //           y = gsap.utils.interpolate(
    //             "-100%",
    //             "50%",
    //             smoothStop(normalizeProgress)
    //           );
    //         } else if (cardProgress < 0.6) {
    //           const normalizeProgress = (cardProgress - 0.4) / 0.2;
    //           y = gsap.utils.interpolate(
    //             "50%",
    //             "0%",
    //             smoothStop(normalizeProgress)
    //           );
    //         } else {
    //           y = "0%";
    //         }
    //         let opacity;
    //         if(cardProgress < 0.2){
    //           const normalizeProgress = cardProgress / 0.2;
    //           opacity = smoothStop(normalizeProgress);
    //         } else{
    //           opacity = 1;
    //         }

    //         let x , rotate, rotateY;
    //         if(cardProgress< 0.6){
    //           x = idx === 0 ? "100%" : idx === 1 ? "0%" : "-100%";
    //           rotate = idx === 0 ? -5  : idx === 1 ? 0 : 5;
    //           rotateY = 0;
    //         } else if (cardProgress <1){
    //           const normalizeProgress = (cardProgress - 0.6) / 0.4;
    //           x = gsap.utils.interpolate(
    //             idx === 0 ? "100%" : idx === 1 ? "0%" : "-100%",
    //             "0%",
    //             smoothStop(normalizeProgress)
    //           );
    //           rotate = gsap.utils.interpolate(
    //             idx === 0 ? -5  : idx === 1 ? 0 : 5,
    //             0,
    //             smoothStop(normalizeProgress)
    //           );
    //           rotateY = gsap.utils.interpolate(
    //             0,
    //             idx === 0 ? -180 : idx === 1 ? -180 : -180,
    //             smoothStop(normalizeProgress)
    //           );
    //         } else{
    //           x = "0%";
    //           rotate = 0;
    //           rotateY = idx === 0 ? -180 : idx === 1 ? -180 : -180;
    //         }
    //         let scale;
    //         if(cardProgress< 0.4){
    //           const normalizeProgress = cardProgress / 0.4;
    //           scale = gsap.utils.interpolate(
    //             0.25,
    //             0.75,
    //             smoothStop(normalizeProgress)
    //           );
    //         } else if (cardProgress < 0.6){
    //           const normalizeProgress = (cardProgress - 0.4) / 0.2;
    //           scale = gsap.utils.interpolate(
    //             0.75,
    //             1,
    //             smoothStop(normalizeProgress)
    //           );
    //         } else{
    //           scale = 1;
    //         }

    //         gsap.set (cardId,{
    //           opacity:opacity,
    //           x:x,
    //           y:y,
    //           rotate:rotate,
    //           scale:scale,
    //         });
    //       gsap.set(innderCard, {
    //         rotationY: rotateY,
    //       });
    //     });
    // });
    ScrollTrigger.create({
      trigger: serviceSectonRef.current,
      start: "top bottom",
      end: `+=${window.innerHeight * 3}`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
        const headerY = gsap.utils.interpolate(
          "400%",
          "0%",
          smoothStop(headerProgress)
        );

        gsap.set(".service-header", {
          y: headerY,
        });

        ["#card-1", "#card-2", "#card-3"].forEach((cardId, idx) => {
          const delay = idx * 0.5;
          const cardProgress = gsap.utils.clamp(
            0,
            1,
            (progress - delay * 0.1) / (0.9 - delay * 0.1)
          );

          const innderCard = document.querySelector(
            `${cardId} .flip-card-inner`
          );

          let y;
          if (cardProgress < 0.4) {
            const normalizeProgress = cardProgress / 0.4;
            y = gsap.utils.interpolate(
              "-100%",
              "50%",
              smoothStop(normalizeProgress)
            );
          } else if (cardProgress < 0.6) {
            const normalizeProgress = (cardProgress - 0.4) / 0.2;
            y = gsap.utils.interpolate(
              "50%",
              "0%",
              smoothStop(normalizeProgress)
            );
          } else {
            y = "0%";
          }

          let opacity;
          if (cardProgress < 0.2) {
            const normalizeProgress = cardProgress / 0.2;
            opacity = smoothStop(normalizeProgress);
          } else {
            opacity = 1;
          }

          let x, rotate, rotateY;
          if (cardProgress < 0.6) {
            x = idx === 0 ? "100%" : idx === 1 ? "0%" : "-100%";
            rotate = idx === 0 ? -5 : idx === 1 ? 0 : 5;
            rotateY = 0;
          } else if (cardProgress < 1) {
            const normalizeProgress = (cardProgress - 0.6) / 0.4;
            x = gsap.utils.interpolate(
              idx === 0 ? "100%" : idx === 1 ? "0%" : "-100%",
              "0%",
              smoothStop(normalizeProgress)
            );
            rotate = gsap.utils.interpolate(
              idx === 0 ? -5 : idx === 1 ? 0 : 5,
              0,
              smoothStop(normalizeProgress)
            );
            rotateY = gsap.utils.interpolate(
              0,
              -180,
              smoothStop(normalizeProgress)
            );
          } else {
            x = "0%";
            rotate = 0;
            rotateY = -180;
          }

          let scale;
          if (cardProgress < 0.4) {
            const normalizeProgress = cardProgress / 0.4;
            scale = gsap.utils.interpolate(
              0.25,
              0.75,
              smoothStop(normalizeProgress)
            );
          } else if (cardProgress < 0.6) {
            const normalizeProgress = (cardProgress - 0.4) / 0.2;
            scale = gsap.utils.interpolate(
              0.75,
              1,
              smoothStop(normalizeProgress)
            );
          } else {
            scale = 1;
          }

          gsap.set(cardId, {
            opacity: opacity,
            x: x,
            y: y,
            rotate: rotate,
            scale: scale,
          });

          gsap.set(innderCard, {
            rotationY: rotateY,
          });
        });
      },
    });

    return () => {};
  }, []);

  return (
    <>
      <section
        ref={serviceSectonRef}
        className="service w-screen h-screen bg-Bg overflow-hidden  relative hidden lg:block"
      ></section>

      <section className="cards z-1 bg-Bg hidden lg:block">
        <div className="card-container gap-16">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={service.id}
              id={`card-${index + 1}`}
              title={service.title}
              content={service.items}
              bgColor={bgColors[index] || bgColors[0]}
              icon={icons[index] || icons[0]} // fallback to first icon if index out of range
              number={(index + 1).toString().padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      <div className="w-full relative z-3 flex justify-center items-center">
        <Button title="My Approach" />
      </div>
    </>
  );
}
