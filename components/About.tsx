'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            About
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mt-10 text-gray-300"
        >
          <p className="mb-4">
            I am a passionate Full Stack Developer with expertise in building modern web applications.
            My journey in web development started with HTML, CSS, and JavaScript, and has evolved to
            include modern frameworks and technologies.
          </p>
          
          <p className="mb-4">
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have experience
            with both SQL and NoSQL databases. I'm particularly enthusiastic about creating responsive,
            user-friendly interfaces and robust backend systems.
          </p>

          <p>
            When I'm not coding, I enjoy staying up-to-date with the latest technology trends and
            contributing to the developer community. I believe in writing clean, maintainable code
            and following best practices in software development.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About