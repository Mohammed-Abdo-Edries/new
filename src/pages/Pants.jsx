import React, { useEffect, useState } from 'react'
import { Product } from '../components/product'
import axios from 'axios'
import url from "../http-common"
import { useAuthContext } from '../hooks/useAuthContext'
import { motion } from "framer-motion"
import empty from "../assets/no-products.jpg"

const Pants = () => {
  const [pants, setPants] = useState([])
  const { user } = useAuthContext()
  const deleteAllProudcts = () => {
    email = user?.email
    axios.delete(`${url}/product/deleteAllProudcts`,
      Headers = {
        headers: {
          "Content-Type": "multipart/form-data",
          category: "pants",
          email
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    axios.get(`${url}/product/`,
      Headers = {
        headers: {
          "Content-Type": "multipart/form-data",
          category: "pants"
        }
      })
      .then(response => {
        setPants(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      exit={{ opacity: 0, y: 20 }}>
      {pants.length ?
        <div className='grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
          {pants.length ? pants.map((product) => (
            <Product data={product} />
          )) : null
          }
        </div>
        :
        <div className='container text-center mx-auto h-[calc(100vh-160px)]'>
          <img className="rounded-xl block mx-auto mt-10 h-96 w-64 sm:w-96" src={empty} alt={"nnn"} />
          <div className='pt-4 sm:mt-4 '>there are no products</div>
        </div>
      }
      <div>{pants.length ? user?.isAdmin ? <motion.button initial={{ x: -250 }} animate={{ x: -10 }} transition={{ delay: 1.5, type: 'spring', stiffness: 500 }} whileHover={{ scale: 1.1 }}
        className='bg-purple-700 px-3 py-2 text-white text-base block text-center mx-auto rounded-xl my-5' onClick={deleteAllProudcts}>delete all products</motion.button> : null : null}</div>
    </motion.div>
  )
}

export default Pants