import React from 'react';

function Section() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <section className="text-gray-600 body-font bg-white max-w-screen-lg mx-auto px-5 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:max-w-lg md:w-full mx-auto">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className='text-gray-700 text-center md:text-left'>What do we offer ?</h5>
            <h1 className="title-font text-2xl mb-4 mt-3 font-medium text-gray-900 text-center md:text-left">
              Let's Introduce Something
              <br className="hidden lg:inline-block"/>Enim et esse tempor cupidatat exe
            </h1>
            <p className="text-center md:text-left">
              Tempor dolor ut in tempor laboris dolor minim elit deserunt do elit eiusmod nisi aliquip magna veniam. Do voluptate excepteur ea non reprehenderit non non ut proident deserunt veniam et ut commodo nisi culpa aute. Laborum commodo ma
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start mt-4 space-y-2 md:space-y-0 md:space-x-3">
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white bg-red-500 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Veniam ex eiusmod ad exce
              </span>
              
              
              {/* More similar spans */}
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start mt-4 space-y-2 md:space-y-0 md:space-x-3">
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white bg-red-500 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Veniam ex eiusmod ad exce
              </span>
              
              
              {/* More similar spans */}
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start mt-4 space-y-2 md:space-y-0 md:space-x-3">
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white bg-red-500 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Veniam ex eiusmod ad exce
              </span>
              
              
              {/* More similar spans */}
            </div>
            
            <button className='mt-3 bg-red-500 rounded-md px-4 py-2 w-full md:w-auto text-white'>Explore</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
