// "use client";

// import React from "react";
// import { MoveLeftIcon } from "lucide-react";
// import Cta from "./Cta";
// import HeroCard from "./HeroCard";
// import Image from "next/image";
// type WorkModalProps = {
//   work: {
//     title: string;
//     number: string;
//     image: string[];
//     items?: {
//       title: string;
//       subtitle: string;
//       image: string;
//       link: string;
//     }[];
//   };
//   variant: string;
//   onClose: () => void;
// };

// export default function WorkModal({ work, variant, onClose }: WorkModalProps) {
//   const variantColor =
//     variant === "variant-1"
//       ? "bg-Card1"
//       : variant === "variant-2"
//       ? "bg-Card2"
//       : "bg-Card3";

//   const heroCardProps =
//     variant === "variant-1"
//       ? {
//           id: "hero-card1",
//           title: "Plan",
//           number: "01",
//           icon: "/svg/octagon.png",
//           bgColor: "bg-Card1",
//         }
//       : variant === "variant-2"
//       ? {
//           id: "hero-card2",
//           title: "Build",
//           number: "02",
//           icon: "/svg/rhombus.png",
//           bgColor: "bg-Card2",
//         }
//       : {
//           id: "hero-card3",
//           title: "Ship",
//           number: "03",
//           icon: "/svg/round.png",
//           bgColor: "bg-Card3",
//         };

//   return (
//     // <section className="w-screen h-[150vh] flex lg:flex-row flex-col fixed inset-0 bg-Bg mt-20 z-10">
//     <>
//       {/* <section className="w-screen min-h-screen h-full flex lg:flex-row flex-col fixed inset-0 bg-Bg mt-20 z-10 overflow-y-auto"> */}
//       <section className="fixed inset-0 z-50 w-screen h-full  bg-Bg overflow-y-auto pt-20">
//         {/* Left side */}
//         <div className="flex lg:flex-row flex-col w-full h-full">
//           <div className="lg:w-[30%] w-full flex flex-col items-start  pt-1 relative mb-9 lg:mb-0">
//             <div
//               className="flex justify-baseline px-10 cursor-pointer"
//               onClick={onClose}
//             >
//               <button>
//                 <MoveLeftIcon size={16} strokeWidth={4} />
//               </button>
//               <h1 className="font-PlayFair ml-3 uppercase lg:font-semibold">
//                 SEE ALL WORKS
//               </h1>
//             </div>

//             <div className="w-full h-full absolute top-60 left-[30%] hidden lg:block">
//               <HeroCard {...heroCardProps} />
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="lg:w-[70%] h-full flex flex-col bg-Bg">
//             {/* Heading with polygon background */}
//             <div
//               className={`relative w-[28%] ${variantColor} h-[30px] px-10 pt-6 pb-10 font-serif`}
//             >
//               <span className="absolute top-3 left-3 text-xs font-mono px-4 pt-2 mb-5">
//                 {work.number}
//               </span>

//               <div
//                 className={`absolute top-0 lg:-right-15 -right-14.5 h-full w-20 ${variantColor}`}
//                 style={{
//                   clipPath: "polygon(0 0, 25% 0, 100% 100%, 30% 100%)",
//                 }}
//               />
//             </div>

//             {/* Grid with works */}
//             <div className={`px-6 flex-grow w-full ${variantColor}`}>
//               <h1 className="text-7xl font-PlayFair leading-tight">
//                 {work.title}
//               </h1>

//               <div className="mb-7 mt-3 w-full border-b border-black border-dotted"></div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
//                 {work.items?.map((item, i) => (
//                   <div
//                     key={i}
//                     className="text-black relative flex-1 aspect-[4/3]"
//                   >
//                     <div className="bg-black w-full h-full relative">
//                       <span className="absolute top-2 left-2 text-xs font-mono">
//                         {String(i + 1).padStart(2, "0")}
//                       </span>
//                       <Image
//                         width={800}
//                         height={800}
//                         src={
//                           item.image || "https://via.placeholder.com/300x200"
//                         }
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <p className="uppercase text-sm font-Lato tracking-widest mt-2.5">
//                       {item.title}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full mt-2">
//           <Cta />
//         </div>
//       </section>
//     </>
//   );
// }
"use client";
import React from "react";
import { MoveLeftIcon } from "lucide-react";
import Cta from "./Cta";
import HeroCard from "./HeroCard";
import Image from "next/image";

