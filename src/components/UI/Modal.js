import React from "react"
import "./Modal.scss"
import Backdrop from "./backdop"
import { useSelector } from "react-redux"
const Modal = (props)=>{
    const modal = useSelector((state) => state.modal)
    let content = ""
    if(modal){
        content = (
            <div className="modal">
                <Backdrop/>
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
            )
    }
    return content

}

export default Modal