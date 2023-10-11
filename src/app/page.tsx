import Image from 'next/image'
import Hero from './components/Hero'
import Features from './components/Features'
import Quotes from './components/Quotes'
import Galleries from './components/Galleries'
import Testimonials from './components/Testimonials'
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Quotes />
      <Galleries />
      <Testimonials />
    </main>
  )
}
