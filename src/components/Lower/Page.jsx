import React from 'react';
import Section from './components/section';
import Swipe from '../swipe/Swipe';
import LowerFeature from './components/LowerFeature';
import LowerCurriculum from './components/LowerCurriculum';
import LowerFooter from './components/LowerFooter';
import LowerTestimonial from './components/LowerTestimonial';
function Lower() {
  return (
    <>
    <div className='relative flex flex-col items-center justify-center'>

    <div className='flex flex-col items-center justify-center flex-wrap mt-56    lg:w-[80rem] h-[186rem]'>
        <div className=' absolute bg-slate-10 top-[4rem]'>
            <Section/>
        </div>
        <div className="mt-[17rem] flex flex-col items-center justify-center mb-[10rem]">
            <div>
            <h1 className='text-4xl  ml-2 font-bold'>Only we train for Unseen</h1>
      <p className='text-md ml-2 mb-10 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iste explicabo vitae, repudiandae quaerat odio ullam est eius cupiditate autem. Aut enim repellat, doloremque minus recusandae mollitia ullam eum porro voluptatum quae.</p>

            </div>
            <Swipe/>
        </div>
        <div><LowerFeature/></div>
        <div className='mt-[10rem]'><LowerCurriculum/></div>
        <div><LowerTestimonial/></div>
        <div><LowerFooter/></div>

    </div>
    </div>
    </>
  )
}

export default Lower