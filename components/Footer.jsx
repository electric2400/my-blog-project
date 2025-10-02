import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <main className='bg-white border-t border-gray-300 pb-15 py-8 px-6 max-lg:px-4'>
      <div className='flex justify-between max-md:flex-col max-md:gap-10'>
        <Link href={"/"} className='flex'>
          <Image
                   src={"/logo.jpg"}
                   alt="logo"
                   width={900}
                   height={900}
                   className="w-30 h-12"
                 />
        </Link>

      <section className='grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-3 gap-5 text-sm mb-2 text-gray-600'>
        <div>
          <span className='text-black font-semibold text-lg'>COMMUNITY</span>
          <div className='mt-2 hover:underline cursor-pointer flex flex-col'>
            <Link href={"/contact"}>Contact Us</Link>
            <Link href={"#"}>Community</Link>
          </div>
        </div>

        <div>
          <span className='text-black font-semibold text-lg'>COMPANY</span>
          <div className='mt-2 hover:underline cursor-pointer flex flex-col'>
            <Link href={"/about"}>About Us</Link>
            <Link href={"#"}>Affiliates</Link>
            <Link href={"#"}>Team</Link>
            
          </div>
        </div>

        <div>
          <span className='text-black font-semibold text-lg'>USEFUL LINKS</span>
          <div className='mt-2 hover:underline cursor-pointer flex flex-col'>
            <Link href={"#"}>Terms of use</Link>
            <Link href={"#"}>Privacy Policy</Link>
           
          </div>
        </div>

        <div>
           <span className='text-black font-semibold text-lg'>Find us in social media</span>
          <div className='flex gap-4 text-lg mt-2 text-gray-600'>
            <FaInstagram/>
           <FaFacebook/>
           <FaXTwitter/>
           <FaLinkedin/>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}

export default Footer
