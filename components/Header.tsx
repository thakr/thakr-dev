import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import NavLink from './NavLink'
import {motion, AnimatePresence} from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)
  const variants = {
    open: {
      opacity: 1
    },
    closed: {
      opacity: 0
    }
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  }
  return (
    <>
      <AnimatePresence>
        {open && <motion.div className="absolute w-screen h-screen bg-black z-20" variants={variants} initial="closed" animate="open" exit="closed">
            <motion.div className="flex flex-col w-screen h-screen items-center justify-center" variants={container} initial="hidden" animate="show" exit="hidden">
              <NavLink text="Home" link="/" />
              <NavLink text="Works" link="/works" />
              <NavLink text="Contact" link="/contact" />
            </motion.div>
          </motion.div>}
      </AnimatePresence>
      <div className="absolute right-5 top-5 z-30">
        <Hamburger toggled={open} toggle={setOpen} color={open ? "#ffffff" : "#000000"}/>
      </div>
      
      
    </>
  )
}
