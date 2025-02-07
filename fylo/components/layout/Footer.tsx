import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hero from "@/public/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
          <h2 className="mt-4">Lorem ispum dolor sit amet,consectetur <br /> adipiscing elit,sed do eiusmod tempor <br /> incididunt ut labore et doloe magna aliqua</h2>
        </div>
        <div className='mt-2 ml-6'>
          <div className='flex md:justify-center items-center gap-6'>
            <img src="images/call.svg" alt="phone" className="w-8 h-18 ml-[2rem]" />
            <span className="ml-3">+1-543-123-4567</span>
          </div>
          <div className='flex md:justify-center items-center mt-4 gap-6'>
            <img src="images/email.svg" alt="phone" className="w-8 h-8 ml-[2rem]" />
            <span className="ml-3 text-base">example@fylo.com</span>
          </div>
        </div>





        <nav className="grid md:grid-cols-1 ml-[1rem] mt-6">
          <Link href="/" className=" text-lg transition-colors duration-300">About Us</Link>
          <Link href="/movies" className=" text-lg font-light hover:text-slate-300 transition-colors duration-300">Jobs</Link>
          <Link href="/contact" className="text-lg font-light  hover:text-slate-300 transition-colors duration-300">Press</Link>
          <Link href="/privacy" className=" text-lg font-light hover:text-slate-300 transition-colors duration-300">Blogs</Link>
        </nav>
        <nav className="grid md:grid-cols-1 text-justify mr-[2rem]">
          <Link href="/" className=" text-lg font-light hover:text-slate-3 transition-colors duration-300 ">Contact Us</Link>
          <Link href="/movies" className=" text-lg font-light  hover:text-slate-300 transition-colors duration-300">Terms</Link>
          <Link href="/contact" className=" text-lg font-light hover:text-slate-300 transition-colors duration-300">Privacy</Link>
        </nav>




        <div className="flex space-x-4 mb-9">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#aaeaee] border-solid">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#aaeaee]">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#aaeaee]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer