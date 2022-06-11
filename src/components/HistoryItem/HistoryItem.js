import React from "react"
const HistoryItem = (props)=>{
    return(
        <li className={props.status === "income" ? "history-item border-income": "history-item border-expence"}>
            <span className="history-item-desc">{props.description}</span>
            <span className="history-item-price">{props.price} هزار تومان</span>
        </li>
    )
}

export default HistoryItem