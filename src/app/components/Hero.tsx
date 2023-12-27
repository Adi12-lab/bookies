import Image from 'next/image';
import { library } from '@/assets';
export default function Hero() {
  return (
    <section className="container max-w-full bg-primary min-h-screen flex flex-col justify-center">
      <div className="flex flex-col md:justify-center md:items-center gap-y-8">
        <h1 className="md:text-center text-white text-[32px] md:text-[58px] font-bold font-jakarta leading-[44.8px] md:leading-[81.20px]">
          No matter how thin the book,
          <br />
          the knowledge is still thick
        </h1>
        <p className="opacity-70 text-[16px] md:text-center text-white text-xl font-normal font-jakarta leading-relaxed md:leading-loose">
          For those who read, there is no limit to the number of lives one can
          live,
          <br />
          because fiction, biographies and history offer an infinite number of
          lives.
        </p>
      </div>

      <div className="absolute left-[50%] bottom-[-50%] -translate-x-1/2 -translate-y-[80%] md:-translate-y-[30%] w-[327px] h-[249px] md:w-[65%] md:h-[53%] max-w-[996px] max-h-[400px]">
        <Image
          src={library}
          alt="library"
          fill
          priority
          className="rounded-lg object-cover"
          sizes="(min-width: 768px) 900px, 500px"
          loading="eager"
        />
      </div>
    </section>
  );
}
