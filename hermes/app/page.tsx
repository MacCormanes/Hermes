import Navbar from './components/Navbar'
import PrimaryHero from './components/PrimaryHero'
import Directory from './components/Directory'

export default function Home() {
  return (
    <div className='font-spline'>
      <Navbar />
      <PrimaryHero />
      <Directory />
    </div>
    )
}
