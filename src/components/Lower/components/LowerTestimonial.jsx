import React from 'react';
const imageArray=["/1.png",'/2.png','/3.png','/4.png'];
const imageArray1=["/7.png",'/8.png','/9.png','/10.png'];
const imageArray2=["/5.png",'/6.png','/11.png','/12.png'];

function LowerTestimonial() {
  return (
    <>
    <div id ="testimonial" >
        <h1 className='text-center text-2xl lg:text-4xl font-bold mt-10 mb-10 font-serif underline'>Hear from Our Student</h1>
    </div>
    <div className='flex flex-col gap-8 flex-wrap lg:flex-nowrap'>

    <div className='flex flex-col lg:flex-row items-center justify-center gap-4  px-[6rem] '>
       
        <div className='flex lg:flex-row flex-col  items-center justify-center gap-10 flex-wrap lg:flex-nowrap'>
          {imageArray.map((el,index)=>{
            return(
              <>
              <div key={index} className='w-[15rem] h-[10rem] hover:w-[30rem] hover:h-[20rem] border-8 border-solid border-orange-200 '>
                <img width={800} height={800} src={el} alt="" srcset="" />

              </div>
              </>
            )
          })}
        </div>
        


    </div>
    <div className='flex flex-col lg:flex-row items-center justify-center gap-4 px-[6rem] '>
       
        <div className='flex lg:flex-row flex-col items-center justify-center gap-10 flex-wrap lg:flex-nowrap'>
          {imageArray1.map((el,index)=>{
            return(
              <>
              <div key={index} className='w-[15rem] h-[10rem] hover:w-[30rem] hover:h-[20rem] border-8 border-solid border-orange-200'>
                <img width={800} height={800} src={el} alt="" srcset="" />

              </div>
              </>
            )
          })}
        </div>
        
        


    </div>
    <div className='flex flex-col lg:flex-row items-center justify-center gap-4  px-[6rem] '>
        
        <div className='flex lg:flex-row flex-col items-center justify-center gap-[7rem] flex-wrap lg:flex-nowrap'>
          {imageArray2.map((el,index)=>{
            return(
              <>
              <div key={index} className='w-[15rem] h-[10rem] object-fill hover:w-[30rem] hover:h-[20rem] border-8 border-solid border-orange-200'>
                <img width={800} height={800} src={el} alt="" srcset="" />

              </div>
              </>
            )
          })}
        </div>
        


    </div>

<div className='flex flex-col items-center justify-center mt-[10rem]'>

<a href="https://docs.google.com/document/d/1nFt_jEgy1X-UaKU2bu3OnC365ADCL-ls_cpXUMJrvx0/edit" blank="__origin">

    <button className='bg-orange-400 text-white font-bold px-10 py-2 rounded-md'>View More</button>
</a>
</div>
    </div>
    
    </>
  )
}

export default LowerTestimonial