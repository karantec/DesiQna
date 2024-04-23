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
              <h1 className="text-xl lg:text-4xl text-slate-500 font-bold text-center  md:text-center">
               Why Join Our Personalized 1-1 <span className="text-black">Mentoring Program ?</span>
              </h1>
              <p className="text-2xl  lg:text-2xl ml-2 mb-10 mt-6 md:text-center text-slat-400 text-center px-[30rem] lg:px-[12rem]">
              Only We Train For Unseen <span className="text-red-500 font-bold"> Hard Online Test+ Interview  DSA</span> Problem of Top Tech Companies in India.
              </p>
              <p className="text-2xl lg:text-1xl ml-2 mb-10 mt-4 md:text-center text-slat-400 text-center px-[30rem] lg:px-[12rem]">
              Our 850 hour DSA + OA + CP course gets updated on monthly basis with more content and training according to the recent trends of DSA problems being asked in company online test + interviews; that’s why it is the best course in the country
              </p>
            </div>
            <Swipe />
          </div>
        </div>
        <div>
        
          <div className="mt-5 pb-5">
            <LowerFeature />
          </div>
          <div className="bg-slate-200 pt-2 pb-10 mx-[5rem] mt-3">
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
