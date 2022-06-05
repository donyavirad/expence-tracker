import React from "react"
const HistoryItem = (props)=>{
    return(
        <li className={props.status === "income" ? "history-item border-income": "history-item border-expence"}>
            <span>{props.description}</span>
            <span>{props.price} هزار تومان</span>
        </li>
    )
}

export default HistoryItem