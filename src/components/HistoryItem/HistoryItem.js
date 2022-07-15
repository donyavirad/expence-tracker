import React from "react"
import { motion } from "framer-motion"
const HistoryItem = (props)=>{
    const price = props.price
    const res = Number(price).toLocaleString()
    return(
        <motion.li
            className="history-item"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}}
        >
                <span className={props.status === "income" ? "history-item-desc income-element" : "history-item-desc expend-element"}>{props.description}</span>
                <span className="history-item-price">{res} تومان</span>
            
        </motion.li>
    )
}

export default HistoryItem