'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe integration. Features include user authentication, product management, and secure payments.',
      tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://your-ecommerce.vercel.app',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Built using the MERN stack with Socket.io for real-time features.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://your-taskmanager.vercel.app',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'A responsive social media dashboard that aggregates data from various platforms. Features data visualization and analytics.',
      tech: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/social-dashboard',
      live: 'https://your-dashboard.vercel.app',
    },
  ]

  return (
    <div id="projects" className="w-full min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Projects
          </p>
          <p className="py-6 text-gray-300">Check out some of my recent work</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, tech, github, live }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="shadow-lg shadow-[#040c16] rounded-lg bg-[#112240]"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#64ffda] mb-4">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm text-[#64ffda] border border-[#64ffda] rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#64ffda] transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#64ffda] transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects