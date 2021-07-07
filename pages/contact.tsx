import React from 'react'
import { IconBrandGithub, IconMail } from '@tabler/icons';
import Header from '../components/Header';
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head'
import { motion } from 'framer-motion';
import Lottie from 'react-lottie'
import animationData from "../animation/check.json"
import loadingAnimationData from '../animation/load.json'

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const variants = {
    loading: {
      opacity: 1,
      display: "flex"
    },
    notloading: {
      opacity: 0,
      display: "none"
    }
  }
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const loadOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  console.log(loading)
  return (
    <>
      <Head>
        <title>Thakr | Contact</title>
      </Head>
      <Header />
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="h-screen w-screen flex flex-row sm:flex-col md:flex-col lg:flex-col justify-center gap-36 sm:gap-0 md:gap-0 lg:gap-0 sm:justify-center md:justify-center lg:justify-center items-center">
        <div className="text-center ml-36 md:ml-0 sm:ml-0 lg:ml-0 sm:mt-10 md:mt-10 lg-mt-10">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-white sm:text-6xl">Contact me</h1>
          <p className="text-xl mt-2">For questions, comments, or really anything</p>
          <div className="mt-2 flex flex-row justify-center items-center">
            <IconBrandGithub className="mr-2 text-gray-500 hover:text-black transition duration-200 ease-in-out cursor-pointer w-8 h-8" onClick={() => window.open('https://github.com/thakr')}/>
            <IconMail className="text-gray-500 hover:text-black transition duration-200 ease-in-out cursor-pointer w-8 h-8" onClick={() => window.open('mailto:shaan@thakr.dev')}/>
          </div>
        </div>
        
        <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} className="shadow-xl relative rounded-lg mr-36 sm:mr-0 sm:mt-5 md:mr-0 md:mt-5 lg:mr-0 lg:mt-5 p-10">
          <motion.div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg flex justify-center items-center text-center" variants={variants} initial="notloading" animate={loading && "loading"}>
            {loading ? <Lottie
            options={loadOptions}
            height={200}
            width={200} />	: <Lottie 
          options={defaultOptions}
          height={200}
          width={200}
          />}
          </motion.div>
          <form onSubmit={(event: React.SyntheticEvent) => {
            event.preventDefault()
            setLoading(true)
            axios.post('/api/contact', {
              name,
              email,
              message
            })
            .then ((res) => {
              console.log(res)
              setTimeout(() => {setLoading(false)}, 1000)
            })
            .catch ((err) => console.log(err))
          }}>
            <div className="flex justify-center items-center sm:flex-col md:flex-col">
              <input required type="text" placeholder="Name" className="form-text mr-5 sm:mr-0 md:mr-0 md:mb-5 sm:mb-5 rounded-md border-gray-300" value={name} onChange={(e) => setName(e.target.value)}></input>
              <input required type="email" placeholder="Email" className="form-text rounded-md border-gray-300" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <textarea required className="form-textarea h-52 w-full rounded-md border-gray-300 mt-5 resize-none" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className="flex justify-end sm:justify-center md:justify-center items-center mt-6">
            <input type="submit" value="Submit" className="cursor-pointer text-center px-3 py-2 focus:outline-none rounded-lg bg-black border-black border-2 text-white font-semibold hover:bg-transparent hover:text-black transition ease-in-out duration-200"></input>
            </div>
          </form>
          
        </motion.div>
        
      </motion.div>
    </>
    
  )
}
