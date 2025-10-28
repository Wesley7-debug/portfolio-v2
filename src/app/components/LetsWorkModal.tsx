// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { X } from "lucide-react";

// const categories = [
//   "Brand Strategy",
//   "Identity",
//   "Website",
//   "Product design",
//   "Other",
// ];
// const budgets = ["Under 10k", "€10k–€20k", "€20k–€50k", "€50k–€100k", "€100k+"];

// export default function LetsWorkModal({ onClose }: { onClose?: () => void }) {
//   const modalRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const tlRef = useRef<gsap.core.Timeline | null>(null);

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const mouseX = useRef(0);
//   const mouseY = useRef(0);
//   const xRef = useRef<HTMLDivElement>(null);
//   const closeRef = useRef<HTMLDivElement>(null);

//   const isDarkBg = selectedCategory !== null || selectedBudget !== null;

//   // Add this inside your component

//   useEffect(() => {
//     const overlay = document.getElementById("modal-overlay");
//     if (!overlay || !xRef.current) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.current = e.clientX;
//       mouseY.current = e.clientY;
//     };

//     overlay.addEventListener("mousemove", handleMouseMove);

//     // Animate the X to follow cursor smoothly
//     const anim = gsap.to(xRef.current, {
//       x: () => mouseX.current,
//       y: () => mouseY.current,
//       ease: "power3.out",
//       duration: 0.3,
//       repeat: -1,
//       yoyo: false,
//     });

//     return () => {
//       overlay.removeEventListener("mousemove", handleMouseMove);
//       anim.kill();
//     };
//   }, []);

//   useEffect(() => {
//     const anim = gsap.to(
//       xRef.current,

//       {
//         duration: 0.016,
//         repeat: -1,
//         onRepeat: () => {
//           if (xRef.current)
//             gsap.set(xRef.current, { x: mouseX.current, y: mouseY.current });
//           if (closeRef.current)
//             gsap.to(closeRef.current, {
//               x: mouseX.current,
//               y: mouseY.current,
//               duration: 0.25,
//               ease: "power3.out",
//             });
//         },
//       }
//     );
//     return () => anim.kill();
//   }, []);

//   /** Prevent background scroll */
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   /** Animate modal open */
//   useEffect(() => {
//     if (!modalRef.current || !contentRef.current) return;
//     const width = window.innerWidth >= 768 ? 720 : window.innerWidth * 0.9;

//     const tl = gsap.timeline();
//     tl.fromTo(
//       modalRef.current,
//       { width: 0, opacity: 0 },
//       { width, opacity: 1, duration: 0.6, ease: "power2.out" }
//     );
//     tl.fromTo(
//       contentRef.current,
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
//       "-=0.4"
//     );
//     tlRef.current = tl;
//   }, []);

//   /** Close modal */
//   const handleClose = () => {
//     if (isClosing) return;
//     if (!tlRef.current || !modalRef.current || !contentRef.current) {
//       onClose?.();
//       return;
//     }

//     setIsClosing(true);

