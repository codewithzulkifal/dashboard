import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className=' mb-10 '>
      <p className=' text-gray-800 dark:text-gray-200 text-lg '>{category}</p>
      <p className=' text-4xl font-bold text-gray-900 dark:text-gray-100  '>{title}</p>
    </div>
  )
}

export default Header
