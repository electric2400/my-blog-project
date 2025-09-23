"use server"
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Blogs from './blogs'

const page = async () => {
    const session = await auth()
    if (!session) {
        redirect("/auth/signin")
    }
    
  return (
    <main className='min-h-dvh'>
      <Blogs session={session}/>
    </main>
  )
}

export default page
