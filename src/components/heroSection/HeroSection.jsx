import Page from "../Features/page";
import {data} from "./data/data"
import Swipe from "../swipe/Swipe";

function HeroSection() {
  return (
    <>
      <section className="px-2">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <span className="text-xl text-black font-bold">{data.span}</span>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {data.h1}
                <br className="hidden lg:inline-block" />
                {data.subh1}
                <br className="hidden lg:inline-block" />
                {data.subh2}
              </h1>
              <p className="mb-8 leading-relaxed">
                {data.p}
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  {data.button}
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={data.img}
              />
            </div>
          </div>
        </section>
      </section>
  
      <Page/>

    
      <section className="flex flex-col items-center justify-center  h-[20rem]">
      <Swipe/>

      </section>

    </>
  );
}

export default HeroSection;
