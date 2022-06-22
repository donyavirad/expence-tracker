import React from "react"
const HistoryItem = (props)=>{
    return(
        <li className="history-item">
            <span className={props.status === "income" ? "history-item-desc income-element" : "history-item-desc expend-element"}>{props.description}</span>
            <span className="history-item-price">{props.price} هزار تومان</span>
        </li>
    )
}

export default HistoryItem