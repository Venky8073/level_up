import { useContext } from "react"
import { ThemeContext } from "../contextApi/contextprovider"

export const Themechanger=()=>{
    const{theme,changetheme}=useContext(ThemeContext)
    return(
        <button onClick={changetheme}>
            {theme=="light"?"Dark mode":"Light Mode"}
        </button>
    )
}