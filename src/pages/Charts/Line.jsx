import React from 'react'
import { Header, LineChart } from '../../component'



const Line = () => {
  return (
    <div className=' m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-2xl '>
      <Header category='Chart' title='Analysis' />
      <div className=' mt-2 md:mt-4 w-full '>
        <LineChart />
      </div>
    </div>
  )
}

export default Line
