import React from "react";
import "./styles/service-sec-style.css";

type ServiceCardProp = {
  id: string;
  title: string;
  content: string[];
  bgColor: string;
  icon: string;
  number: string;
};
export default function ServicesCard({
  id,
  title,
  content,
  bgColor,
  icon,
  number,
}: ServiceCardProp) {
  return (
    <>
      <div id={id} className="card hidden lg:block">
        <div className="card-wrapper">
          <div
            className="flip-card-inner rounded-2xl "
            style={{ backgroundColor: bgColor }}
          >
            <div className="flip-card-front  text-[1rem] h-full">
              <div className="card-title w-full flex justify-between">
                <span>{title}</span>
                <span>{number}</span>
              </div>
              <img
                src={icon}
                alt={title}
                className="size-3 lg:size-13 mx-auto"
              />
              <div className="card-title w-full flex justify-between">
                <span>{number}</span>
                <span>{title}</span>
              </div>
            </div>
            <div className="flip-card-back text-[1rem]">
              <div className="card-title w-full flex justify-between text-[0.75rem] font-Lato">
                <span>{title}</span>
                <span>{number}</span>
              </div>
              <div className="card-content text-[1rem] ">
                {content.map((itm, idx) => (
                  <p key={idx} className="bg-[#f0ece5] rounded-2xl">
                    {itm}
                  </p>
                ))}
              </div>
              <div className="card-title w-full flex justify-between">
                <span>{title}</span>
                <span>{number}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
