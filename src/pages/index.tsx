import Head from 'next/head'
import { Navbar } from '~/components/Navbar'
import { About } from '~/sections/About'
import { Hero } from '~/sections/Hero'
import { Services } from '~/sections/Services'
import { HomeMain } from '~/styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dra. Naiara Galvão - Ginecologista e Obstetrícia</title>
      </Head>

      <Navbar />

      <HomeMain>
        <Hero />
        <About />
        <Services />
      </HomeMain>
    </>
  )
}
