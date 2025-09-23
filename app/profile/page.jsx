import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const session = await auth()
    if (!session) {
        redirect('/auth/signin')
    }
  return (
    <main className='min-h-dvh'>
      <h1>My profile</h1>
    </main>
  )
}

export default page
