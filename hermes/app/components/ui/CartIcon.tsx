import React from 'react'
import ShoppingBag from '../../../public/icons/shopping-bag.svg'
import Image from 'next/image'
  

const CartIcon = () => {
  return (
    <div className='relative w-[36px] h-[36px] mr-5 flex justify-center'>
        <Image 
        src={ShoppingBag}
        fill
        sizes='20vw'
        alt='shopping-bag-icon'
        />
        <span className='flex justify-center mt-3'>0</span>
    </div>
  )
}

export default CartIcon