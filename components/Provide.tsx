'use client'
import { SessionProvider } from 'next-auth/react'
import { FC,ReactNode } from 'react';

interface ProviderProps{
    children :ReactNode;
}
const Provide :FC<ProviderProps>= ({children}) => {
   
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Provide