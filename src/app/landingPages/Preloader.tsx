"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";
export default function Preloader() {
  gsap.registerPlugin(SplitText, CustomEase);
  const preloaderPRef = useRef(null);
  const preloaderh1Ref = useRef(null);
  const images = [
    "/images/fidelis-4.jpg",
    "/images/fidelis-3.jpg",
    "/images/fidelis-2.jpg",
    "/images/fidelis-1.jpg",
  ];

  //   useEffect(() => {
  //     if (!preloaderPRef.current || !preloaderh1Ref.current) return;

  //     CustomEase.create("hop", "0.9,0,0.1,1");

  //     const preloaderP = new SplitText(preloaderPRef.current, {
  //       type: "lines",
  //       mask: "lines",
  //     });
  //     const preloaderHeading = new SplitText(preloaderh1Ref.current, {
  //       type: "chars",
  //       mask: "chars",
  //     });

  //     const chars = preloaderHeading.chars;
  //     const lines = preloaderP.lines;
  //     const initialChar = chars[0];
  //     const finalChars = chars[chars.length - 1];
  //     // Animate heading chars
  //     chars.forEach((char, idx) => {
  //       gsap.set(char, { yPercent: idx % 2 === 0 ? -100 : 100 });
  //     });

  //     // Animate paragraph lines (optional)//
  //     lines.forEach((line) => gsap.set(line, { yPercent: 100 }));

  //     const preloadeerImages =
  //       gsap.utils.toArray<HTMLDivElement>(".preloader-img");
  //     const preloaderImagesInner =
  //       gsap.utils.toArray<HTMLImageElement>(".preloader-img img");

  //     const tl = gsap.timeline({ delay: 0.3 });

  //     tl.to(".pre-loaderbar", {
  //       scaleX: 1,
  //       duration: 4,
  //       ease: "power3.inOut",
  //     })
  //       .set(".pre-loaderbar", { transformOrigin: "right" })
  //       .to(".pre-loaderbar", { scaleX: 0, duration: 1, ease: "power3.in" });

  //     preloadeerImages.forEach((Preloaderimage, index) =>
  //       tl.to(
  //         Preloaderimage,
  //         {
  //           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //           duration: 1,
  //           ease: "hop",
  //           delay: index * 0.75,
  //         },
  //         "-=5"
  //       )
  //     );
  //     preloaderImagesInner.forEach((inner, index) =>
  //       tl.to(
  //         inner,
  //         {
  //           scale: 1,
  //           duration: 1.5,
  //           ease: "hop",
  //           delay: index * 0.75,
  //         },
  //         "-=5.25"
  //       )
  //     );

  //     tl.to(
  //       lines,
  //       {
  //         yPercent: 0,
  //         duration: 2,
  //         ease: "hop",
  //         stagger: 0.1,
  //       },
  //       "-=5.5"
  //     );
  //     tl.to(
  //       chars,
  //       {
  //         yPercent: 0,
  //         duration: 2,
  //         ease: "hop",
  //         stagger: 0.025,
  //       },
  //       "-=5"
  //     );
  //     tl.to(
  //       ".preloader-images",
  //       {
  //         clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
  //         duration: 1,
  //         ease: "hop",
  //       },
  //       "-=1.5"
  //     );
  //     tl.to(
  //       lines,
  //       {
  //         y: "-125%",
  //         duration: 2,
  //         ease: "hop",
  //         stagger: 0.1,
  //       },
  //       "-=2"
  //     );

  //     tl.to(chars, {
  //       yPercent: (index) => {
  //         if (index === 0 || index === chars.length - 1) {
  //           return 0;
  //         }
  //         return index % 2 === 0 ? 100 : -100;
  //       },
  //       duration: 1,
  //       ease: "hop",
  //       stagger: 0.25,
  //       delay: 0.5,
  //       onStart: () => {
  //         const initailCharMask = initialChar.parentElement;
  //         const finalCharMask = finalChars.parentElement;

  //         if (
  //           initailCharMask &&
  //           initailCharMask?.classList.contains("char-mask")
  //         ) {
  //           initailCharMask.style.overflow = "visible";
  //         }
  //         if (finalCharMask && finalCharMask?.classList.contains("char-mask")) {
  //           finalCharMask.style.overflow = "visible";
  //         }

  //         const viewPortWidth = window.innerWidth;
  //         const context = viewPortWidth / 2;
  //         const initalCharRect = initialChar.getBoundingClientRect();
  //         const finalCharRect = finalChars.getBoundingClientRect();

  //         gsap.to([initialChar, finalChars], {
  //           duration: 1,
  //           ease: "hop",
  //           delay: 0.4,
  //           x: (i) => {
  //             if (i === 0) {
  //               return context - initalCharRect.left - initalCharRect.width;
  //             } else {
  //               return context - initalCharRect.left;
  //             }
  //           },
  //           onComplete: () => {
  //             gsap.set(".preloader-header", {
  //               mixBlendMode: "difference",
  //             }),
  //               gsap.to(".preloader-header", {
  //                 y: "2rem",
  //                 scale: 0.35,
  //                 duration: 1.75,
  //                 ease: "hop",
  //               });
  //           },
  //         });
  //       },
  //     });
  //   }, []);
  useEffect(() => {
    if (!preloaderPRef.current || !preloaderh1Ref.current) return;

    gsap.registerPlugin(SplitText, CustomEase);
    CustomEase.create("hop", "0.9,0,0.1,1");

    // Split heading into characters and paragraph into lines
    const headingSplit = new SplitText(preloaderh1Ref.current, {
      type: "chars",
      mask: "chars",
    });
    const paragraphSplit = new SplitText(preloaderPRef.current, {
      type: "lines",
      mask: "lines",
    });

    const chars = headingSplit.chars;
    const lines = paragraphSplit.lines;
    const firstChar = chars[0];
    const lastChar = chars[chars.length - 1];
    const middleChars = chars.slice(1, -1);

    // Set initial positions
    chars.forEach((char, i) => {
      if (i === 0 || i === chars.length - 1) {
        gsap.set(char, { yPercent: 0 }); // first/last char stays
      } else {
        gsap.set(char, { yPercent: i % 2 === 0 ? -100 : 100 }); // middle chars up/down
      }
    });

    lines.forEach((line) => gsap.set(line, { yPercent: 100 }));

    const preloaderImages =
      gsap.utils.toArray<HTMLDivElement>(".preloader-img");
    const preloaderImagesInner =
      gsap.utils.toArray<HTMLImageElement>(".preloader-img img");

    // Create timeline
    const tl = gsap.timeline({ delay: 0.3 });

    // Progress bar animation
    tl.to(".pre-loaderbar", { scaleX: 1, duration: 4, ease: "power3.inOut" })
      .set(".pre-loaderbar", { transformOrigin: "right" })
      .to(".pre-loaderbar", { scaleX: 0, duration: 1, ease: "power3.in" });

    // Animate preloader images
    preloaderImages.forEach((img, idx) =>
      tl.to(
        img,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: "hop",
          delay: idx * 0.75,
        },
        "-=4.5"
      )
    );

    preloaderImagesInner.forEach((imgInner, idx) =>
      tl.to(
        imgInner,
        {
          scale: 1,
          duration: 1.5,
          ease: "hop",
          delay: idx * 0.75,
        },
        "-=4.75"
      )
    );

    // Animate paragraph lines
    tl.to(
      lines,
      {
        yPercent: 0,
        duration: 2,
        ease: "hop",
        stagger: 0.1,
      },
      "-=5.5"
    );

    // Animate middle characters up/down
    tl.to(
      middleChars,
      {
        yPercent: 0,
        duration: 1.5,
        ease: "hop",
        stagger: 0.025,
      },
      "-=5"
    );

    // Move first and last characters to header
    tl.to([firstChar, lastChar], {
      yPercent: -100, // move upward
      duration: 1,
      ease: "hop",
      onComplete: () => {
        // center horizontally and shrink heading
        const viewportWidth = window.innerWidth;
        const firstRect = firstChar.getBoundingClientRect();
        const lastRect = lastChar.getBoundingClientRect();
        gsap.to([firstChar, lastChar], {
          x: (el, i) => {
            const rect = i === 0 ? firstRect : lastRect;
            return viewportWidth / 2 - rect.left - rect.width / 2;
          },
          y: "2rem",
          scale: 0.35,
          duration: 1.75,
          ease: "hop",
        });
      },
    });

    // Hide preloader images
    tl.to(
      ".preloader-images",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        duration: 1,
        ease: "hop",
      },
      "-=1.5"
    );

    // Move paragraph lines up/out
    tl.to(
      lines,
      {
        y: "-125%",
        duration: 2,
        ease: "hop",
        stagger: 0.1,
      },
      "-=2"
    );
  }, []);

  return (
    <section className="pre-loader fixed top-0 left-0 w-screen h-screen overflow-hidden z-10 bg-Bg ">
      <div className="pre-loaderbar absolute left-0 w-full h-2 top-0 bg-black scale-x-0 origin-left will-change-transform"></div>
      <div className="preloader-images absolute  top-[35%] lg:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10rem] lg:w-[25rem] h-[10rem] lg:h-[25rem] overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="preloader-img absolute w-full h-full overflow-hidden"
          >
            <img
              className="w-full h-full relative will-change-transform scale-[2] object-cover"
              //   height={300}
              //   width={300}
              src={img}
              alt={`fidelis images`}
            />
          </div>
        ))}
      </div>
      <div className="preloader-copy absolute bottom-[5rem] left-1/2 -translate-x-1/2  w-[80%] lg:w-[30%]">
        <p
          ref={preloaderPRef}
          className="uppercase text-center text-sm font-semibold"
        >
          A fullstack developer with 4 years of experience. obsessed with web
          animations, getting better and chess
        </p>
      </div>
      <div className="preloader-header  fixed w-full flex justify-center items-center translate-y-[50svh] lg:translate-y-[60svh] origin-top will-change-transform z-11">
        <Link href="/">
          <h1
            ref={preloaderh1Ref}
            className="uppercase text-[3rem] lg:text-[8rem] lg:leading-[1] font-Sora"
          >
            Eugene Fidelis
          </h1>
        </Link>
      </div>
    </section>
  );
}
