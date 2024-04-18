import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('light')

    function changetheme(){
        setTheme((prev)=>prev=="light"?"dark":"light")
    }

    return(
        <ThemeContext.Provider value={{theme,changetheme}}>
            {children}
        </ThemeContext.Provider>
    )
}