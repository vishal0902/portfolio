'use client'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { id: 2, name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { id: 3, name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { id: 4, name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { id: 5, name: 'Node.js', icon: FaNode, color: 'text-green-500' },
    { id: 6, name: 'Express', icon: SiExpress, color: 'text-gray-400' },
    { id: 7, name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { id: 8, name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { id: 9, name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div id="skills" className="w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Skills
          </p>
          <p className="py-6 text-gray-300">These are the technologies I work with</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {skills.map(({ id, name, icon: Icon, color }) => (
            <motion.div
              key={id}
              variants={item}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-[#112240]"
            >
              <Icon size={50} className={`w-20 mx-auto ${color}`} />
              <p className="mt-4 text-gray-300">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills