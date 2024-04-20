import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { lazy } from 'react';

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
        <SwiperSlide><iframe width="800" loading='lazy' height="300" src="https://www.youtube.com/embed/iCIa-hY3Ov4?si=qtYMWcqbnFQUkkqC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="800" loading="lazy" height="300" src="https://www.youtube.com/embed/JPz8H6uumgQ?si=DhPnS8fHXMO7_aGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="800" loading="lazy" height="300" src="https://www.youtube.com/embed/IZv7He5jGJ4?si=37LSNW0TdXfFTn3B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide> <iframe width="800" loading="lazy" height="300" src="https://www.youtube.com/embed/0y1_16CvdRA?si=v8P68daVU9207Hq1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="800" loading="lazy" height="300" src="https://www.youtube.com/embed/8w0dh34hJNM?si=31QlSfkYW3g_bwXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="800" loading="lazy" height="300" src="https://www.youtube.com/embed/8w0dh34hJNM?si=31QlSfkYW3g_bwXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
      </Swiper>
        </div>
    </>
  );
}
export default Swipe