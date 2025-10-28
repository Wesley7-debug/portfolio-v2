// import React from "react";

// export default function Footer() {
//   const data1 = ["Work", "About", "Service", "Blog"];
//   const data2 = ["Linkedin", "Github", "Twitter", "Instagram"];

//   return (
//     <section className="w-screen h-screen bg-Bg relative overflow-hidden font-Lato pt-20">
//       <div className=" w-full flex justify-between px-8 flex-col lg:flex-row ">
//         <div className="flex gap-16 lg:flex-row flex-col">
//           <div className="flex gap-10  items-baseline">
//             <h3 className="text-Bg2 uppercase text-sm font-semibold">
//               Explore
//             </h3>
//             <div>
//               {" "}
//               {data1.map((item, idx) => (
//                 <h2
//                   key={idx}
//                   className="lg:text-[2.4rem] text-3xl text-black font-bold mt-0.5 relative"
//                 >
//                   {item}
//                   <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white block"></span>
//                 </h2>
//               ))}
//             </div>
//           </div>
//           <div className="flex gap-10 items-baseline">
//             <h3 className="text-Bg2 uppercase text-sm font-semibold">
//               {" "}
//               Stalk Me{" "}
//             </h3>
//             <div>
//               {" "}
//               {data2.map((item, idx) => (
//                 <h2
//                   key={idx}
//                   className="lg:text-[2.5rem] text-3xl text-black font-bold mt-0.5"
//                 >
//                   {item}
//                 </h2>
//               ))}
//             </div>
//           </div>
//           <div className="flex flex-col gap-18 ">
//             <div className="flex flex-col lg:items-end gap-2">
//               <h3 className="text-Bg2 uppercase text-sm ">Say Hello</h3>

//               <h2 className="text-xl">
//                 <a
//                   href="mailto:eugenefidelis573@gmail.com"
//                   className="hover:underline"
//                 >
//                   eugenefidelis573@gmail.com
//                 </a>
//               </h2>
//             </div>
//             <div className="flex flex-col lg:items-end gap-2">
//               <h3 className="text-Bg2 uppercase text-sm ">PHONE</h3>

//               <h2 className="text-xl">
//                 <a
//                   href="mailto:eugenefidelis573@gmail.com"
//                   className="hover:underline"
//                 >
//                   +234 (0)9015652663
//                 </a>
//               </h2>
//             </div>
//           </div>{" "}
//         </div>
//       </div>
//       <div className="w-full  absolute bottom-10 left-1/2 -translate-x-1/2  ">
//         {" "}
//         <h1
//           className="text-[3rem] lg:text-[9rem] md:leading-15  leading-12 font-Sora
//        uppercase "
//         >
//           CHASING BETTER
//         </h1>
//         <div className="w-full text-sm flex mt-8 justify-between px-8 ">
//           <p>all right reserved</p> <p>based in PH,Nigeria</p>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CornerDownRight } from "lucide-react";

