import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-dvh py-20 lg:px-20 max-lg:px-5'>
      <div className='w-full lg:w-3xl flex flex-col gap-5 mb-40'>
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

      <div className='flex justify-end mb-10'>
        <div className='flex flex-col'>
           <h1 className='text-2xl flex justify-center text-black'>Our Vision</h1>
           <p className='lg:w-lg text-lg justify-center'> 
             To become a trusted hub where readers discover timely, insightful, and simplified tech news that
             empowers them to understand innovation, embrace change, and stay ahead in the digital world.
           </p>
        </div>
      </div>

      <div className='flex mb-30'>
        <div className='flex flex-col'>
           <h1 className='text-2xl flex justify-center'>Our Mission</h1>
           <p className='lg:w-lg text-lg justify-center'> 
             To make technology less overwhelming and more exciting for students, beginners, 
             and professionals alike.
           </p>
        </div>
      </div>

     {/* categories section starts */}
      <h1 className='text-3xl font-bold mb-3'>Categories</h1>

      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 justify-items-center mb-20'>
        <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
          <Image
          src={"/core-tech.jpg"}
          alt="logo"
          width={900}
          height={900}
          className="w-full h-50"
          />
          <p className='text-center text-xl font-semibold'>Core tech news</p>
          <p className='text-center'>trending updates in the tech world.</p>
        </Link>

        <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
          <Image
          src={"/software-developement.jpg"}
          alt="logo"
          width={900}
          height={900}
          className="w-full h-50"
          />
          <p className='text-center text-xl font-semibold'>Software & Development</p>
          <p className='text-center'>latest app launches, updates, productivity tools.</p>
        </Link>

        <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
          <Image
          src={"/gadgets-img.jpg"}
          alt="logo"
          width={900}
          height={900}
          className="w-full h-50"
          />
          <p className='text-center text-xl font-semibold'>Devices & Gadgets</p>
          <p className='text-center'>latest hardware releases: Smartphones & Gadgets, PCs & Laptops,
            Smartwatches e.t.c.
          </p>
        </Link>

        <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
          <Image
          src={"/ai-img.jpg"}
          alt="logo"
          width={900}
          height={900}
          className="w-full h-50"
          />
          <p className='text-center text-xl font-semibold'>Tech Trends</p>
          <p className='text-center'>AI & machine learning, blockchain, cybersecurity.</p>
        </Link>

        <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
          <Image
          src={"/lifestyle-img.jpg"}
          alt="logo"
          width={900}
          height={900}
          className="w-full h-50"
          />
          <p className='text-center text-xl font-semibold'>Lifestyle & Future tech</p>
          <p className='text-center'>gaming & esports, quantum computing and futuristic inventions.</p>
        </Link>

        <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
          <Image
          src={"/business-img.jpg"}
          alt="logo"
          width={900}
          height={900}
          className="w-full h-50"
          />
          <p className='text-center text-xl font-semibold'>Industry & Business</p>
          <p className='text-center'>tech policy & regulation, analysis on the tech economy.</p>
        </Link>


        


      </div>
     {/* categories section ends */}


      <div className='flex flex-col gap-4 items-center'>
        <p className='text-black text-3xl font-bold'>Leadership</p>
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
