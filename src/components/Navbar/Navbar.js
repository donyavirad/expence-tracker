import React from "react"
import "./Navbar.scss"
import { AiFillDashboard } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import logoPic from "../../assets/images/logo.png"
const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logoPic}/>
                </div>
                <nav className="navbar-nav">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <AiFillDashboard/>
                                <span className="navbar-item-text">داشبورد</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <IoMdAddCircle/>
                                <span className="navbar-item-text">افزودن</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <IoWallet/>
                                <span className="navbar-item-text">کیف پول</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <IoSettings/>
                                <span className="navbar-item-text">تنظیمات</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar