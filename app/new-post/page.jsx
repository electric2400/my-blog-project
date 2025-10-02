'use server'
import React from 'react'
import NewPost from './NewPostClient'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
 


const page = async () => {
   const session = await auth()
    if (!session) {
    redirect('/auth/signin')
   }

  return (
    <main className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
      <NewPost session={session}/>
    </main>
  )
}

export default page
