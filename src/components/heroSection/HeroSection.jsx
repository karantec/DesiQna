import React from "react";
import Feature from "../Features/Feature";

function HeroSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-slate-100 to-red-200 px-2">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <span className="text-xl text-black font-bold">Empower</span>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Discover Your Potential
                <br className="hidden lg:inline-block" />
                with DesiQNA's Featured
                <br className="hidden lg:inline-block" />
                Program
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Explore
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </section>
      </section>
      <section className="bg-gradient-to-r from-slate-100 to-red-200 px-24">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <span className="text-lg text-blue-600 font-bold">
                1000+ HAPPY CAREERS WITH OUR PERSONALIZED MENTORSHIP + TRAINING
              </span>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Tier-3 College to 30+ LPA
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex gap-10 justify-center">
                <span className="text-lg text-[#2D6293] font-bold">
                  Lakshya Mittal
                </span>
                <span className="text-lg text-[#0D2F45] font-bold">
                  COMMVALT'
                </span>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </section>
      </section>
      <section className="bg-gradient-to-r from-slate-100 to-red-200 px-24">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let's Introduce Something 
        <br className="hidden lg:inline-block"/>Enim et ese tempor
      </h1>
      <p className="mb-8 leading-relaxed">
        
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
      </section>
    </>
  );
}

export default HeroSection;
