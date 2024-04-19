import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Swipe() {
  return (
    <>
    <div className='w-[35rem]'>
      
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/bgsEZHE9byA?si=IfLRT5TO7ENBXri1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/bgsEZHE9byA?si=IfLRT5TO7ENBXri1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/bgsEZHE9byA?si=IfLRT5TO7ENBXri1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/bgsEZHE9byA?si=IfLRT5TO7ENBXri1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
      </Swiper>
        </div>
    </>
  );
}
export default Swipe