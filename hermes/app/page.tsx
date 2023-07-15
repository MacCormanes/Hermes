import Image from 'next/image'
import Navbar from './components/Navbar'
import PrimaryHero from './components/PrimaryHero'

export default function Home() {
  return (
    <div>
      <Navbar />
      <PrimaryHero />
    </div>
    )
}
