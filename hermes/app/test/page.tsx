"use client"

import { fetchUsers } from '@/app/rtk-slices/someSlice';
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { addUserCartItems } from '@/firebase/test';
import React from 'react'
import { useEffect } from 'react';
import { fetchUserCart } from '../rtk-slices/cartSlice';
import { doc } from 'firebase/firestore';
import { auth, db } from '@/firebase/firebase.utils';

const Page = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.cartItems)


  useEffect(() => {
    dispatch(fetchUserCart())
    console.log(cartItems)
  }, [])
  
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <p key={item.id}>{item.id} {item.name}</p>
        )
      })}
    </div>
  )
}

export default Page