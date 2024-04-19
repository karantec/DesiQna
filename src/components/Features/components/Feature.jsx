// Feature.js

function Feature({ p, h1, company, details, img }) {
  return (
    <>
      <section className="px-24">
        <h1 className="text-center text-4xl font-bold text-black">Top Performing Student</h1>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <span className="text-lg text-blue-600 font-bold">{p}</span>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{h1}</h1>
              <p className="mb-8 leading-relaxed">{details}</p>
              <div className="flex gap-10 justify-center">
                <span className="text-lg text-[#2D6293] font-bold">Lakshya Mittal</span>
                <span className="text-lg text-[#0D2F45] font-bold">{company}</span>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src={img} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Feature;
