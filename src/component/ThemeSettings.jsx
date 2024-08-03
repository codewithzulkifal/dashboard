import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';


const ThemeSettings = () => {
      
    const { setColor, setMode, currentColor, currentMode, setThemeSettings } = useStateContext()

  return (
    <div className=' bg-half-transparent w-screen fixed nav-item top-0 right-0 '
      onClick={() => setThemeSettings(false)}
    >
      <div className=' float-right w-400 h-screen bg-white dark:bg-main-dark-bg dark:text-gray-100 '>
        <div className=' flex justify-between items-center p-4 ml-4 '>
          <p className=' font-semibold text-xl '> Settings </p>
          <button className= ' text-2xl hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-gray-700 p-2 rounded-full text-gray-500 ' 
            onClick={() =>{setThemeSettings(false)}}  >
            <MdOutlineCancel className=' dark:text-gray-300 '/>
          </button>
        </div>

        <div className=' flex-col border-t-1 border-color dark:border-gray-300 p-4 ml-4 '>
          <p className=' font-semibold text-lg '> Theme Options </p>
          <div className=' mt-4 '>
            <input type="radio"
             id='light'
             name='theme'
             value='Light'
             className='cursor-pointer'
             onChange={setMode}
             checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className=' ml-2 text-base cursor-pointer ' > Light </label>
          </div>
          <div className=' mt-4 '>
            <input type="radio"
             id='dark'
             name='theme'
             value='Dark'
             className='cursor-pointer'
             onChange={setMode}
             checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className=' ml-2 text-base cursor-pointer ' > Dark </label>
          </div>

        </div>

        <div className='  flex-col border-t-1 border-color dark:border-gray-300 p-4 ml-4  '>
          <p className=' font-semibold text-lg '>Theme Colors</p>
          <div className=' mt-2 flex gap-3 '>
            {
              themeColors.map((item, index) => (
                <TooltipComponent content={item.name} key={index} position='TopCenter' >
                  <div className=' relative mt-2 flex gap-5 items-center cursor-pointer '> 
                    <button 
                      type='button'
                      className=' h-8 w-8 rounded-full cursor-pointer text-center ' style={{ backgroundColor: item.color }}
                      onClick={()=> setColor(item.color)}
                      >
                      <FaCheck className={` text-base mx-auto text-white ${item.color === currentColor ? 'block' : 'hidden'} `} />
                    </button>
                  </div>  
                </TooltipComponent>
              ))
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default ThemeSettings
