'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log(formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div id="contact" className="w-full min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Contact
          </p>
          <p className="py-6 text-gray-300">Get in touch with me</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="p-2 bg-[#112240] rounded-md text-white focus:outline-none border border-[#233554] focus:border-[#64ffda] mb-4"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className="p-2 bg-[#112240] rounded-md text-white focus:outline-none border border-[#233554] focus:border-[#64ffda] mb-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-[#112240] rounded-md text-white focus:outline-none border border-[#233554] focus:border-[#64ffda] mb-4"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500 duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact