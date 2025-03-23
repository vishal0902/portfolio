'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#0a192f] fixed nav"
    >
      <div>
        <h1 className="text-4xl font-signature ml-2 text-[#64ffda]">Vishal Srivastava</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-[#64ffda] duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0a192f]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:text-[#64ffda] duration-200"
            >
              <a onClick={() => setNav(!nav)} href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  )
}

export default Navbar