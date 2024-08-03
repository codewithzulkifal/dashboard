import React from 'react'
import { Header } from '../../component'
import Stacked from '../../component/Charts/Stacked'

const Bar = () => {
  return (
     <div className=' m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-2xl '>
      <Header category='Area' title='Analysis' />
      <Stacked  />
    </div>
  )
}

export default Bar

