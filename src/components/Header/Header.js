import React from "react"
import "./Header.scss"
import { IoMoonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import profile from "../../assets/images/profile.png"
const Header= ()=>{
    return (
    <div className="header">
        <div className="header-container">
            <div className="header-title">
                <h1>نرم افزار مدیریت مالی</h1>
            </div>
            <div className="header-option">
                <IoMoonSharp className="change-theme"/>
                <IoIosNotifications className="alert"/>
                <img src={profile} className="header-option-profile"/>
            </div>
        </div>
    </div>
    )
}

export default Header