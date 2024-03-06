"use client"
import React from 'react'
import Link from 'next/Link'

const Navbar = () => {
  return (
    <div className=' ml-16 mt-4'>
      <nav className=' flex gap-52'>
        <div className=' flex gap-8'>
        <logo>
          <img src="https://geniusdigest.com/wp-content/uploads/2023/07/GENIUS-DIGEST.svg" width={180} height={60} />
        </logo>
       <ul className=' flex gap-12 text-base mt-4'>
        <li><Link href="./dashboard" className=' className="transition duration-300 ease-in-out transform hover:text-purple-500 hover:scale-300 hover:text-lg'>DashBoard</Link></li>
        <li><Link href="" className=' className="transition duration-300 ease-in-out transform hover:text-purple-500 hover:scale-110 hover:text-lg'>Technology</Link></li>
        <li><Link href="" className=' className="transition duration-300 ease-in-out transform hover:text-purple-500 hover:scale-110 hover:text-lg'>Social Media</Link></li>
        <li><Link href="" className='className="transition duration-300 ease-in-out transform hover:text-purple-500 hover:scale-110 hover:text-lg'>News</Link></li>
        <li><Link href="" className=' className="transition duration-300 ease-in-out transform hover:text-purple-500 hover:scale-110 hover:text-lg'>Genral</Link></li>
        <li><Link href="" className='className="transition duration-300 ease-in-out transform hover:text-purple-500 hover:scale-110 hover:text-lg'>Blog</Link></li>
       </ul>
       </div> 
       <div className=' flex gap-5 mt-3'>
        <button className=' bg-purple-700 w-14 rounded-md h-8'>
          <Link href="">Login</Link>
        </button>
        <button className=' bg-purple-700 w-20 rounded-md h-8'>
          <Link href="./register">Register</Link>
        </button>
       </div>
      </nav>
    
    </div>
  )
}

export default Navbar
