function Feature({ p, h1, company, details, student, img }) {
  return (
    <>
      <section className="mx-auto max-w-screen-lg px-5 py-10 md:py-24">
        <section className="text-gray-600 body-font">
          <h1 className="text-center font-bold text-black font-sans text-4xl mb-8">Top Performing Student</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-[7rem] space-x-20">
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center">
              <span className="text-lg text-blue-600 font-bold mb-4">
                {p}
              </span>
              <h1 className="title-font mt-2 md:mt-0 sm:text-4xl lg:text-lg mb-4 font-medium text-gray-900 text-center md:text-left">
                {h1}
              </h1>
              <p className="mb-4 leading-relaxed text-black text-center md:text-left">
                {details}
              </p>
              <div className="flex gap-10 mt-3 justify-center md:justify-start">
                <span className="text-1xl text-white bg-orange-500 rounded-md p-3 font-bold">
                  {student}
                </span>
                <span className="text-1xl text-white bg-orange-500 rounded-md p-3 font-bold">
                  {company}
                </span>
              </div>
            </div>
            <div className="md:w-1/2 mt-3 flex justify-center md:justify-center">
              <img
                className="object-cover object-center rounded-lg shadow-md"
                width={400} height={400}
                alt="hero"
                src={img}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Feature;
