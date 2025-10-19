import { ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import Button from "../components/Button";

export default function AboutSec() {
  return (
    <>
      <section className=" z-3 w-screen min-h-screen overflow-hidden px-4  bg-Bg2 text-Bg mx-auto relative p-4">
        <div className="flex flex-col lg:flex-row mt-10">
          {" "}
          <div className=" lg:absolute lg:left-0 lg:top-[23%] px-2 lg:px-8">
            <div className="flex flex-row justify-around border-b-1 py-4 gap-15 lg:w-fit w-full">
              <h1 className="lg:text-[1rem] text-[1.2rem]">Serious Facts</h1>
              <p className="text-[1rem]"> 01 / 03</p>
            </div>
            <div className="lg:w-1/2 w-[90%] lg:mt-7">
              <h1 className="text-7xl font-bold">40+</h1>
              <p className="font-PlayFair font-extralight lg:w-[28ch] lg:text-[1rem] text-[1.2rem] mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti voluptas corrupti
              </p>
            </div>
            <div className="flex gap-4 items-center mt-5  lg:mt-3">
              <div className="bg-Card3 size-9 rounded-full relative">
                {" "}
                <ArrowLeft className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />{" "}
              </div>
              <div className="bg-Card3 size-9 rounded-full relative">
                <ArrowRight className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
          <div className=" mt-42 lg:mt-0 px-4 lg:absolute lg:top-[42%] lg:left-1/2 lg:-translate-x-1/2 lg:ml-7 lg:-translate-y-1/2 ">
            <h2 className=" text-4xl lg:text-6xl font-semibold lg:w-[20ch] w-full min-w-[90%] ">
              Crafting premium <br /> brands for startups that make people smile
            </h2>
            <div className="lg:mt-8 mt-15  flex items-center">
              <Button title="About me" />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="text-start mt-5 text-4xl ">
        <span className="font-Sora">stuffs i make so</span>
        <span className="font-PlayFair"> you dont have to do</span>
      </div> */}
    </>
  );
}
