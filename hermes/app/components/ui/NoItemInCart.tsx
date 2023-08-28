import Image from 'next/image'
import React from 'react'

const NoItemInCart = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[70vh] gap-8'>
      <Image src="/icons/empty-cart.png" alt='empty-cart-image' width={100} height={100} className='' />
      <h1 className='text-orange-950'>You have no items in cart</h1>
    </div>
  )
}

export default NoItemInCart