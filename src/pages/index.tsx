import Head from 'next/head'
import { Container } from '~/components/Container'
import { Navbar } from '~/components/Navbar'
import { HomeMain } from '~/styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Naiara Galvão</title>
      </Head>

      <Navbar />

      <HomeMain>
        <Container>
          <h1>LOREM ipsum dolor sit amet consectetur.</h1>
        </Container>
      </HomeMain>
    </>
  )
}
