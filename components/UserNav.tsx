'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const UserNav = () => {
  return (
    <div className='flex flex-row gap-6 items-center justify-center'>
      <Link href='/admin' className='w-12 h-12 rounded-full bg-white text-black flex font-bold items-center justify-center'>User</Link>
        <button onClick={()=> signOut({
          redirect:true,
          callbackUrl:`${window.location.origin}/sign-in`,
        })} className='bg-red-500 bg-red p-2 rounded-md text-white'>SignOut</button>
    </div>
  )
}

export default UserNav