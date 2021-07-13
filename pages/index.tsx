import Head from 'next/head'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import ButtonPrimary from '../components/ButtonPrimary'
export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Thakr | Home</title>
      </Head>
      <Header />
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} className="text-9xl font-bold text-center sm:text-5xl md:text-7xl">{"Hi, I'm Shaan"}</motion.h1>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-4xl mt-5 text-gray-800 text-center sm:text-xl md:text-3xl mx-5">A 16 year old aspiring full-stack web developer</motion.p>
          <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className="flex mt-10">
            <button className="cursor-pointer text-center px-4 py-3 sm:px-3 sm:py-2 focus:outline-none rounded-lg bg-transparent border-gray-300 border-2 text-gray-500 font-semibold hover:border-black hover:text-black transition ease-in-out duration-200 text-2xl sm:text-xl mr-2" onClick={() => router.push('contact')}>Contact</button>
            <button className="cursor-pointer text-center px-4 py-3 sm:px-3 sm:py-2 focus:outline-none rounded-lg bg-black border-black border-2 text-white font-semibold hover:bg-transparent hover:text-black transition ease-in-out duration-200 text-2xl sm:text-xl ml-2" onClick={() => router.push('works')}>View works</button>
          </motion.div>
        </div>
      </div>
    </>
  )
}
