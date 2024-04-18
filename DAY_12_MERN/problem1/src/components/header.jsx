import { useContext } from "react"
import { ThemeContext } from "../contextApi/contextprovider"
import './style.css'

export const Header=()=>{
    const {theme}=useContext(ThemeContext)
    return(
        <div className={"header "+theme}>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Contact</h3>

        </div>
    )
}