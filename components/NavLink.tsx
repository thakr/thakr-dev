import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
interface Props {
  text: string;
  link: string;
}
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1}
}

export default function NavLink({text, link} : Props) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={link}><motion.a className="text-white font-semibold cursor-pointer pb-2 text-4xl my-5 border-black border-b-4 hover:border-white transition duration-500 ease-in-out" variants={item}>{text}</motion.a></Link>
  )
}
