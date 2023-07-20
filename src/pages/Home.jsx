import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { motion } from "framer-motion"
import homepage from "../assets/homepage.jpg"

const Home = () => {
  const { user } = useAuthContext()

  return (
    <motion.div className='ml-12 mr-8 px-2 mt-4 py-2 sm:h-[calc(100vh-100px)] font-bold text-lg'
      initial={{ opacity: 0, y: 40 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: .3 }}
      exit={{ opacity: 0, y: 20 }}>
      <div className=''>Hello there {user ? user.firstname + " " + user.lastname : null}</div><br />
      {/* <motion.div></motion.div> */}
      <motion.img initial={{ opacity: 0, y: 40 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        exit={{ opacity: 0, y: 20 }}
        className="rounded-xl mx-auto h-96 w-64 sm:h-96 sm:w-96" src={homepage} alt={"nnn"} />
      <motion.div className='pt-4 sm:px-20' initial={{ opacity: 0, y: 40 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        exit={{ opacity: 0, y: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore debitis dolorem suscipit consequuntur aliquam quos dolorum incidunt praesentium consectetur architecto?</motion.div>
    </motion.div>
  )
}

export default Home