import React, { useEffect } from 'react'
import { IoNotifications } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../context/ContextProvider';
import Cart from './Cart';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';
// import { Cart, Chat, UserProfile, Notification } from '.';


const NavButton = ({ title, cusFun, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter' >
    <button type='button' style={{ color }}  onClick={() => {cusFun()}} className=' text-2xl p-3 rounded-lg relative hover:drop-shadow-lg '>
      <span className=' absolute inline-flex rounded-full h-4 w-4 top-2 right-1 ' style={{ backgroundColor: dotColor }} >
        {icon}
      </span>
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, handleClick,
  screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    };
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
    // eslint-disable-next-line
  }, []);

  const toggleSidebar = () => {
     setActiveMenu(!activeMenu);
   };


  return (
    <>
      <div className=' flex justify-between p-2 md:mx-6 relative w-full '>
        <NavButton title= 'Menu' cusFun={toggleSidebar} color={currentColor}
         icon={<IoMdMenu />} />

         <div className=' flex gap-2  '>
          <NavButton title= 'Cart' cusFun={() => handleClick('cart')} color={currentColor}
         icon={<FaShoppingCart />} />
         <NavButton title= 'Chat' cusFun={() => handleClick('chat')} color={currentColor}
         icon={<CiChat1 />} />
         <NavButton title= 'notification' cusFun={() => handleClick('notification')} color={currentColor}
         icon={<IoNotifications />} />
         <TooltipComponent content='UserProfile' position='BottomCenter' >
          <div className=' flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg ' onClick={() => handleClick('userProfile')} >
            <NavButton   color={currentColor}
         icon={<FaCircleUser className=' text-2xl -mt-1.5 ' />} />
            <p className=' text-gray-400 text-lg '>
              Hey , 
              <span className=' font-semibold ml-1 '> James </span> 
            </p>
          </div>
         </TooltipComponent>
          {isClicked.cart && <Cart/>}
          {isClicked.chat && <Chat/>}
          {isClicked.notification && <Notification/>}
          {isClicked.userProfile && <UserProfile/>}
         </div>
      </div> 
    </>
  )
}

export default Navbar
