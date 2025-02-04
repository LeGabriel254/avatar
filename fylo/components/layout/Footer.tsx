import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hero from "@/public/logo.svg"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1524] text-white py-20 px-6 md:px-10 lg:px-20 mt-[7rem]">
      <div className="flex mt-[2rem] md:flex-row justify-between items-center w-full">
        <div>
          {/* Footer Logo */}
          <Image className="ml-2 mt-[-5em]"
            src={Hero}
            alt="Hero Background"
            // layout="fill"
            objectFit="contain"
            width={200}
            height={40}
            quality={100}
            priority
          />
          <div className='flex text-start mt-4'>
            <h2>Lorem ispum dolor sit amet,consectetur <br /> adipiscing elit,sed do eiusmod tempor <br /> incididunt ut labore et doloe magna aliqua</h2>
            <div className='inline-flex ml-[6rem]'>
              <img src="images/call.svg" alt="phone" className="w-10 h-10 ml-[2rem]" />
              <span className="ml-3">+1-543-123-4567</span>
              <div className='inline-flex '>
              <img src="images/call.svg" alt="phone" className="w-10 h-10 ml-[2rem]" />
              <span className="ml-3">+1-543-123-4567</span>
            </div>
            </div>
          
        </div>

          </div>
      


        <nav className="grid md:grid-cols-1 ml-[10rem]">
          <Link href="/" className="hover:text-[#E2D609] text-lg transition-colors duration-300">About Us</Link>
          <Link href="/movies" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Jobs</Link>
          <Link href="/contact" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Press</Link>
          <Link href="/privacy" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Blogs</Link>
        </nav>
        <nav className="grid md:grid-cols-1 text-justify mr-[2rem]">
          <Link href="/" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Contact Us</Link>
          <Link href="/movies" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Terms</Link>
          <Link href="/contact" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Privacy</Link>
        </nav>




        {/* <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          */}
      </div>
    </footer>
  )
}

export default Footer