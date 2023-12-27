'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';

import { testimonials } from '@/constant'

function Testimonials() {
  return (
    <section className='container max-w-full bg-primary py-20 text-white' id='testimoni'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          enabled: true,
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }}
        modules={[Navigation]}
      >

        {
          testimonials.map((item, index) => (

            <SwiperSlide key={index}>
              <div className='flex flex-col items-center'>
                <p className='lg:w-[996px] text-center text-[32px] md:text-5xl font-semibold font-jakarta leading-[41.60px] md:leading-[76.80px]'>&quot;{item.text}&quot;.</p>
                <span className='block mt-9 text-center text-opacity-80 text-2xl font-jakarta leading-relaxed md:leading-[38.40px]'>{item.author}</span>
              </div>

            </SwiperSlide>
          ))
        }

      </Swiper>
      <div className='mt-12 flex justify-center gap-x-5'>
        <button type='button' className='swiper-prev w-12 h-12 md:w-16 md:h-16 bg-zinc-300 rounded-full text-primary grid place-items-center hover:bg-white transition duration-150'><FontAwesomeIcon icon={faAnglesLeft} /></button>
        <button type='button' className='swiper-next  w-12 h-12 md:w-16 md:h-16 bg-zinc-300 rounded-full text-primary grid place-items-center hover:bg-white transition duration-150'><FontAwesomeIcon icon={faAnglesRight} /></button>
      </div>
    </section>
  )
}

export default Testimonials