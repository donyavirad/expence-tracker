import React from "react"
import "./Balance.scss"
import Card from "../../hoc/Card"
import { useDispatch } from "react-redux"
const Balance = () =>{
    const dispatch = useDispatch()
    return (
        <div className="balance">
            <Card>
                <div className="balance-content">
                    <h2>میانگین:</h2>
                    <span className="balance-count"> 0 هزار تومان </span>
                    <button className="price-button" onClick={() => dispatch({type:"SHOWMODAL"})}>+ افزودن</button>
                </div>
            </Card>
        </div>
    )
}

export default Balance