import Head from 'next/head'
import Header from '../components/Header'
import {ChevronRightIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <>
      <Head>
        <title>Thakr | Home</title>
      </Head>
      <Header />
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} className="text-8xl font-bold text-center sm:text-5xl">{"Hi, I'm Shaan"}</motion.h1>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-2xl mt-5 text-gray-800 text-center sm:text-xl">A 16 year old aspiring full-stack web developer</motion.p>
          <Link href="/works" passHref={true}>
            <motion.div className="flex flex-row justify-center items-center cursor-pointer group mt-2" initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-white z-10">Continue</h1>
              <ChevronRightIcon className="w-14 h-14 mt-3 transform group-hover:translate-x-8 transition ease-in-out duration-200 z-10"/>
            </motion.div>
          </Link>
          
        </div>
      </div>
    </>
  )
}
