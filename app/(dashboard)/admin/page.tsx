// 'use client'
import Navbar from '@/components/Navbar'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React, { useState } from 'react'

import { PrismaClient ,User} from '@prisma/client';


const page = async() => {
   
    
    const session = await getServerSession(authOptions);
    const prisma = new PrismaClient();
    const sessionUsername = session?.user.username;
      
    const user = await prisma.user.findFirst({
        where: {
            username: sessionUsername,
        },
    });
      
    if (!user) {
        console.error('User not found.');
        return <div className='bg-black text-white text-4xl flex items-center justify-center h-screen'>Please to login to see this page </div>
        ;
    }
    prisma.$disconnect() .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });                
    
       
    if(session?.user){    
        return (
            <>
                <Navbar />
                {/* <MeetingTypeList  /> */}
                <div className='bg-black text-white text-4xl flex flex-col h-screen items-center justify-center '>
                    <div className='bg-[#171717] p-12 rounded-md flex flex-col items-center justify-center '>
                        <p className='text-xl'>Welcome to</p>   
                        <div className="tracking-widest  uppercase text-4xl md:text-6xl xl:text-8xl font-extrabold bg-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text ">Hire </div>
                        <div className="  capitalize text-2xl font-extrabold bg-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text ">a virtual interview platform for Unstop</div>
                        <div className='flex flex-col  py-4'>
                            <span className='text-xl'>User Info:</span>
                            <p className='text-left text-green-600 font-bold'>Name: <span className=' text-[#f5f5f7]'>{user.username}</span></p>
                            <p className=' text-green-600 font-bold'>Email : <span className=' text-[#f5f5f7]'>{user.email}</span></p>
                            <p className='text-green-600 font-bold'>Role: <span className=' text-[#f5f5f7]'>{user.role} </span></p>
                            
                        </div>
                    
                        
                        <Link href="/" className='bg-[#222222] px-4 py-6 shadow-md font-extrabold text-[#F5F5F7] rounded-xl flex flex-col hover:text-[#F5F5F7] border-[1px] border-transparent hover:border-[#F5F5F7] hover:bg-black  items-center justify-center '>Home</Link>
                    
                    </div>
                </div>
            </>
          )
    }
    return <div className='bg-black text-white text-4xl flex items-center justify-center h-screen'>Please to login to see this page </div>
        
}

export default page

