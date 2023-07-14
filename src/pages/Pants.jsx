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
      transition={{ duration: 0.8, delay: 0 }}>
      {pants.length ? pants.map((product) => (
        <div className='grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
          <Product data={product} />
        </div>
      )) :
        <div className='text-center h-screen overflow-hidden mx-auto w-96'>
          <img className="rounded-xl ml-0 mt-10 sm:ml-0 h-96 w-64 sm:h-96 sm:w-96" src={empty} alt={"nnn"} />
          <div className='pt-10 sm:mt-4 '>there are no products</div>
        </div>
      }

      <div>{pants.length ? user?.isAdmin ? <button className='border-4 border-black block text-center mx-auto text-center px-2 py-1 rounded-xl my-5' onClick={deleteAllProudcts}>delete all products</button> : null : null}</div>
    </motion.div>
  )
}

export default Pants