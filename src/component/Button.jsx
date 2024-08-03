import React from 'react'

const Button = ({ color, bgColor, size, text, borderRadius }) => {
  return (
    <button type='button' style={{ backgroundColor: bgColor, color, borderRadius }} className={` text-${size} p-3 hover:drop-shadow-xl 
    mt-3 font-normal active:scale-95 transition-all duration-300 px-5 `} >
      {text}
    </button>
  )
}

export default Button
