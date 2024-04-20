import React from "react";

function Section() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <section className="text-gray-600 body-font bg-white max-w-screen-lg mx-auto px-5 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:max-w-lg md:w-full mx-auto">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="mentor.jpg"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-gray-700 text-center md:text-left"></h5>
            <h1 className="title-font text-4xl mb-4 mt-3 font-bold uppercase text-gray-900 text-center md:text-left">
              Karan Kumar
            </h1>
            <p className="text-center md:text-left text-black font-semibold">
              Founder , DesiQNA <br />
              SDE @AMAZON
            </p>
            <p className="mt-8 mb-8">
              <blockquote className="text-black font-semibold ">
                To generate the highest number of selections(10+LPA) at the
                lowest cost in India and provide the most in-depth content and
                daily live training on DSA(OA + Interview. + CP) + FullStack Dev
                + LLD + HLD + Personal 1-1 Mentoring + Help wherever required
                which no one has ever done!”
              </blockquote>
            </p>
            <div className="flex flex-row items-center justify-center gap-10">
              <button className="mt-3 bg-red-500 rounded-md px-4 py-2 w-full md:w-auto text-white">
                Whatsapp
              </button>
              <button className="mt-3 bg-red-500 rounded-md px-4 py-2 w-full md:w-auto text-white">
                Youtube
              </button>

              <button className="mt-3 bg-red-500 rounded-md px-4 py-2 w-full md:w-auto text-white">
                Linkedln
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
