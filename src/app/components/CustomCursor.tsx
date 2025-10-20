"use client";
import React, { useEffect, useRef, useState } from "react";

function isCursorIgnoreElement(el: HTMLElement | null): boolean {
  while (el) {
    if (el.classList && el.classList.contains("custom-cursor-ignore")) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

export default function CustomCursor() {
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });

  const circleCount = 8;
  const size = 20;

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const circles = circlesRef.current;
    const positions = Array.from({ length: circles.length }, () => ({
      x: 0,
      y: 0,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (isCursorIgnoreElement(target)) {
        setVisible(false);
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (isCursorIgnoreElement(target)) {
        setVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      if (!visible) {
        circles.forEach((circle) => {
          circle.style.display = "none";
        });
        requestAnimationFrame(animate);
        return;
      }

      circles.forEach((circle) => {
        circle.style.display = "block";
      });

      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, i) => {
        const current = positions[i];
        current.x += (x - current.x) * 0.3;
        current.y += (y - current.y) * 0.3;

        circle.style.left = `${current.x - circle.offsetWidth / 2}px`;
        circle.style.top = `${current.y - circle.offsetHeight / 2}px`;

        const scale = (circles.length - i) / circles.length;
        circle.style.transform = `scale(${scale})`;

        x = current.x;
        y = current.y;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [visible]);

  return (
    <>
      {Array.from({ length: circleCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) circlesRef.current[index] = el;
          }}
          className="fixed rounded-full pointer-events-none z-50 transition-transform bg-[#d9d3c4]"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: "0px",
            left: "0px",
            display: visible ? "block" : "none",
          }}
        />
      ))}
    </>
  );
}
