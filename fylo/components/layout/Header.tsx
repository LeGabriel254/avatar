import React from 'react'
import Image from 'next/image';
import Logo from '@/public/logo.svg'


const Header:React.FC = () => {
  return (
   <header className=" py-4 px-6 flex flex-col md:flex-row items-center justify-between">
   {/* Logo */}
   <div className="mt-4 flex items-center space-x-2 ml-5">
    <Image
    src={Logo}
    className="h-[3rem] w-[6rem]"
    alt="Logo"
    />
   </div>

    {/* Accommodation Types */}
    <nav className="w-full mt-4 md:mt-0 md:w-auto mr-[2rem]">
        <ul className="flex space-x-4 justify-center text-slate-300 gap-6">
          <li className="hover:underline cursor-pointer">Features</li>
          <li className="hover:underline cursor-pointer">Team</li>
          <li className="hover:text-blue-600 cursor-pointer">Sign In</li>
        </ul>
      </nav>
   </header>
  )
}

export default Header;