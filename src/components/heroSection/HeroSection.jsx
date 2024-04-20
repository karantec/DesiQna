import Page from "../Features/page";
import {data} from "./data/data"
import Lower from "../Lower/Page";

function HeroSection() {
  return (
    <>
      <section className=" mt-[-1rem]">
        <section className="text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100 ">
          <div className="container mx-auto px-5 py-24 md:flex md:flex-row md:justify-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0 text-center md:text-left">
              <span className="text-xl text-black font-bold">{data.span}</span>
              <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {data.h1}
                <br className="hidden lg:inline-block" />
                {data.subh1}
                <br className="hidden lg:inline-block text-black font-serif" />
                {data.subh2}
              </h1>
              <p className="mb-8 leading-relaxed text-black font-sans">{data.p}</p>
              <div className="flex justify-center md:justify-start">
                {/* Move buttons here */}
                <button className="inline-flex rounded-full text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 text-lg">
                  {data.button}
                </button>
    
              </div>
            </div>
            <div className="md:w-1/2 w-full lg:max-w-lg">
              <img
                className="object-cover object-center rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105"
                alt="hero"
                src={data.img}
              />
            </div>
          </div>
        </section>
      </section>
  
      <Page/>

      <Lower/>

    

    </>
  );
}

export default HeroSection;
