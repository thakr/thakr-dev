import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
interface Props {
  img: string,
  title: string,
  desc: string,
  srclink: string,
  link: string,
  style: any,
}
const variants = {
  open: {
    opacity: 100,
  },
  closed: {
    opacity: 0,
  }
}
const item = {
  hidden: { opacity: 0, y:-100 },
  show: { opacity: 1, y:0}
}
export default function Workscard({img, title, desc, srclink, link, style} : Props) {
  const [open, setOpen] = useState(false)
  let maxlength = 205
  let newdesc = null
  if (desc.length > maxlength) {
    let split = desc.split("")
    let newArr : string[] = []
    split.forEach((element, i) => {
      if (i < maxlength) newArr.push(element)
    })
    newdesc = newArr.join("") + '...'
  }
  return (
    <motion.div animate={style && {transform: style}} className="py-20">
      <motion.div className="relative mx-5 rounded-xl shadow-xl justify-center" style={{backgroundImage: `url(${img})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "1000px", height: "30rem", width: "22rem"}} variants={item}>
          <div className="opacity-0 h-full w-full absolute rounded-lg top-0 left-0 bg-white hover:opacity-100 transition duration-150 ease-in-out" >
            <h1 className="text-center text-2xl font-bold my-5">{title}</h1>
            <div className="pt-[1px] bg-gray-300 w-full"></div>
            <p className="text-gray-500 m-4">{newdesc ? <><p>{newdesc}</p> <a onClick={() => setOpen(true)} className="text-blue-500 cursor-pointer">read more</a></> : desc}</p>
      
            <div className="absolute right-5 bottom-5">
              <ButtonSecondary text="View source code" callback={() => window.open(srclink)} />
              <span className="mr-3"></span>
              <ButtonPrimary text="Visit" callback={() => (window.open(link))} />
            </div>
            <AnimatePresence>
              {open && (
                <Dialog as={motion.div} static open={open} onClose={() => setOpen(false)} className="fixed inset-0 z-10 overflow-y-auto" variants={variants} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.25}}>
                <div className="flex items-center justify-center min-h-screen">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-50"/>
                  <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title className="font-semibold text-center text-2xl">Description</Dialog.Title>
                    <p className="text-gray-500 my-4">{desc}</p>
                    <div className='text-center'><ButtonPrimary callback={()=> setOpen(false)} text="Continue"/></div>
                  </div>
                </div>
                </Dialog>
              )}
            </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}
