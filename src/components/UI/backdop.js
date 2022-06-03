import React from "react"
import "./Backdrop.scss"
const Backdrop = (props)=>{
    let content = ""
    if(props.show){
        content = <div className="backdrop" onClick={props.close}></div>
    }
    return content
}

export default Backdrop