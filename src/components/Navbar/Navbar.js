import React from "react"
import "./Navbar.scss"
import { AiFillDashboard } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar-container">
                
                <nav className="navbar-nav">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <AiFillDashboard className="navbar-item-icon"/>
                                <span className="navbar-item-text">داشبورد</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <IoMdAddCircle className="navbar-item-icon"/>
                                <span className="navbar-item-text">افزودن</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <IoWallet className="navbar-item-icon"/>
                                <span className="navbar-item-text">کیف پول</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-item-link">
                                <IoSettings className="navbar-item-icon"/>
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