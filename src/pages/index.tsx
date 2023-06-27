import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'
import { Navbar } from '~/components/Navbar'
import { About } from '~/sections/About'
import { Appointment } from '~/sections/Appointment'
import { Hero } from '~/sections/Hero'
import { Instagram } from '~/sections/Instagram'
import { Services } from '~/sections/Services'
import { Testimonials } from '~/sections/Testimonials'
import { HomeMain } from '~/styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dra. Naiara Galvão - Obstetrícia e Ginecologia</title>
      </Head>

      <Navbar />

      <HomeMain>
        <Hero />
        <About />
        <Services />
        <Appointment />
        <Testimonials />
        <Instagram />
      </HomeMain>
    </>
  )
}
