import React from 'react'
import SingleStory from '../../../components/SingleStory'


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Doğru yolu kullanıyoruz

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";


function StoryLayout() {
  return (
    <div className='flex justify-start items-center gap-5 py-2'>
        <Swiper
        spaceBetween={20}
        slidesPerView={4} // Aynı anda kaç hikaye gösterileceğini ayarlar

        centeredSlides={false} // Hikayelerin ortalanmasını sağlar
        modules={[Pagination]} // Pagination modülü eklenir
        className="w-full flex gap-5"
      >
          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>


          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>


          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>


          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>

          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>

          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>

          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>

          <SwiperSlide>
            <SingleStory />
          </SwiperSlide>
      </Swiper>


       
    </div>
  )
}

export default StoryLayout