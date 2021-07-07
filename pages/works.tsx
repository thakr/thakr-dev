import React from 'react'
import Head from 'next/head'
import WorksCard from '../components/WorksCard'
import Header from '../components/Header'
import {motion} from 'framer-motion'
import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'
export default function Works() {
  const [offset, setOffset] = useState(0)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  }
  
  const tileOffsetHelper = (i: any) => {
    return (i*(i === 1 ? 357 : (385)))
  }
  const tiles = [
    <WorksCard key={1} style={`translateX(-${tileOffsetHelper(offset)}px)`} img="/triviahit.jpg" title="triviahit" desc="“triviahit” is a 1v1 online multiplayer trivia game fit with matchmaking and a ranking system. The frontend was built using React and Tailwind CSS. The backend was built on a Node.js server with express, using Socket.io for real-time data transfer. I also used MongoDB to store user data." srclink="https://github.com/thakr/trivia-app" link="https://triviahit.games"/>,
    <WorksCard key={2} style={`translateX(-${tileOffsetHelper(offset)}px)`} img="/oneform.jpg" title="oneform" desc="“oneform” was the first full-stack application I built. It is a relatively simple app for creating and sharing forms, but is unique in its own way. Unlike regular forms, questions are answered independently, rather than submitting them all at the end. This is ideal for quizzes and tests, and oneform has support for correct and incorrect answers. It was built using the MERN stack, which includes MongoDB, Express, React, and Node.js." srclink="https://github.com/thakr/oneform.me" link="https://oneform.me"/>,
    <WorksCard key={3} style={`translateX(-${tileOffsetHelper(offset)}px)`} img="/thakr.jpg" title="thakr.dev" desc="This very website! Built with Next.js, Tailwind CSS, and Typescript. " srclink="#" link="https://thakr.dev"/>,
  ]
  return (
    <>
      <Head>
        <title>Thakr | Works</title>
      </Head>
      <Header />
      <div className="flex items-center justify-center w-screen h-screen">
        <motion.div className="py-20 px-0 flex-shrink-0 max-w-full" variants={container} initial="hidden" animate="show">
          <div className="flex flex-row flex-shrink-0 overflow-x-hidden overflow-y-hidden">
            
            <motion.div className="h-auto flex items-center justify-center mb-20 mx-5" animate={offset && {transform: `translateX(-${tileOffsetHelper(offset)}px)`} as any} style={{width: '22rem'}}>
              <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-white ml-5">Works</h1>
            </motion.div>
            {tiles.map((v) => {
              return v
            })}
          
          </div>
          {offset < tiles.length && <button onClick={() => {if (offset < tiles.length) setOffset(offset+1)}} className="absolute top-[43.5%] right-5"><ChevronRightIcon className="w-14 h-14"/></button>}
          {offset > 0 && <button onClick={() => {if (offset > 0) setOffset(offset-1)}} className="absolute top-[43.5%] left-5"><ChevronLeftIcon className="w-14 h-14" /></button>}
          </motion.div>
        
      </div>
      <Link href="/contact" passHref={true}>
        <motion.div className="flex flex-row justify-center items-center cursor-pointer group absolute bottom-20 left-[45%]" initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-white z-10">Continue</h1>
          <ChevronRightIcon className="w-14 h-14 mt-3 transform group-hover:translate-x-8 transition ease-in-out duration-200 z-10"/>
        </motion.div>
      </Link>
      
    </>
  )
}