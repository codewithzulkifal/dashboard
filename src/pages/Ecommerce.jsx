import React from 'react'
// import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { earningData, SparklineAreaData } from '../data/dummy';
import Button from '../component/Button';
import  SparkLine  from '../component/Charts/SparkLine';
import Stacked from '../component/Charts/Stacked';
import Line from '../component/Charts/Line';
import { useStateContext } from '../context/ContextProvider';


const Ecommerce = () => {

  const {currentColor, currentMode } = useStateContext();

  return (
    <>
      <div className='mt-6'>
        <div className=' flex flex-wrap lg:flex-nowrap justify-center items-center md:w-[92%] mx-auto  '>
          <div className=' bg-white dark:bg-secondary-dark-bg dark:text-gray-200 min-h-40 w-full  p-8 rounded-2xl  m-3 mx-10 bg-cover bg-center overflow-hidden flex justify-between items-center shadow-md '>
            <div className=' space-y-2 ml-8 mt-2 min-h-40 md:w-1/4 w-1/2 '>
              <p className=' text-gray-700 dark:text-gray-200 font-bold text-lg md:text-xl '>Earnings</p>            
              <p className=' text-gray-800 dark:text-gray-300  text-lg md:text-3xl '>$83,289,491</p>
              <div className=' mt-5 '>
              <Button
                color='white'
                bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size='md'
              />
               </div>
            </div>
            <div className=' min-h-40 md:w-8/12 w-3/4 mx-4  '>
            <Line background={ currentMode === 'Dark' ? '#33373E' : '#fff' } />
            </div>
          </div>
        </div>
        
        <div className=' flex flex-wrap justify-center items-center gap-2 mt-5 '>
            {
              earningData.map((item) => {
                return(
                  <div key={item.title}>
                    <div className=' bg-white dark:bg-secondary-dark-bg dark:text-gray-100 p-5 shadow-md rounded-xl mx-1 '>
                      <div className='  min-w-60 sm:min-w-60 md:max-w-64 lg:min-w-80 xl:min-w-60 p-0 '>
                        <button type='button' className=' text-xl rounded-full p-6 hover:drop-shadow-xl  ' style={{ color: item.iconColor, backgroundColor: item.iconBg }} >
                          {item.icon}
                        </button>
                        <p className=' mt-3 '>
                          <span className=' font-semibold text-2xl p-1 text-gray-800 dark:text-white '>
                            {item.amount}
                          </span>
                          <span className='text-xl ml-2' style={{color: item.pcColor}}>
                            {item.percentage}
                          </span>
                        </p>
                        <p className=' text-gray-500 mt-1 dark:text-gray-200 text-base '>
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>

        <div className=' flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 mt-5 my-6 mx-2 overflow-hidden '>
          <div className=' bg-white dark:bg-secondary-dark-bg dark:text-gray-100 m-3 p-4 rounded-xl md:w-1000 overflow-hidden shadow-md '>
            <div className=' flex justify-between items-center  '>
              <p className=' font-semibold text-xl '>
                Revenue Updates
              </p>
              <div className=' flex items-center gap-4 '>
                <p className=' flex items-center gap-1 text-gray-600 dark:text-gray-200 hover:drop-shadow-xl cursor-pointer '>
                  <span>
                    <GoDotFill/>
                  </span>
                  <span>
                    Expense
                  </span>
                </p>
                 <p className=' flex items-center gap-1 text-green-600 hover:drop-shadow-xl cursor-pointer '>
                  <span>
                    <GoDotFill/>
                  </span>
                  <span>
                    Budget
                  </span>
                </p>
              </div>
            </div>

            <div className=' flex flex-wrap lg:flex-nowrap gap-10 justify-center mt-10 overflow-hidden '>
              <div className=' border-r-1 border-gray-300 pr-10 m-4 '>
                <div>
                  <p className=' text-3xl font-normal '>$82,205 <span className=' text-xs p-1 bg-green-300 hover:drop-shadow-lg cursor-pointer rounded-full text-white ml-2  '> 20% </span></p>
                  <p className=' text-gray-500 dark:text-gray-100 text mt-1 '>Budget</p>
                </div>
                <div className=' mt-8 '>
                  <p className=' text-3xl font-normal '>$82,205</p>
                  <p className=' text-gray-500 dark:text-gray-100 mt-1 '>Expense</p>
                </div>
                <div className=' mt-7 '>
                  <SparkLine currentColor={currentColor}
                  id="line-sparkLine" 
                  type="Line" 
                  height="80px" 
                  width="250px" 
                  data={SparklineAreaData} 
                  color={currentColor} />
                </div>
                <div className=' mt-10 '>
                  <Button color='white' bgColor={currentColor} text='Download Report' borderRadius='10px' />
                </div>
              </div>

              <div className=' mt-10 overflow-hidden'>
                <Stacked width="400px" height="350px"  />
              </div>
            </div>
          </div>
        </div>

        
      </div> 
    </>
  )
}

export default Ecommerce