//     const tl = gsap.timeline({ onComplete: () => onClose?.() });
//     tl.to(contentRef.current, {
//       scale: 0.8,
//       opacity: 0,
//       duration: 0.4,
//       ease: "power3.in",
//     });
//     tl.to(
//       modalRef.current,
//       { width: 0, opacity: 0, duration: 0.6, ease: "power2.in" },
//       "-=0.2"
//     );
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const payload = {
//       category: selectedCategory,
//       budget: selectedBudget,
//       ...formData,
//     };

//     try {
//       const res = await fetch("/api/start-project", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Network response not ok");

//       alert("Project submitted! Thank you.");
//       handleClose();
//     } catch {
//       alert("Failed to submit, please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div
//       id="modal-overlay"
//       className={`fixed inset-0 z-[9999] flex py-10 md:py-0 backdrop-blur-sm transition-colors duration-300 ${
//         isDarkBg ? "bg-black/70" : "bg-black/40"
//       }`}
//     >
//       <div
//         ref={modalRef}
//         className="bg-white rounded-2xl shadow-xl flex flex-col relative overflow-hidden p-4 md:p-10 md:rounded-2xl md:min-h-[600px]"
//         style={{
//           maxWidth: "720px",
//           width: "90%",
//           pointerEvents: isClosing ? "none" : "auto",
//           height: "auto",
//           margin: "auto",
//         }}
//       >
//         <div
//           ref={contentRef}
//           className="relative flex flex-col w-full opacity-0 scale-90 overflow-y-auto"
//         >
//           {/* Mobile Close */}
//           <button
//             onClick={handleClose}
//             aria-label="Close modal"
//             className="absolute right-6 top-2 ml-5 text-2xl font-bold text-gray-600 hover:text-black transition md:hidden w-8 h-8 rounded-full border border-gray-300 bg-white shadow-md"
//           >
//             ×
//           </button>

//           <h1 className="text-4xl md:text-5xl font-semibold font-[Playfair_Display] mb-10">
//             Start a project
//           </h1>

//           <form className="flex flex-col w-full gap-8" onSubmit={handleSubmit}>
//             {/* Categories */}
//             <div>
//               <h2 className="text-gray-800 mb-3 font-medium">
//                 What can we do for you?
//               </h2>
//               <div className="flex flex-wrap gap-3">
//                 {categories.map((c) => (
//                   <button
//                     key={c}
//                     type="button"
//                     onClick={() =>
//                       setSelectedCategory((prev) => (prev === c ? null : c))
//                     }
//                     className={`px-5 py-2 rounded-full border text-sm transition ${
//                       selectedCategory === c
//                         ? "bg-gray-900 text-white border-gray-900"
//                         : "border-gray-300 text-gray-800 hover:border-gray-700 hover:text-black"
//                     }`}
//                   >
//                     {c}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Budgets */}
//             <div>
//               <h2 className="text-gray-800 mb-3 font-medium">
//                 Do you have a budget range?
//               </h2>
//               <div className="flex flex-wrap gap-3">
//                 {budgets.map((b) => (
//                   <button
//                     key={b}
//                     type="button"
//                     onClick={() =>
//                       setSelectedBudget((prev) => (prev === b ? null : b))
//                     }
//                     className={`px-5 py-2 rounded-full border text-sm transition ${
//                       selectedBudget === b
//                         ? "bg-gray-900 text-white border-gray-900"
//                         : "border-gray-300 text-gray-800 hover:border-gray-700 hover:text-black"
//                     }`}
//                   >
//                     {b}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Inputs */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-full hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-full hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
//               />
//             </div>

//             <textarea
//               name="message"
//               placeholder="Sell your dream!"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="w-full px-4 py-7 border border-gray-300 rounded-2xl hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition resize-none"
//             />

//             <div className="flex justify-end md:justify-end">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-Bg2 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Desktop Close */}
//       <div className="hidden lg:flex items-center cursor-pointer z-[999] justify-baseline h-full flex-1 pl-10">
//         <div
//           ref={xRef}
//           className="hidden lg:flex bg-white w-9 h-9 rounded-full items-center justify-center shadow-md absolute pointer-events-none z-[10000]"
//         >
//           <X className="text-black" strokeWidth={3} />
//         </div>

//         <div
//           ref={closeRef}
//           className="text-black bg-white rounded-full py-2 px-3 ml-2"
//           onClick={handleClose}
//         >
//           <h1 className="font-Sora">close</h1>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

const categories = [
  "Brand Strategy",
  "Identity",
  "Website",
  "Product design",
  "Other",
];
const budgets = ["Under 10k", "€10k–€20k", "€20k–€50k", "€50k–€100k", "€100k+"];

export default function LetsWorkModal({ onClose }: { onClose?: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const xRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isDarkBg = selectedCategory !== null || selectedBudget !== null;

  /** Prevent background scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /** Modal open animation */
  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return;
    const width = window.innerWidth >= 768 ? 720 : window.innerWidth * 0.9;
    const tl = gsap.timeline();
    tl.fromTo(
      modalRef.current,
      { width: 0, opacity: 0 },
      { width, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
    tl.fromTo(
      contentRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  /** Cursor follow logic */
  useEffect(() => {
    const xEl = xRef.current;
    const closeEl = closeRef.current;
    if (!xEl || !closeEl) return;

    const coords = { x: 0, y: 0 };
    const posX = { x: 0, y: 0 };
    const posClose = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Ignore elements with class 'custom-cursor-ignore'
      if (target.closest(".custom-cursor-ignore")) return;
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smooth X button follows mouse faster
      posX.x += (coords.x - posX.x) * 0.25;
      posX.y += (coords.y - posX.y) * 0.25;
      xEl.style.transform = `translate3d(${posX.x}px, ${posX.y}px, 0)`;

      // Smooth close text follows mouse slower for trailing effect
      posClose.x += (coords.x - posClose.x) * 0.15;
      posClose.y += (coords.y - posClose.y) * 0.15;
      closeEl.style.transform = `translate3d(${posClose.x}px, ${posClose.y}px, 0)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /** Scroll-triggered close */
  useEffect(() => {
    const handleScroll = () => {
      if (!modalRef.current) return;
      const rect = modalRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) handleClose();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    if (!modalRef.current || !contentRef.current) {
      onClose?.();
      return;
    }
    const tl = gsap.timeline({ onComplete: () => onClose?.() });
    tl.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
    });
    tl.to(
      modalRef.current,
      { width: 0, opacity: 0, duration: 0.6, ease: "power2.in" },
      "-=0.2"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      category: selectedCategory,
      budget: selectedBudget,
      ...formData,
    };
    try {
      const res = await fetch("/api/start-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response not ok");
      alert("Project submitted! Thank you.");
      handleClose();
    } catch {
      alert("Failed to submit, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="modal-overlay"
      className={`fixed inset-0 z-[9999] flex py-10 custom-cursor-ignore md:py-0 backdrop-blur-sm transition-colors duration-300 ${
        isDarkBg ? "bg-black/70" : "bg-black/40"
      }`}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-xl flex flex-col relative overflow-y-auto p-4 md:p-10 md:rounded-2xl md:min-h-[600px]"
        style={{
          maxWidth: "720px",
          width: "90%",
          pointerEvents: isClosing ? "none" : "auto",
          height: "auto",
          margin: "auto",
        }}
      >
        <div
          ref={contentRef}
          className="relative flex flex-col w-full opacity-0 scale-90 overflow-y-auto custom-cursor-ignore"
        >
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute right-6 top-2 ml-5 text-2xl font-bold text-gray-600 hover:text-black transition md:hidden w-8 h-8 rounded-full border border-gray-300 bg-white shadow-md"
          >
            ×
          </button>
          <h1 className="text-4xl md:text-5xl font-semibold font-[Playfair_Display] mb-10">
            Start a project
          </h1>
          <form className="flex flex-col w-full gap-8" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-gray-800 mb-3 font-medium">
                What can we do for you?
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() =>
                      setSelectedCategory((prev) => (prev === c ? null : c))
                    }
                    className={`px-5 py-2 rounded-full border text-sm transition ${
                      selectedCategory === c
                        ? "bg-gray-900 text-white border-gray-900"
                        : "border-gray-300 text-gray-800 hover:border-gray-700 hover:text-black"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-gray-800 mb-3 font-medium">
                Do you have a budget range?
              </h2>
              <div className="flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() =>
                      setSelectedBudget((prev) => (prev === b ? null : b))
                    }
                    className={`px-5 py-2 rounded-full border text-sm transition ${
                      selectedBudget === b
                        ? "bg-gray-900 text-white border-gray-900"
                        : "border-gray-300 text-gray-800 hover:border-gray-700 hover:text-black"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              />
            </div>
            <textarea
              name="message"
              placeholder="Sell your dream!"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-7 border border-gray-300 rounded-2xl hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition resize-none"
            />
            <div className="flex justify-end md:justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-Bg2 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom cursor elements */}
      <div className="hidden lg:flex items-center cursor-pointer z-[999] justify-baseline h-full flex-1 pl-10">
        <div
          onClick={handleClose}
          ref={xRef}
          className="hidden lg:flex bg-white w-9 h-9 rounded-full items-center justify-center mt-[2px]  shadow-md pointer-events-none z-[10000]"
        >
          <X className="text-black" strokeWidth={3} />
        </div>
        <div
          onClick={handleClose}
          ref={closeRef}
          className="text-black bg-white rounded-full py-2 px-3 "
        >
          <h1 className="font-Sora">close</h1>
        </div>
      </div>
    </div>
  );
}
