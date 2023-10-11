import React from 'react'

function Quotes() {
    return (
        <section className='container max-w-full bg-primary py-20 text-white flex flex-col items-center gap-y-16'>
            <p className='md:w-[996px] font-semibold font-jakarta text-[32px] text-center leading-[41.60px] md:leading-[76.80px]'>
                Books are the cheapest vacation you can buy. Books are planes, trains, and paths of hope for people who want to be elsewhere.
                Books are the most loyal friends willing to accompany anywhere and anytime without ever thinking about themselves.
                The best friends of all time are books.
            </p>
            <div className="group hover:bg-white h-12 px-[50px] py-4 rounded-[48px] border border-white justify-center items-center inline-flex">
                <button className="text-center font-jakarta leading-tight group-hover:text-primary transition" type='button'>Join Membership</button>
            </div>
        </section>
    )
}

export default Quotes