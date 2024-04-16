import React from 'react'
import { useState } from 'react'
import {data} from "./data/data"
import Feature from './components/Feature'
function Page() {
    const [component,setCompnent] = useState(<Feature p={data.user1.p} h1={data.user1.h1} details={data.user1.details} company={data.user1.company} img={data.user1.img}/>)

  return (
    <>
    {component}
    <div className='flex flex-1 items-center justify-center gap-5'>
        <button onClick={()=>setCompnent(<Feature p={data.user2.p} h1={data.user2.h1} details={data.user2.details} company={data.user2.company} img={data.user2.img}/>)}>
        <img
          className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
          alt="Delba"
        />
        </button>

        <button onClick={()=>setCompnent(<Feature p={data.user3.p} h1={data.user3.h1} details={data.user3.details} company={data.user3.company} img={data.user3.img}/>)}>
        <img
          className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
          alt="Lee_Robinson"
        />
        </button>
        

    </div>


    </>
  )
}

export default Page