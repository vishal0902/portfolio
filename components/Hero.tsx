'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <div id="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I specialize in building and designing exceptional digital experiences.
            Currently, I love to work on web applications using technologies like
            React, Next.js, Node.js, and MongoDB.
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#projects"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={25} className="ml-1" />
              </span>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 items-center"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#64ffda] transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#64ffda] transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
            <div className="w-full h-full bg-[#0a192f] rounded-2xl p-4">
              <pre className="text-[#64ffda] font-mono text-sm">
                <code>{`const developer = {
  name: 'Vishal',
  type: 'Full Stack',
  location: 'India',
  skills: ['React', 'Node.js', 'MongoDB'],
  passion: 'Building amazing web apps'
}`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero