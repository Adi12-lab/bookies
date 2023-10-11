'use client'

import useMediaQuery from '@/hooks'
import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Header() {
    const isMobile = useMediaQuery('(max-width:600px)')

    const datas = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Features',
            link: '#features'
        },
        {
            name: 'Gallery',
            link: '#gallery'
        },
        {
            name: 'Testimonial',
            link: '#testimonial'
        }
    ]

    return (
        <header className='container max-w-full py-5 absolute top-0 left-0'>
            <div className="h-16 flex justify-between items-center">
                <div className="text-white text-2xl font-extrabold font-jakarta leading-[28.80px]">Bookies.</div>
                {
                    isMobile ? (
                        <>
                            <button type='button' className='ms-auto text-white text-[16px]'>
                                Menu
                            </button>
                            <hr className='bg-white opacity-[24]' />
                        </>
                    ) : (
                        <>
                            <div className="h-[19px] justify-between items-start flex">
                                <ul className='flex items-center gap-x-10'>
                                    {
                                        datas.map((item, index) =>
                                            <li key={index}>
                                                <a href={item.link} className="opacity-80 text-center text-white text-opacity-70 text-base font-normal font-jakarta leading-tight">
                                                    {item.name}
                                                </a>
                                            </li>)
                                    }
                                </ul>
                            </div>
                            <div className="h-16 px-11 py-5 bg-white rounded-[48px] justify-between items-center flex">
                                <button className="text-center text-primary text-base font-jakarta leading-tight">Start New Project</button>
                            </div>
                        </>
                    )
                }
            </div>

        </header>
    )
}
