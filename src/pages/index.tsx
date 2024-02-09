import AboutUs from '@/components/AboutUs'
import FAQ from '@/components/FAQ'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import PruebasTabla from '@/components/PruebaTabla'
import { MenuProvider } from '@/context/MenuContex'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <AboutUs />
      <FAQ />
      <Footer />
    </>
  )
}
