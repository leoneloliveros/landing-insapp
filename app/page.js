import Technologies from '@/components/Technologiies/Technologies'
import Navbar from '@/components/Navbar/Navbar'
import Features from '@/components/Features/Features'
import Header from '@/components/Header/Header'
import Team from '@/components/Team/Team'
import Panel from '@/components/Panel/Panel'
import Quote from '@/components/Quote/Quote'
import Pricing from '@/components/Pricing/Pricing'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Panel />
      <Pricing />
      <Team />
      <Quote />
      <Technologies />
    </>
  )
}
