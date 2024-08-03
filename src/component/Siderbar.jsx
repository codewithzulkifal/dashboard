import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdDashboard, MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {links} from'../data/dummy';
import { useStateContext } from '../context/ContextProvider';


const Siderbar = () => {

  const {activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleSideBar = () => {
    if(activeMenu && screenSize <=900){
      setActiveMenu(false)
    }
  }

  const activeLink = ' flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-100 text-md m-2 ';
  const normalLink = ' flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 hover:text-bg-light-gray dark:text-gray-200 dark:hover:text-gray-800 text-md m-2 ';

  return (
    <>
      <div className=' ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10 '>
        {
          activeMenu && (
            <>
            <div className=' flex justify-between items-center  '>
              <Link to='/' onClick={handleSideBar} className=' flex items-center mt-4 ml-3 gap-2 font-normal text-xl tracking-tight text-gray-900 dark:text-white ' >
              <MdDashboard className=' font-semibold text-2xl ' /> <span> Dashboard </span>
              </Link>
              <TooltipComponent content='Menu' position='BottomCenter' >
                <button type='button' onClick={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                 className=' text-lg p-3 mt-3 hover:bg-light-gray block md:hidden rounded-full ' >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className=' mt-12 '>
              {
                links.map((item) => (
                  <div key={item.title} >
                    <p className=' text-gray-400 m-3 mt-4 uppercase '>
                      {item.title}
                    </p>
                    {
                      item.links.map((link) =>(
                        <NavLink to={`./${link.name}`} key={link.name} onClick={handleSideBar} 
                        className={({ isActive }) => isActive ? activeLink : normalLink }
                        style={({isActive}) => ({
                          backgroundColor : isActive ? currentColor : ''
                        })}
                        >
                          {link.icon}
                          <span className=' capitalize '>
                            {link.name}
                          </span>
                        </NavLink>
                      ))
                    }
                  </div>
                ))
              }
            </div>
            </>
          )
        }
      </div> 
    </>
  )
}

export default Siderbar
