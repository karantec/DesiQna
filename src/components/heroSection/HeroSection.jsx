import Page from "../Features/page";
import { data } from "./data/data";

function HeroSection() {
  return (
    <>
      <section className="px-4  ml-4">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-5 py-24 md:flex md:flex-row md:justify-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0 text-center md:text-left">
              <span className="text-3xl  text-black font-serif">{data.span}</span>
              <h1 className="sm:text-4xl    max-w-lg text-4xl mb-4 font-sans font-bold text-gray-700">
                {data.h1}
                <br className="hidden text-4xl lg:inline-block" />
                {data.subh1}
                <br className="hidden lg:inline-block  text-gray-700"/>
                {data.subh2}
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 font-sans">{data.p}</p>
              <div className="flex justify-center md:justify-start">
                {/* Move buttons here */}
                <button className="inline-flex rounded-full text-white bg-red-400 border-0 py-2 px-6 focus:outline-none  text-lg">
                  {data.button}
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="md:w-1/2 w-full lg:max-w-lg">
              <img
                className="object-cover  mb-10 object-center rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105"
                alt="hero"
                src={data.img}
              />
            </div>
          </div>
        </section>
      </section>

      <Page />

      <section className="px-24">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-5 py-24 md:flex md:flex-row md:justify-center">
            <div className="md:w-1/2 w-full lg:max-w-lg mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
            <div className="md:w-1/2 lg:pl-24 md:pl-16 text-center md:text-left">
              <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Lets Introduce Something
                <br className="hidden lg:inline-block" />
                Enim et ese tempor
              </h1>
              <p className="mb-8 leading-relaxed"></p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default HeroSection;
