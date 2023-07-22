import React from 'react'
import HeroCards from './ui/HeroCards'
import AnimateOnScroll from './ui/Animations/AnimationOnScroll';

const PrimaryHero = () => {
  const cardsStyles = {
    height: '1000px',
    width: '800px'
  };
  return (
    <div className='bg-gradient-to-b from-orange-50 to-orange-100 flex h-100'>
      <section className='w-1/2 flex flex-col justify-center px-12'>
        <h1 className='text-5xl tracking-widest font-medium mb-3 bg-gradient-to-tl from-orange-400 to-orange-900 bg-clip-text text-transparent'>Your style,</h1>
        <h1 className='text-5xl tracking-wide font-medium mb-5 bg-gradient-to-tl from-orange-400 to-orange-900 bg-clip-text text-transparent'>Your personality,</h1>
        <p className='text-xl font-light text-orange-900'>What you wear says a lot about</p>
        <p className='text-xl font-light text-orange-900'>who you are. Wear it proud!</p>
      </section>
      <div className='w-1/2'>
        <AnimateOnScroll>
          <HeroCards />
        </AnimateOnScroll>
      </div>
    </div>
  )
}

export default PrimaryHero