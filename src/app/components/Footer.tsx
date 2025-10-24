import React from "react";

export default function Footer() {
  const data1 = ["Work", "About", "Service", "Blog"];
  const data2 = ["Linkedin", "Github", "Twitter", "Instagram"];

  return (
    <section className="w-screen h-screen bg-Bg relative overflow-hidden font-Lato pt-20">
      <div className=" w-full flex justify-between px-8 flex-col lg:flex-row ">
        <div className="flex gap-16 lg:flex-row flex-col">
          <div className="flex gap-10  items-baseline">
            <h3 className="text-Bg2 uppercase text-sm font-semibold">
              Explore
            </h3>
            <div>
              {" "}
              {data1.map((item, idx) => (
                <h2
                  key={idx}
                  className="lg:text-[2.4rem] text-3xl text-black font-bold mt-0.5 relative"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white block"></span>
                </h2>
              ))}
            </div>
          </div>

          <div className="flex gap-10 items-baseline">
            <h3 className="text-Bg2 uppercase text-sm font-semibold">
              {" "}
              Stalk Me{" "}
            </h3>
            <div>
              {" "}
              {data2.map((item, idx) => (
                <h2
                  key={idx}
                  className="lg:text-[2.5rem] text-3xl text-black font-bold mt-0.5"
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 ">
          <h3 className="text-Bg2 uppercase  text-sm font-semibold items-end justify-end">
            Say Hello
          </h3>

          <h2 className="text-xl">
            <a href="mailto:eugenefidelis573@gmail.com">
              eugenefidelis573@gmail.com
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
}
