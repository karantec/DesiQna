
function Feature({ p, h1, company, details, student, img }) {
  return (
    <>
      <section className="mr-5 ml-20 flex flex-col items-center justify-center">
        <section className="text-gray-600 body-font">
          <h1 className="text-center font-bold text-black font-sans text-4xl">Top Performing Student</h1>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <span className="text-4xl text-blue-600 font-bold">
                {p}
              </span>
              <h1 className="title-font mt-5 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {h1}
              </h1>
              <p className="mb-8 leading-relaxed text-black">
                {details}
              </p>
              <div className="flex gap-10 justify-center">
                <span className="text-1xl text-white bg-red-500 rounded-md p-3 font-bold">
                  {student}
                </span>
                <span className="text-1xl text-white bg-red-500 rounded-md p-3 font-bold">
                  {company}
                </span>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
              <img
                className="object-cover object-center rounded-lg shadow-md"
                width={300} height={500}
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
