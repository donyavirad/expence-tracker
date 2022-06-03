import React, { useState } from "react"
import "./Price.scss"
const Price = React.memo((props)=>{
    const {data}= props
    let balance = 0
    let income = 0
    let expense = 0
    if(data){
        const incomes = []
        const expenses = []
        const total = []
        for(let item in data){
            const res = Number(data[item].price)
            total.push(res)
            if(res > 0){
                incomes.push(res)
            }else{
                expenses.push(res)
            }
        }
        balance = total.reduce((a,b)=>{
            return a + b
        },0)
        income = incomes.reduce((a,b)=>{
            return a + b
        },0)
        expense =  expenses.reduce((a,b)=>{
            return a + b
        },0)
        console.log(income, expense,balance)
    }

    return(
        <div className="price">
            <div className="price-container">
                <div className="price-balance">
                    <h2>میانگین:</h2>
                    <span>{balance} هزار تومان</span>
                </div>
                <div className="price-status">
                    <div className="price-status-income">
                        <h3>درآمد:</h3>
                        <span>{income} هزار تومان</span>
                    </div>
                    <div className="price-status-expense">
                        <h3>خرج:</h3>
                        <span>{expense.toString().slice(1)} هزار تومان</span>
                    </div>
                </div>
                <button className="price-button" onClick={props.showModal}>+ افزودن</button>
            </div>
        </div>
    )
})

export default Price