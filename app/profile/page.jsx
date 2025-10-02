 "use server";
import { auth } from '@/auth';
import UpdateProfile from '@/components/UpdateProfile';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const session = await auth()

  


  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <main className='min-h-dvh'>
      <div className='flex items-center justify-center flex-col gap-5 my-5'>

        <img src={session?.user?.image || "/fb.png"} alt={session?.user?.name.name} />
        <h1>{session?.user?.name?.name}</h1>
        <p>{session?.user?.email}</p>
      </div>

      <UpdateProfile session={session} />
    </main>
  )
}

export default page