import Page from "../Features/page";
import {data} from "./data/data"
import Lower from "../Lower/Page";

function HeroSection() {
  return (
    <>
      <section className="mt-[-1rem]">
        <section className="text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100">
          <div className="container mx-auto px-5 py-24 md:flex md:flex-row md:justify-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0 text-center md:text-left">
              <span className="text-xl text-black font-sans font-bold">{data.span}</span>
              <h1 className="font-sans leading-snug text-4xl mb-4 font-extrabold text-gray-900">
                {data.h1}
                <br className="font-sans text-3xl  bg-red-500 hidden lg:inline-block" />
                {data.subh1}
                <br className="hidden font-sans lg:inline-block text-gray-800" />
                {data.subh2}
              </h1>
              <p className="mb-8 leading-relaxed text-gray-900 font-sans">{data.p}</p>
              <div className="flex justify-center md:justify-start">
                {/* Move buttons here */}
                <a href="https://wa.me/918879355057" target="_blank" rel="noopener noreferrer">
                  <button className="text-red hover:before:bg-red border-2 rounded-lg border-orange-500 relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10 text-2xl">Explore</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-[-2rem] w-full lg:max-w-lg">
              <img
                className="object-cover object-center rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105"
                alt="hero"
                src={data.img}
              />
            </div>
          </div>
        </section>
      </section>

      <Page />

      <Lower />
    </>
  );
}

export default HeroSection;
