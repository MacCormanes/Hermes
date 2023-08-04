import React from 'react'
import ShoppingBag from '../../../public/icons/shopping-bag.svg'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '@/app/context/cart.context'
import { Badge } from '@/components/ui/badge'

const CartIcon = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className='relative w-[36px] h-[36px] mr-5 flex justify-center'>
        <Image 
        src={ShoppingBag}
        fill
        sizes='20vw'
        alt='shopping-bag-icon'
        />
        <Badge className='flex justify-center mt-3 text-lg bg-transparent text-orange-950'>{cartItems.length}</Badge>
    </div>
  )
}

export default CartIcon