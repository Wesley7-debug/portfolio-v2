/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { RealWorkData } from "../../data/RealWorkData";
import Image from "next/image";
import "../work/work-styles.css";
import gsap from "gsap";
import WorkModal from "@/app/components/WorkModal";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const [variant, setVariant] = useState<string | null>(null);
  const variantClasses = ["variant-1", "variant-2", "variant-3"];

  let globalIndex = 0;
  // useEffect(() => {
  //   const isMobile = window.innerWidth < 1000;
  //   const folderWrappers = document.querySelectorAll(".folder-wrapper");
  //   const folders = document.querySelectorAll(".folder");

  //   // folders.forEach((itm, idx) => {
  //   //   gsap.from(folders, {
  //   //     y: 100,
  //   //     duration: 1,
  //   //     ease: "power4.inOut",
  //   //     stagger: idx * 0.5,
  //   //   });
  //   // });

  //   const setInitialPosition = () => {
  //     gsap.set(folderWrappers, { y: isMobile ? 0 : -25 });
  //   };

  //   folders.forEach((folder, idx) => {
  //     const previewImages = folder.querySelectorAll(".folderimg");

  //     folder.addEventListener("mouseenter", () => {
  //       if (isMobile) return;

  //       folders.forEach((siblingsFolder) => {
  //         if (siblingsFolder !== folder) {
  //           siblingsFolder.classList.add("disabled");
  //         }
  //       });

  //       gsap.to(folderWrappers[idx], {
  //         y: 0,
  //         duration: 0.25,
  //         ease: "back.inOut",
  //       });
  //       previewImages.forEach((img, imgIdx) => {
  //         let rotation;
  //         if (imgIdx === 0) {
  //           rotation = gsap.utils.random(-20, -10);
  //         } else if (imgIdx === 1) {
  //           rotation = gsap.utils.random(-10, 10);
  //         } else {
  //           rotation = gsap.utils.random(10, 20);
  //         }
  //         gsap.to(img, {
  //           y: "-100%",
  //           rotation: rotation,
  //           duration: 0.25,
  //           ease: "back.inOut",
  //           delay: imgIdx * 0.25,
  //         });
  //       });
  //     });
  //     folder.addEventListener("mouseleave", () => {
  //       if (isMobile) return;

  //       folders.forEach((siblingsFolder) => {
  //         siblingsFolder.classList.remove("disabled");
  //       });

  //       gsap.to(folderWrappers[idx], {
  //         y: 25,
  //         duration: 0.25,
  //         ease: "back.inOut",
  //       });
  //       previewImages.forEach((img, imgIdx) => {
  //         gsap.to(img, {
  //           y: -10,
  //           duration: 0.05,
  //           ease: "back.inOut",
  //           delay: imgIdx * 0.05,
  //         });
  //       });
  //     });
  //   });
  //   return () => {};
  // }, []);
  useEffect(() => {
    const isMobile = window.innerWidth < 1000;
    const folderWrappers = document.querySelectorAll(".folder-wrapper");
    const folders = document.querySelectorAll(".folder");

    let activeIndex = -1; // Track the currently hovered folder

    folders.forEach((folder, idx) => {
      const previewImages = folder.querySelectorAll(".folderimg");

      folder.addEventListener("mouseenter", () => {
        if (isMobile || activeIndex === idx) return;

        // Cancel previous animations
        if (activeIndex !== -1) {
          const prevWrapper = folderWrappers[activeIndex];
          const prevFolder = folders[activeIndex];
          const prevImages = prevFolder.querySelectorAll(".folderimg");

          gsap.killTweensOf([prevWrapper, ...prevImages]);

          gsap.to(prevWrapper, {
            y: 25,
            duration: 0.25,
            ease: "back.inOut",
          });

          prevImages.forEach((img, imgIdx) => {
            gsap.to(img, {
              y: -10,
              duration: 0.05,
              ease: "back.inOut",
              delay: imgIdx * 0.05,
            });
          });

          prevFolder.classList.remove("disabled");
        }

        activeIndex = idx;

        folders.forEach((siblingsFolder) => {
          if (siblingsFolder !== folder) {
            siblingsFolder.classList.add("disabled");
          }
        });

        gsap.to(folderWrappers[idx], {
          y: 0,
          duration: 0.25,
          ease: "back.inOut",
        });

        previewImages.forEach((img, imgIdx) => {
          let rotation;
          if (imgIdx === 0) {
            rotation = gsap.utils.random(-15, -10);
          } else if (imgIdx === 1) {
            rotation = gsap.utils.random(-5, 10);
          } else {
            rotation = gsap.utils.random(10, 25);
          }

          gsap.to(img, {
            y: "-100%",
            rotation: rotation,
            duration: 0.35,
            ease: "back.inOut",
            delay: imgIdx * 0.05,
          });
        });
      });

      folder.addEventListener("mouseleave", () => {
        if (isMobile) return;

        // Cancel ALL GSAP animations immediately
        gsap.killTweensOf("*");

        // Reset styles instantly (no animation)
        gsap.set(folderWrappers[idx], {
          y: 25,
        });

        previewImages.forEach((img) => {
          gsap.set(img, {
            y: -10,
            rotation: 0,
          });
        });

        folders.forEach((siblingsFolder) => {
          siblingsFolder.classList.remove("disabled");
        });

        activeIndex = -1;
      });
    });

    return () => {};
  }, []);

  const handleOpenModal = (work: any, variantClass: string) => {
    setSelectedWork(work);
    setVariant(variantClass);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section className="folders w-full h-screen overflow-hidden bg-Bg relative flex flex-col lg:flex-row justify-end">
        {Array.from({ length: Math.ceil(RealWorkData.length / 2) }).map(
          (_, i) => {
            const startIndex = i * 2;
            const rowItems = RealWorkData.slice(startIndex, startIndex + 2);

            // Optional: consistent color per row

            return (
              <div key={i} className="row">
                {rowItems.map((itm, idx) => {
                  const variantClass =
                    variantClasses[globalIndex % variantClasses.length];

                  const folder = (
                    <div
                      className={`folder ${variantClass}`}
                      onClick={() => handleOpenModal(itm, variantClass)}
                    >
                      <div className="folder-preview">
                        {itm.image.map((img) => (
                          <div className="folderimg" key={img}>
                            <Image
                              src={img}
                              alt={itm.title ?? ""}
                              width={800}
                              height={600}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="folder-wrapper relative w-full h-full will-change-transform">
                        <div className="folder-index font-Lato transition-colors text-sm relative w-[40%] p-3 after:absolute after:top-0 after:left-[99%] after:h-[101%] after:aspect-[1] after:[clippath(0,0,25% 0%, 100% 100%,0 100%)] after:content-['']">
                          <p>{itm.number}</p>
                        </div>
                        <div className="folder-name w-full h-full flex items-start px-1 pl-8 transition-[background-color] duration-300">
                          <h1 className="text-4xl font-Lato transition-colors font-semibold">
                            {itm.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  );

                  globalIndex++; // Increment after each folder
                  return <React.Fragment key={idx}>{folder}</React.Fragment>;
                })}
              </div>
            );
          }
        )}
      </section>
      {selectedWork && (
        <WorkModal
          work={selectedWork}
          variant={variant ?? "variant-1"}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
