import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-dvh py-20 lg:px-20 max-lg:px-5'>
      <div className='w-full lg:w-3xl flex flex-col gap-5 mb-30'>
        <p className='text-4xl text-black font-bold max-md:text-2xl'>Welcome to Tech News, Create an account and join the community.</p>
        <p className='text-black text-lg'>
          Welcome to TechNews – your hub for technology, creativity, and innovation.
          At Technews, we break down the fast-moving world of tech into simple, practical insights you can apply. 
          From coding tutorials and software tips to industry trends and personal projects, this space is built to share 
          knowledge, spark ideas, and inspire growth.
          
           Whether you’re just starting out in programming, exploring design tools, or looking to stay updated with the
          latest tech trends, you’ll always find something valuable here.
          Techsnews is more than just a blog – it’s a growing community of learners, builders, and problem-solvers. 
          We believe technology should empower people to create, connect, and make an impact.
          Stay curious. Keep building. Welcome to the sphere where tech meets you.</p>
      </div>

      <div className='flex justify-between mb-30 gap-10 max-lg:flex-col'>
        <Image
        src={"/blog-img1.png"}
        alt="blog-img"
        width={900}
        height={900}
        className="w-full h-70"
        />
        <div className='flex flex-col'>
           <h1 className='text-2xl flex justify-center text-black'>Our Vision</h1>
           <p className='lg:w-lg text-lg justify-center'> 
             To become a trusted hub where readers discover timely, insightful, and simplified tech news that
             empowers them to understand innovation, embrace change, and stay ahead in the digital world.
           </p>
        </div>
      </div>


      <div className='flex mb-50 gap-10 max-lg:flex-col'>
        <div className='flex flex-col'>
           <h1 className='text-2xl flex justify-center'>Our Mission</h1>
           <p className='lg:w-lg text-lg justify-center'> 
             To make technology less overwhelming and more exciting for students, beginners, 
             and professionals alike.
           </p>
        </div>
         <Image
        src={"/blog-img2.webp"}
        alt="blog-img2"
        width={900}
        height={900}
        className="w-full h-70"
        />

      </div>


      <div className='flex flex-col gap-4 items-center'>
        <p className='text-black text-4xl font-bold'>Leadership</p>
        <div>
          <p className='font-black font-semiboold text-lg'>Editor-in-chief</p>
          <a href="https://www.linkedin.com/in/alex-ogbonna-38b973352?utm_source=share&utm_campaign=share
          _via&utm_content=profile&utm_medium=ios_app" className='text-blue-500 underline'>Ogbonna Alex</a>
        </div>
        <div>
          <p className='font-black font-semiboold text-lg'>Deputy editor</p>
          <a href="https://www.linkedin.com/in/israel-ogbonna-u?utm_source=share&utm_campaign=share_via&utm_
          content=profile&utm_medium=ios_app" className='text-blue-500 underline'>Ogbonna Israel</a>
        </div>
        <div>
          <p className='font-black font-semiboold text-lg'>Developer</p>
          <a href="" className=''>Ogbonna Alex</a>
        </div>
      </div>
    </main>
  )
}

export default page
