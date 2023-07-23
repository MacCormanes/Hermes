import React from 'react'
import Image from 'next/image'
import BagCount from './BagCount'

const Bag = () => {
  return (
    <div className='w-20 flex'>
        <Image 
            className='z-0'
            src="/icons/bag.svg"
            width={25}
            height={25}
            alt="bag"/>
    </div>
  )
}

export default Bag