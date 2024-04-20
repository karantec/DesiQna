import React from 'react'

function LowerFeature() {
  return (
   <>
   <div className='mb-10 pt-10 px-[5rem]'>

   <h1 className='text-center text-4xl font-bold mb-5 '> Featured Courses</h1>
   <p className='text-center text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse quam in!</p>
   <p className='text-center text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem expedita natus!</p>
   </div>
   <div className='flex flex-row flex-wrap items-center justify-center gap-[6rem]'>
    <div className='flex flex-col items-center justify-center gap-5'>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>


    </div>
    <div className='w-[30rem] bg-slate-50 p-[5rem]'>
        <h1 className='text-center text-3xl font-bold mb-[2rem] '>Feature Course</h1>
        <p className='text-center font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates labore molestiae doloribus ex, ipsum repellat tempora voluptate omnis a quo quam iusto atque illo, commodi quibusdam odio culpa officiis dolor dolore nostrum.</p>
    </div>
    <div className='flex flex-col items-center justify-center gap-5'>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>
        <button className='bg-slate-50 p-2 border rounded-2xl text-center w-[15rem]'>Short Heading here</button>


    </div>
   </div>
   </>
  )
}

export default LowerFeature