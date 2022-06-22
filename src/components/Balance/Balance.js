import React from "react"
import "./Balance.scss"
import Card from "../../hoc/Card"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
const Balance = () =>{
    const dispatch = useDispatch()
    const income = useSelector((state)=> state.income)
    const expend = useSelector((state)=> state.expend)
    const balance = ()=>{
        return income - expend
    }
    return (
        <motion.div 
            className="balance"
            initial={{y: -50,opacity:0}}
            animate={{y: 0,opacity:1}}
            transition={{delay:.5,duration:1}}>
            <Card>
                <div className="balance-content">
                    <h2>میانگین:</h2>
                    <span className="balance-count"> {balance()} هزار تومان </span>
                    <button className="balance-button" onClick={() => dispatch({type:"SHOWMODAL"})}>+ افزودن</button>
                </div>
            </Card>
        </motion.div>
    )
}

export default Balance