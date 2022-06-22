import React from "react"
import "./Modal.scss"
import Backdrop from "./backdop"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
const Modal = (props)=>{
    const modal = useSelector((state) => state.modal)
    let content = ""
    if(modal){
        content = (
            <div className="modal">
                <Backdrop/>
                <motion.div 
                    className="modal-content"
                    initial={{y:"-100vh",opacity:0}}
                    animate={{y:0,opacity:1}}
                    >
                    {props.children}
                </motion.div>
            </div>
            )
    }
    return content

}

export default Modal