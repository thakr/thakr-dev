import React from 'react'
interface Props {
  callback: Function,
  text: string,
}
export default function ButtonSecondary({callback, text} : Props) {
  return (
    <button className="cursor-pointer text-center px-2 py-1 focus:outline-none rounded-lg bg-transparent border-gray-300 border-2 text-gray-500 font-semibold hover:border-black hover:text-black transition ease-in-out duration-200" onClick={() => callback()}>{text}</button>
  )
}
//