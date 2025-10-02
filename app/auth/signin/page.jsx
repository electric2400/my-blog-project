import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, signIn } from "@/auth"
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth()
  console.log(session);

  if(session) {
    redirect("/new-post")
  }
  
  return (
      <main className='h-dvh flex'>
        <div className='flex-1 bg-linear-to-r from-pink-500 to-blue-500 max-lg:hidden'>
          <div className='flex flex-col items-center gap-6 pt-50'>
            <p className='text-white text-7xl font-bold'>Welcome to Tech News</p>
            <p className='text-white text-3xl'>Create an account and join the community</p>
          </div>
        </div>

        <div className='w-110 bg-white pt-25 px-14 flex flex-col  max-lg:w-full'>
          <p className='text-center text-2xl font-black'>Tech <span className='text-blue-500'>News</span></p>
          <div className='flex flex-col gap-6 mt-20'>
            <h1 className="text-center text-gray-800 font-bold text-lg">
            Sign in to your Account
            </h1>

            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button className='border flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full w-full z-50'>
              <FcGoogle/>
              <p>Continue with Google</p>
            </button>
            </form>

            <button className='border flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full w-full'>
              <FaApple/>
              <p>Continue with Apple</p>
            </button>
            <p className='text-sm text-gray-600 text-center'>By signing in you agree to our terms and privacy policy</p>
          </div>
        </div>
      </main> 
  )
}

export default page
