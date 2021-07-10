import React from 'react'
interface Props {
  callback?: Function,
  text: string,
}
export default function ButtonPrimary({callback, text} : Props) {
  return (
    <button className="cursor-pointer text-center px-2 py-1 focus:outline-none rounded-lg bg-black border-black border-2 text-white font-semibold hover:bg-transparent hover:text-black transition ease-in-out duration-200" onClick={() => {
      if (callback) callback()
    } }>{text}</button>
  )
}
//