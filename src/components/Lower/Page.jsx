import React from "react";
import Section from "./components/section";
import Swipe from "../swipe/Swipe";
import LowerFeature from "./components/LowerFeature";
import LowerCurriculum from "./components/LowerCurriculum";
import LowerFooter from "./components/LowerFooter";
import LowerTestimonial from "./components/LowerTestimonial";
function Lower() {
  return (
    <>
      <div className="relative flex flex-col bg-gradient-to-r from-white to-red-500 items-center justify-center overflow-x-hidden">
        <div className="flex flex-col items-center justify-center flex-wrap bg-slate-400 mt-56 w-[80rem] ">
          <div className=" absolute bg-slate-10 top-[1rem]">
            <Section />
          </div>
          <div className="mt-[17rem] flex flex-col items-center justify-center mb-[10rem]">
            <div>
              <h1 className="text-4xl  font-bold md:text-center">
                Only we train for Unseen
              </h1>
              <p className="text-md ml-2 mb-10 mt-4 md:text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                iste explicabo vitae, repudiandae quaerat odio ullam est eius
                cupiditate autem. Aut enim repellat, doloremque minus recusandae
                mollitia ullam eum porro voluptatum quae.
              </p>
            </div>
            <Swipe />
          </div>
        </div>
        <div>
          <div className="mt-5">
            <LowerFeature />
          </div>
          <div className="mt-[10rem]">
            <LowerCurriculum />
          </div>
          <div>
            <LowerTestimonial />
          </div>
          <div>
            <LowerFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lower;
