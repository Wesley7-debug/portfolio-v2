/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {
  useEffect,
  useRef,
  ReactNode,
  ReactElement,
  cloneElement,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface ViewProps {
  children: ReactElement | ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

const View: React.FC<ViewProps> = ({
  children,
  animateOnScroll = true,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRefs = useRef<SplitText[]>([]);
  const linesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    splitRefs.current = [];
    linesRef.current = [];

    // Use HTMLElement[] explicitly
    const elements: HTMLElement[] = container.hasAttribute("data-copy")
      ? (Array.from(container.children) as HTMLElement[])
      : [container];

    elements.forEach((element) => {
      const split = new SplitText(element, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      });

      splitRefs.current.push(split);

      // ✅ Cast each line to HTMLElement
      linesRef.current.push(...split.lines.map((line) => line as HTMLElement));
    });

    gsap.set(linesRef.current, { y: "100%" });

    const animationProps = {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay,
    };

    if (animateOnScroll) {
      gsap.to(linesRef.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          once: true, // only animate once
        },
      });
    } else {
      gsap.to(linesRef.current, animationProps);
    }

    return () => {
      splitRefs.current.forEach((split) => {
        if (split && split.revert) split.revert();
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animateOnScroll, delay]);

  // If single child, safely attach the ref
  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      ref: containerRef as React.Ref<any>,
    });
  }

  // If multiple children, wrap them
  return (
    <div ref={containerRef} data-copy="true">
      {children}
    </div>
  );
};

export default View;
