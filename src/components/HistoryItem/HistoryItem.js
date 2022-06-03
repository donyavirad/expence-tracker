import React from "react"
const HistoryItem = (props)=>{
    return(
        <li className={props.price > 0 ? "history-item border-income": "history-item border-expence"}>
            <span>{props.description}</span>
            <span>{props.price}</span>
        </li>
    )
}

export default HistoryItem