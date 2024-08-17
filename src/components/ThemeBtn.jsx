import React, { useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5';
import useTheme from '../contexts/theme';

const ThemeBtn = () => {

const {themeMode, lightTheme, darkTheme} = useTheme()
const [darkMode, setDarkMode] = useState(themeMode === 'dark');



const toggleTheme = (e) =>{
    const darkModeStatus = e.currentTarget.checked;
    setDarkMode(darkModeStatus);
    if(darkModeStatus){
        darkTheme()
    }else{
        lightTheme()
    }
}

  return (
    <>
          <button onClick={toggleTheme}
            checked= {themeMode==='dark'}
            type="checkbox"
            
            className="ml-5 text-2xl md:text-3xl">
            {darkMode ? <IoSunny /> : <IoMoon />}
          </button>
    </>
  )
}

export default ThemeBtn;
