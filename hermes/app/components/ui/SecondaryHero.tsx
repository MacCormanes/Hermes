import React from 'react'
import Image from 'next/image'

const SecondaryHero = () => {
  return (
    <div className=''>
        <Image 
            src='/content/chasing-dreams.webp'
            fill={true}
            alt='roller-coaster image'
            className=''
        />
    </div>
  )
}

export default SecondaryHero