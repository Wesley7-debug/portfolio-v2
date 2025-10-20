// import React, { useEffect, useRef, ReactElement, ReactNode } from "react";
// import gsap from "gsap";

// interface MagneticProps {
//   children: ReactElement;
// }

// const Magnetic: React.FC<MagneticProps> = ({ children }) => {
//   const magnetic = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!magnetic.current) return;

//     const xTo = gsap.quickTo(magnetic.current, "x", {
//       duration: 1,
//       ease: "elastic.out(1, 0.3)",
//     });
//     const yTo = gsap.quickTo(magnetic.current, "y", {
//       duration: 1,
//       ease: "elastic.out(1, 0.3)",
//     });

//     const mouseMove = (e: MouseEvent) => {
//       const { clientX, clientY } = e;
//       const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
//       const x = clientX - (left + width / 2);
//       const y = clientY - (top + height / 2);
//       xTo(x);
//       yTo(y);
//     };

//     const mouseLeave = () => {
//       gsap.to(magnetic.current, { x: 0, y: 0, duration: 1 });
//       xTo(0);
//       yTo(0);
//     };

//     const element = magnetic.current;

//     element.addEventListener("mousemove", mouseMove);
//     element.addEventListener("mouseleave", mouseLeave);

//     return () => {
//       element.removeEventListener("mousemove", mouseMove);
//       element.removeEventListener("mouseleave", mouseLeave);
//     };
//   }, []);

//   return React.cloneElement(children, { ref: magnetic });
// };

// export default Magnetic;
"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactNode;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, y: 0, duration: 1 });
      xTo(0);
      yTo(0);
    };

    const element = magnetic.current;
    element.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseleave", mouseLeave);

    return () => {
      element.removeEventListener("mousemove", mouseMove);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div ref={magnetic} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
};

export default Magnetic;
