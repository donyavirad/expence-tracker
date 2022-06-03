import React from "react"
import "./Modal.scss"
import Backdrop from "./backdop"
const Modal = (props)=>{
    if(props.show){
        return(
            <div className="modal">
                <Backdrop show={props.show} close={props.close}/>
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        )
    }else{
        return <div></div>
    }

}

export default Modal