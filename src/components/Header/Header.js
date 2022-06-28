import React from "react"
import "./Header.scss"
import { IoMoonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import profile from "../../assets/images/profile.png"
import logoPic from "../../assets/images/logo.png"
import { useDispatch, useSelector } from "react-redux/es/exports";
const Header= ()=>{
    const dispatch = useDispatch()
    const theme = useSelector((state)=> state.theme)
    const changeTheme = ()=>{
       dispatch({type:"CHANGETHEME"})
    }
    return (
    <div className="header">
        <div className="header-container">
            <div className="header-title">
                <div className="header-logo">
                    <img src={logoPic}/>
                </div>
                <h1>نرم افزار مدیریت مالی</h1>
            </div>
            <div className="header-option" >
                {theme === "light" ? <IoMoonSharp className="header-option-theme" onClick={changeTheme}/>
                 : <IoIosSunny className="header-option-theme" onClick={changeTheme}/>}
                
                <IoIosNotifications className="header-option-notification"/>
                <img src={profile} className="header-option-profile"/>
            </div>
        </div>
    </div>
    )
}

export default Header