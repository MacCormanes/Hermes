import React from 'react'
import HeroCards from './ui/HeroCards'
import AnimateOnScroll from './ui/Animations/AnimationOnScroll';

const PrimaryHero = () => {
  const cardsStyles = {
    height: '1000px',
    width: '800px'
  };
  return (
    <div className='flex bg-gradient-to-t from-orange-100 to-orange-200 h-100'>
      <section className='flex flex-col justify-center w-1/2 px-12'>
        <h1 className='mb-3 text-5xl font-medium tracking-widest text-transparent bg-gradient-to-tl from-orange-400 to-orange-900 bg-clip-text'>Your style,</h1>
        <h1 className='mb-5 text-5xl font-medium tracking-wide text-transparent bg-gradient-to-tl from-orange-400 to-orange-900 bg-clip-text'>Your personality,</h1>
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