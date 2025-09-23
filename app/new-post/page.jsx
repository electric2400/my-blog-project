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
    <main className='min-h-dvh'>
      <NewPost session={session}/>
    </main>
  )
}

export default page
