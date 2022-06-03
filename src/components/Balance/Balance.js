import React from "react"
import "./Balance.scss"
import Card from "../../hoc/Card"
const Balance = (props) =>{
    return (
        <div className="balance">
            <Card>
                <div className="balance-content">
                    <h2>میانگین:</h2>
                    <span className="balance-count"> 0 هزار تومان </span>
                    <button className="price-button" onClick={props.showModal}>+ افزودن</button>
                </div>
            </Card>
        </div>
    )
}

export default Balance