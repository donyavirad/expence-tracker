import React from "react"
import Controls from "../Controls/Controls"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import { IconContext } from "react-icons"
import "./Main.scss"
const Main = ()=>{
    return(
        <main className="main">
            <IconContext.Provider value={{color:"#11687f"}} >
                <Header/>
                <div className="main-container">
                    <Navbar/>
                    <Controls/>
                </div>
            </IconContext.Provider>
        </main>
    )
}

export default Main