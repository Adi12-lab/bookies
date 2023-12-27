'use client';

import useMediaQuery from '@/hooks';
import React, { useEffect } from 'react';
import { useState } from 'react';
export default function Header() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Visi',
      link: 'visi',
    },
    {
      name: 'Galleri',
      link: 'galleries',
    },
    {
      name: 'Testimoni',
      link: 'testimoni',
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  const animateScroll = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      const targetOffsetTop = element.offsetTop - 100;
      const duration = 500; // Durasi animasi (ms)
      const startingY = window.scrollY;
      const diff = targetOffsetTop - startingY;
      let startTime: number | null = null;

      const animateScrollStep = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Menghindari kemungkinan nilai lebih dari 1

        window.scrollTo(0, startingY + diff * progress);

        if (elapsed < duration) {
          window.requestAnimationFrame(animateScrollStep);
        }
      };

      window.requestAnimationFrame(animateScrollStep);
    }
  };

  return (
    <header
      className={`container max-w-full py-5 top-0 left-0 z-20 transition ${
        scrolled ? 'bg-[#f0bd46] fixed shadow-lgz' : 'bg-transparent absolute'
      }`}
    >
      <div className='h-16 flex justify-between items-center'>
        <div className='text-white text-2xl font-extrabold font-jakarta leading-[28.80px]'>
          Bookies.
        </div>
        {isMobile ? (
          <>
            <button
              type='button'
              className='ms-auto text-white text-[16px]'
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
            </button>
            <hr className='bg-white opacity-[24]' />
            <ul
              className={`absolute left-0 z-[-1] w-full bg-[#f0bd46] container transition-all duration-500  ease-in-out lg:static lg:z-auto lg:flex lg:w-auto lg:items-center lg:bg-transparent ${
                isOpen ? 'top-16' : 'top-[-490px]'
              }`}
            >
              {links.map((link) => (
                <li key={link.name} className='my-7 lg:my-0 lg:ml-8'>
                  <button
                    onClick={() => {
                      animateScroll(link.link);
                    }}
                    type='button'
                    className='hover:text-gray-400 font-medium text-black duration-500 cursor-pointer'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className='h-[19px] justify-between items-start flex'>
              <ul className='flex items-center gap-x-10'>
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      type='button'
                      onClick={() => {
                        animateScroll(link.link);
                      }}
                      className='opacity-80 text-center text-white text-opacity-70 text-base font-normal font-jakarta leading-tight'
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='h-16 px-11 py-5 bg-white rounded-[48px] justify-between items-center flex'>
              <button className='text-center text-primary text-base font-jakarta leading-tight'>
                Pesan sekarang
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
