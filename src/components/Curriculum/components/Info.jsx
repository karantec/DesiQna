import React from "react";

function Info({ h1, p1, h2, p2, p3, p4, h3, h4 }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 overflow-x-hidden mt-[-1rem]">
        <div>
          <div className="flex flex-col items-center justify-center gap-20">
            <div className="absolute   outline-1   outline-dashed h-[57rem]  lg:h-[57rem] md:h-[50rem] "></div>
            <div className="flex flex-row items-center gap-10">
              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem]">
                <img
                  src="https://www.algoprep.in/img/content_1_img.png"
                  alt=""
                />
              </div>
              <div className="border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10  ">
                <span className="font-bold text-2xl">1</span>
              </div>
              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem]">
                <h1>{h1}</h1>
                <p>{p1}</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-10">
              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem] px-8">
                <h1>{h2}</h1>
                <p>{p2}</p>
              </div>
              <div className="border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ">
                <span className="font-bold text-2xl">2</span>
              </div>

              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem]">
                <img
                  src="https://www.algoprep.in/img/content_1_img.png"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-row items-center gap-10">
              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem]">
                <img
                  src="https://www.algoprep.in/img/content_1_img.png"
                  alt=""
                />
              </div>
              <div className="border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ">
                <span className="font-bold text-2xl">3</span>
              </div>
              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem]">
                <h1>{h3}</h1>
                <p>{p3}</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-10">
              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]">
                <h1>{h4}</h1>
                <p>{p4}</p>
              </div>
              <div className="border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ">
                <span className="font-bold text-2xl ">4</span>
              </div>

              <div className="lg:w-[20rem] md:w-[15rem] w-[8rem]">
                <img
                  src="https://www.algoprep.in/img/content_1_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
