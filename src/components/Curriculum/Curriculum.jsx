import React from "react";
import { useState } from "react";
import Info from "./components/Info";
import {componentData} from "./data/data"
const Curriculum = () => {
  const [comp, setComp] = useState(<Info h1={componentData.component1.heading1} p1={componentData.component1.para1} h2={componentData.component1.heading2} p2={componentData.component1.para2} h3={componentData.component1.heading3} p3={componentData.component1.para3} h4={componentData.component1.heading4} p4={componentData.component1.para4} h5={componentData.component1.heading5} p5={componentData.component1.para5}
    h6={componentData.component1.heading6}  p6={componentData.component1.para6}
  />);
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 mt-[-1rem] overflow-x-hidden ">
      <h1 className="font-bold text-xl lg:text-4xl mt-20 mb-[3rem] ">
        What will you Study in the Course?
      </h1>
      <div className="flex flex-row gap-5 items-center justify-center">
        <button onClick={()=>setComp(<Info h1={componentData.component1.heading1} p1={componentData.component1.para1} h2={componentData.component1.heading2} p2={componentData.component1.para2} h3={componentData.component1.heading3} p3={componentData.component1.para3} h4={componentData.component1.heading4} p4={componentData.component1.para4} h5={componentData.component1.heading5} p5={componentData.component1.para5}
        h6={componentData.component1.heading6} p6={componentData.component1.p6} /> ) }  className="rounded-xl p-4 text-white font-bold bg-yellow-400">DSA From Scratch To Advance</button>
        <button onClick={()=>setComp(<Info h1={componentData.component2.heading1} p1={componentData.component2.para1} h2={componentData.component2.heading2} p2={componentData.component2.para2} h3={componentData.component2.heading3} p3={componentData.component2.para3} h4={componentData.component2.heading4} p4={componentData.component2.para4} h5={componentData.component2.heading5} p5={componentData.component2.para5}/>) } className="rounded-xl p-4 text-white font-bold bg-yellow-400">DSA Training for OA/Unseen Online </button>
        <button onClick={()=>setComp(<Info h1={componentData.component3.heading1} p1={componentData.component3.para1} h2={componentData.component3.heading2} p2={componentData.component3.para2} h3={componentData.component3.heading3} p3={componentData.component3.para3} h4={componentData.component3.heading4} p4={componentData.component3.para4} h5={componentData.component3.heading5} p5={componentData.component3.para5}/>) } className="rounded-xl p-4 text-white font-bold bg-yellow-400">Competitive Programming</button>
        <button onClick={()=>setComp(<Info h1={componentData.component3.heading1} p1={componentData.component3.para1} h2={componentData.component3.heading2} p2={componentData.component3.para2} h3={componentData.component3.heading3} p3={componentData.component3.para3} h4={componentData.component3.heading4} p4={componentData.component3.para4} h5={componentData.component3.heading5} p5={componentData.component3.para5}/>) } className="rounded-xl p-4 text-white font-bold bg-yellow-400">Full Stack Development</button>
      </div>
      <div className="mt-20 px-[5rem]">{comp}</div>
    </div>
  );
};

export default Curriculum;
