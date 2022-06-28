import React from "react"
import Controls from "../Controls/Controls"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import { IconContext } from "react-icons"
import Notification from "../Notification/Notification"
import "./Main.scss"
import { useSelector } from "react-redux/es/exports"
const Main = ()=>{
    const currentTheme = useSelector((state)=> state.theme)
        
    return(
        <main className="main" id={currentTheme}>
                <Header/>
                <div className="main-container">
                    <Navbar/>
                    <Controls/>
                </div>
                <Notification/>
        </main>
    )
}

export default Main