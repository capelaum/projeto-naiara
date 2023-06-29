import 'keen-slider/keen-slider.min.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ThreeDots } from 'react-loader-spinner'
import { Navbar } from '~/components/Navbar'
import { About } from '~/sections/About'
import { Appointment } from '~/sections/Appointment'
import { Contact } from '~/sections/Contact'
import { Footer } from '~/sections/Footer'
import { Hero } from '~/sections/Hero'
import { Services } from '~/sections/Services'
import { Testimonials } from '~/sections/Testimonials'
import { HomeMain } from '~/styles/home'

const Instagram = dynamic(
  () => import('~/sections/Instagram').then((res) => res.Instagram),
  {
    ssr: false,
    loading: () => (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#963F33"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    ),
  },
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Dra. Naiara Galvão - Obstetrícia e Ginecologia</title>
      </Head>

      <Navbar />

      <HomeMain id="main">
        <Hero />
        <About />
        <Services />
        <Appointment />
        <Testimonials />
        <Instagram />
        <Contact />
      </HomeMain>

      <Footer />
    </>
  )
}
