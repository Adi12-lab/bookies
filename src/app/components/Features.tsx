import { features } from '@/constant/index'
function Features() {
   
    return (
        <section className="container max-w-full py-28" id='visi'>
            <div className="mt-[13rem] w-[372px] md:w-[794px] mx-auto">
                <h2 className="font-jakarta font-semibold text-[32px] md:text-5xl text-dark leading-[41.60px] text-center mb-[24px]">Dream in your reading world</h2>
                <p className="text-center text-opacity-70 text-dark leading-relaxed font-jakarta">Books are a unique portable magic and perhaps the only true magic that doesn &apos; t immediately release all its secrets</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-5">
                {
                    features.map((item, index) => {
                        return (
                            <Card {...item} key={index} />
                        )
                    })
                }
            </div>

        </section>
    )
}

const Card = ({icon, text, key} : {icon: string, text: string, key: number}) => {
    return(
        <div key={key} className="group rounded-2xl bg-dark bg-opacity-10 py-16 flex flex-col items-center gap-y-8 hover:bg-primary hover:shadow transition">
            <div className="rounded-full w-12 h-12 bg-zinc-300">

            </div>

            <p className="text-center text-dark group-hover:text-white text-xl font-semibold font-jakarta leading-loose">
                {text}
            </p>
        </div>
    )
}

export default Features