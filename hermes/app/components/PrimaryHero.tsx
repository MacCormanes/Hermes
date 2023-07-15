import React from 'react'
import HeroCards from './ui/HeroCards'

const PrimaryHero = () => {
  return (
    <div className='bg-gradient-to-l from-slate-200 to-slate-400 flex'>
      <section className='w-1/2'>
        <h1>Your style, Your personality</h1>
        <p>What you wear says a lot about who you are. Wear it proud!</p>
      </section>
      <div className='w-1/2'>
        <HeroCards />
      </div>
    </div>
  )
}

export default PrimaryHero