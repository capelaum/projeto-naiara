import Head from 'next/head'
import { Navbar } from '~/components/Navbar'
import { About } from '~/components/Sections/About'
import { Hero } from '~/components/Sections/Hero'
import { Services } from '~/components/Sections/Services'
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
