"use client"

import { fetchUsers } from '@/app/rtk-slices/someSlice';
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import React from 'react'
import { useEffect } from 'react';

const Page = () => {
  const users = useAppSelector(state => state.some.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {users.map((user: any) => {
        return (
          <p key={user.id}>{user.id} {user.name}</p>
        )
      })}
    </div>
  )
}

export default Page