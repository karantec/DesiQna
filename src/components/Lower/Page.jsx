import React from "react";
import Section from "./components/section";
import Swipe from "../swipe/Swipe";
import LowerFeature from "./components/LowerFeature";
import LowerFooter from "./components/LowerFooter";
import LowerTestimonial from "./components/LowerTestimonial";
function Lower() {
  return (
    <>
      <div className="relative flex flex-col bg-gradient-to-r to-red-50 from-yellow-100  items-center justify-center overflow-x-hidden pb-10">
        <div className="flex flex-col items-center justify-center flex-wrap bg-gradient-to-r from-slate-100 to-gray-300 mt-56 w-[80rem] ">
          <div className=" absolute bg-slate-10 top-[1rem]">
            <Section />
          </div>
          <div className="mt-[46rem] lg:mt-[26rem] flex flex-col items-center justify-center mb-[10rem]">
            <div>
              <h1 className="text-xl lg:text-4xl text-slate-600 font-bold text-center  md:text-center">
                Only we train for Unseen
              </h1>
              <p className="text-sm  lg:text-md ml-2 mb-10 mt-4 md:text-center text-slat-400 text-center px-[10rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga <br />
                iste explicabo vitae, repudiandae quaerat odio ullam est eius <br />
                cupiditate autem. Aut enim repellat, doloremque minus recusandae <br />
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
