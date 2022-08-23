import React from "react"
import Controls from "../Controls/Controls"
import Header from "../Header/Header"
import Notification from "../Notification/Notification"
import { useSelector } from "react-redux/es/exports"
const Main = ()=>{
    const currentTheme = useSelector((state)=> state.theme)
    const stringStorage = localStorage.getItem("expence-tracker-local")
    if(!stringStorage){
        localStorage.setItem("expence-tracker-local", "[]")
    }
    return(
        <main  id={currentTheme}>
            <Header/>
            <Controls/>
            <Notification/>
        </main>
    )
}

export default Main