export default function Footer() {
  const data1 = ["Work", "About", "Service", "Blog"];
  const data2 = ["Linkedin", "Github", "Twitter", "Instagram"];

  // Refs for GSAP hover animations
  const emailRef = useRef<HTMLAnchorElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);
  const exploreRefs = useRef<HTMLHeadingElement[]>([]);
  const stalkRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const animateHover = (target: HTMLElement) => {
      const underline = target.querySelector(".underline") as HTMLElement;
      const arrow = target.querySelector(".arrow") as HTMLElement;
      gsap.to(underline, { width: "100%", duration: 0.4, ease: "power3.out" });
      if (arrow)
        gsap.to(arrow, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" });
    };

    const animateLeave = (target: HTMLElement) => {
      const underline = target.querySelector(".underline") as HTMLElement;
      const arrow = target.querySelector(".arrow") as HTMLElement;
      gsap.to(underline, { width: "0%", duration: 0.4, ease: "power3.inOut" });
      if (arrow)
        gsap.to(arrow, {
          opacity: 0,
          y: 5,
          duration: 0.3,
          ease: "power3.inOut",
        });
    };

    const allLinks = [
      emailRef.current,
      phoneRef.current,
      ...exploreRefs.current,
      ...stalkRefs.current,
    ].filter(Boolean) as HTMLElement[];

    allLinks.forEach((el) => {
      el.addEventListener("mouseenter", () => animateHover(el));
      el.addEventListener("mouseleave", () => animateLeave(el));
    });

    return () => {
      allLinks.forEach((el) => {
        el.removeEventListener("mouseenter", () => animateHover(el));
        el.removeEventListener("mouseleave", () => animateLeave(el));
      });
    };
  }, []);

  return (
    <section className="w-screen max-h-screen z-3 h-full bg-Bg relative overflow-hidden font-Lato sm:pt-12 pt-7  flex flex-col justify-betweaen">
      {/* ====== Top section ====== */}
      <div className="w-full flex flex-col md:flex-row justify-between px-6 md:px-12 gap-12 md:gap-20 whitespace-nowrap">
        {/* ---- Explore ---- */}
        <div className="flex flex-row sm:gap-7 md:gap-9 gap-7 lg:gap-10 items-start">
          <h3 className="text-Bg2 uppercase text-sm font-semibold">Explore</h3>
          <div className="space-y-1 flex flex-col">
            {data1.map((item, idx) => (
              <h2
                key={idx}
                ref={(el) => {
                  if (el) exploreRefs.current[idx] = el;
                }}
                className="md:text-[2.4rem] text-xl text-black font-bold relative cursor-pointer w-fit inline-block"
              >
                {item}
                <span className="underline absolute left-0 bottom-0 w-0 h-[1px] bg-black"></span>
              </h2>
            ))}
          </div>
        </div>

        {/* ---- Stalk Me ---- */}
        <div className="flex flex-row sm:gap-7 md:gap-9 gap-7 lg:gap-10  items-start">
          <h3 className="text-Bg2 uppercase text-sm font-semibold">Stalk Me</h3>
          <div className="space-y-1 flex flex-col">
            {data2.map((item, idx) => (
              <h2
                key={idx}
                ref={(el) => {
                  if (el) stalkRefs.current[idx] = el;
                }}
                className="md:text-[2.5rem] text-xl text-black font-bold relative cursor-pointer w-fit inline-block"
              >
                {item}
                <span className="underline absolute left-0 bottom-0 w-0 h-[1px] bg-black"></span>
              </h2>
            ))}
          </div>
        </div>

        {/* ---- Contact Section ---- */}
        <div className="flex flex-col gap-8 md:items-end">
          {/* Email */}
          <div className="flex flex-col md:items-end gap-1">
            <h3 className="text-Bg2 uppercase text-[0.5rem]">Say Hello</h3>
            <h2 className="text-base flex items-center gap-1 w-fit relative">
              <a
                ref={emailRef}
                href="mailto:eugenefidelis573@gmail.com"
                className="relative inline-flex items-center  text-black no-wrap"
              >
                eugenefidelis573@gmail.com
                <span className="underline absolute bottom-0 left-0 w-0 h-[1px] bg-black hidden lg:block"></span>
                <span className="underline absolute bottom-0 left-0 w-full h-[1px] bg-black lg:hidden block"></span>
                <span className="arrow opacity-0 ml-1 translate-y-[5px] inline-block">
                  ↘
                </span>
              </a>
            </h2>
          </div>

          {/* Phone */}
          <div className="flex flex-col  md:items-end">
            <h3 className="text-Bg2 uppercase text-sm">Phone</h3>

            <h2 className="text-base flex items-center gap-1 w-fit relative">
              <a
                ref={phoneRef}
                href="tel:+2349015652663"
                className="relative inline-flex items-center text-black no-wrap"
              >
                +234 (0)9015652663
                <span className="underline absolute bottom-0 left-0 w-0 h-[1px] bg-black hidden lg:block"></span>
                <span className="underline absolute bottom-0 left-0 w-full h-[1px] bg-black lg:hidden block"></span>
                <span className="arrow opacity-0 ml-1 translate-y-[5px] inline-block">
                  ↘
                </span>
              </a>
            </h2>
          </div>
        </div>
      </div>

      {/* ====== Bottom section ====== */}
      <div className="w-full text-center justify-end flex flex-col h-full pb-10 mt-30">
        <h1 className="text-[2.5rem] sm:text-[10vw] md:text-[11vw] leading-tight font-Sora uppercase tracking-tight">
          CHASING BETTER
        </h1>
        <div className="w-full text-sm flex  sm:flex-col md:flex-row justify-between px-8 md:px-20 text-gray-600">
          <p>All rights reserved</p>
          <p>Based in PH, Nigeria</p>
        </div>
      </div>
    </section>
  );
}
