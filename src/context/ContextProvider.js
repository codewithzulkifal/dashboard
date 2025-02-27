import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,    
}

export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03c9d7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('Thememode', e.target.value)
    }

    const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem("Themecolor", color);
      
      setThemeSettings(false);
    };


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return(
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize,
            handleClick,
            currentColor,
            currentMode,
            themeSettings, setThemeSettings,
            setMode, setColor
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext  = () =>  useContext(StateContext);