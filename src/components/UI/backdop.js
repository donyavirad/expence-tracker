import React from "react"
import { useDispatch } from "react-redux"
import "./Backdrop.scss"
const Backdrop = ()=>{
    const dispatch = useDispatch()
    return <div className="backdrop" onClick={() =>dispatch({type:"CLOSEMODAL"})}></div>
    
}

export default Backdrop