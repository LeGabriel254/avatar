import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-4 px-6 shadow-md flex justify-between items-center"
    >
      {/* Left: Logo & Branding */}
      <div className="flex items-center gap-2">
        <FaGithub className="text-3xl text-gray-100" />
        <h1 className="text-xl font-bold tracking-wide">GitHub Explorer</h1>
      </div>

      {/* Center: Hidden on Mobile, Visible on Large Screens */}
      <p className="hidden md:block text-gray-400 text-sm">
        Search for any GitHub user and explore their profile 🚀
      </p>

      {/* Right: Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center py-4 shadow-lg md:hidden"
        >
          <p className="text-gray-300 text-sm px-4">Search for any GitHub user 🚀</p>
        </motion.div>
      )}
    </motion.header>
  );
}
