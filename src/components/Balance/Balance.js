import React from "react"
import "./Balance.scss"
import Card from "../../hoc/Card"
import { useDispatch, useSelector } from "react-redux"
const Balance = () =>{
    const dispatch = useDispatch()
    const income = useSelector((state)=> state.income)
    const expend = useSelector((state)=> state.expend)
    const balance = ()=>{
        return income - expend
    }
    return (
        <div className="balance">
            <Card>
                <div className="balance-content">
                    <h2>میانگین:</h2>
                    <span className="balance-count"> {balance()} هزار تومان </span>
                    <button className="balance-button" onClick={() => dispatch({type:"SHOWMODAL"})}>+ افزودن</button>
                </div>
            </Card>
        </div>
    )
}

export default Balance