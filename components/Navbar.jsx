"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useSession } from "next-auth/react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from "next-auth/react"


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession()
  console.log(session);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
   
 const navItems =[
        {label: "Home", url: "/"},
        {label: "About", url: "/about"},
        {label: "Contact", url: "/contact"},
        {label: "Blogs", url: "/blogs"},
    ]

    

  return (
     <nav className='shadow-md flex justify-around max-lg:justify-between items-center py-6 px-3'>
        <Link href={"/"} className='flex items-center gap-1 z-40'>
          <Image
          src={"/logo.jpg"}
          alt="logo"
          width={900}
          height={900}
          className="w-30 h-12"
        />
        </Link>

         
        {/* Desktop view */}
        <div className='lg:flex items-center gap-6 hidden'>
            {navItems.map((item, index) => (
                <Link 
                key={index}
                href={item.url} className='text-gray-800 hover:text-blue-600 transition-all duration-150 text-lg text-xl'    
            >
               {item.label}
            </Link> 
            ))}   
        </div>


        {/* mobile and tab view*/}
        <div className={`lg:hidden bg-white h-dvh w-full absolute top-0 left-0 
        flex flex-col items-center gap-10 pt-20 
            ${navOpen ? "opacity-100" : "opacity-0"
            }`}>
                
             {navItems.map((item, index) => (
                <Link
                onClick={()=> setNavOpen(false)}
                key={index}
                href={item.url} className='text-gray-800 hover:text-blue-600 transition-all duration-150 text-xl'

            >
               {item.label}
            </Link> 
            ))}
        </div>

        {
            session? ( <div className='ml-auto lg:ml-0'>
      <button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img className='w-10 h-10 rounded-full' src={session?.user?.image} 
        alt={session?.user?.name.slice(0,2).toUpperCase()} />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}><Link href={"/profile"}>My Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/new-post"}>New Post</Link></MenuItem>
        <MenuItem onClick={handleClose}><button onClick={() => signOut()}>Sign Out</button></MenuItem>
      </Menu>
    </div>) :(
         <Link href={"auth/signin"} className='flex gap-2 items-center hover:text-blue-600 transition-all 
         duration-150 text-lg 
        text-gray-800 max-lg:ml-auto z-40'>
        
        <p className='max-md:hidden text-xl'>Sign In</p>
        <FaRegUser />
        </Link>
            )}

       
        <button
         onClick={() => setNavOpen(!navOpen)}
         className='lg:hidden text-2xl ml-2 z-40'
        >
            {navOpen ? <IoMdClose/> : <RiMenu3Line/>} 
        </button>
     </nav>
  )
}

export default Navbar
