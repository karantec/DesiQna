import React, { useState } from 'react';
import { data } from "./data/data";
import Feature from './components/Feature';
import "./Page.css"
import "animate.css"

function RecPage() {
  const [selectedUser, setSelectedUser] = useState(data.user1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animate, setAnimate] = useState(null);

  const handleImageClick = (userData, index) => {
    setSelectedUser(userData);
    setActiveIndex(index);
    setAnimate('animate__animated animate__slideInRight'); 
    setTimeout(() => {
      setAnimate(null); 
    }, 1000); 
  };

  return (
    <div id="topachiver" className="flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 pb-10">
      <div className={`${animate}`}>
        <Feature
          p={selectedUser.p}
          h1={selectedUser.h1}
          details={selectedUser.details}
          student={selectedUser.student}
          company={selectedUser.company}
          img={selectedUser.img}
        />
      </div>
      <div className='flex items-center mb-3 gap-5 justify-center flex-wrap'>
        {Object.values(data).map((user, index) => (
          <button key={index} onClick={() => handleImageClick(user, index)} className="image-button">
            <img
              className={`relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white hover:border-4 transition-all duration-500`}
              src={user.img}
              alt={user.img}
            />
          </button>
        ))}
      </div>
      <a href="https://docs.google.com/document/d/1O9ph3IoyLv_B6scRQSaMyemShoOgAtnWBGpiw-FZtTs/edit" target="_blank" rel="noopener noreferrer">
        <div className='inline-flex flex-col items-center justify-center'>
        
        </div>
      </a>
    </div>
  );
}

export default RecPage;