type WorkModalProps = {
  work: {
    title: string;
    number: string;
    image: string[];
    items?: {
      title: string;
      subtitle: string;
      image: string;
      link: string;
    }[];
  };
  variant: string;
  onClose: () => void;
};

export default function WorkModal({ work, variant, onClose }: WorkModalProps) {
  const variantColor =
    variant === "variant-1"
      ? "bg-Card1"
      : variant === "variant-2"
      ? "bg-Card2"
      : "bg-Card3";

  const heroCardProps =
    variant === "variant-1"
      ? {
          id: "hero-card1",
          title: "Plan",
          number: "01",
          icon: "/svg/octagon.png",
          bgColor: "bg-Card1",
        }
      : variant === "variant-2"
      ? {
          id: "hero-card2",
          title: "Build",
          number: "02",
          icon: "/svg/rhombus.png",
          bgColor: "bg-Card2",
        }
      : {
          id: "hero-card3",
          title: "Ship",
          number: "03",
          icon: "/svg/round.png",
          bgColor: "bg-Card3",
        };

  return (
    <section className="fixed inset-0 z-50 w-screen overflow-hidden min-h-screen bg-Bg overflow-y-auto pt-20">
      {/* Left + Right layout */}
      <div className="flex lg:flex-row flex-col w-full h-full relative">
        {/* LEFT SIDE */}
        <div className="lg:w-[30%] w-full flex flex-col items-start pt-1 relative mb-9 lg:mb-0">
          <div
            className="flex justify-baseline px-10 cursor-pointer"
            onClick={onClose}
          >
            <button>
              <MoveLeftIcon size={16} strokeWidth={4} />
            </button>
            <h1 className="font-PlayFair ml-3 uppercase lg:font-semibold">
              SEE ALL WORKS
            </h1>
          </div>

          <div className="w-full h-full absolute top-60 left-[30%] hidden lg:block">
            <HeroCard {...heroCardProps} />
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-[70%] h-full flex flex-col bg-Bg">
          {/* Header Section */}
          <div
            className={`relative w-[28%] ${variantColor} h-[30px] px-10 pt-6 pb-10 font-serif`}
          >
            <span className="absolute top-3 left-3 text-xs font-mono px-4 pt-2 mb-5">
              {work.number}
            </span>
            <div
              className={`absolute top-0 lg:-right-15 -right-14.5 h-full w-20 ${variantColor}`}
              style={{
                clipPath: "polygon(0 0, 25% 0, 100% 100%, 30% 100%)",
              }}
            />
          </div>

          {/* Content Section */}
          <div className={`px-6 w-full flex flex-col ${variantColor}`}>
            <h1 className="text-7xl font-PlayFair leading-tight">
              {work.title}
            </h1>

            <div className="mb-7 mt-3 w-full border-b border-black border-dotted"></div>

            {/* Flex layout for cards */}
            <div className="flex flex-wrap justify-between gap-y-10">
              {work.items?.map((item, i) => (
                <div
                  key={i}
                  className="relative text-black aspect-[4/3] w-[48%] lg:w-[30%] flex flex-col"
                >
                  <div className="bg-black w-full h-full relative">
                    <span className="absolute top-2 left-2 text-xs font-mono text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Image
                      width={800}
                      height={800}
                      src={item.image || "https://via.placeholder.com/300x200"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="uppercase text-sm font-Lato tracking-widest mt-2.5">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA after the flex cards, full width */}
        </div>
      </div>
    </section>
  );
}
