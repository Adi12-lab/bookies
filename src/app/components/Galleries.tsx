import Image from 'next/image'
import { galleries } from '@/constant'
function Galleries() {

  return (
    <section className="container max-w-full py-28">
            <div className="w-[372px] md:w-[794px] mx-auto">
                <h2 className="font-jakarta font-semibold text-[32px] md:text-5xl text-dark leading-[41.60px] text-center mb-[24px]">Our library gallery</h2>
                <p className="text-center text-opacity-70 text-dark leading-relaxed font-jakarta">Books are a meeting of two forces that have succeeded in influencing human education, namely art and science.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-5">
                {
                    galleries.map((item, index) => {
                        return (
                            <Image key={index} src={item} alt='library' sizes='(min-width: 768px) 700px, 200px' loading='eager' className='rounded-lg' />
                        )
                    })
                }
            </div>

        </section>
  )
}

export default Galleries