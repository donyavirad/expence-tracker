import React, { useEffect, useState } from "react"
import "./Income.scss"
import Card from "../../hoc/Card"
import { useSelector, useDispatch } from "react-redux"
const Income = () =>{
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.data)
    let resIncom = null
    
    const income = ()=>{
        let incomes = []
        for(let item in data){
            if(data[item].status === "income"){
                const num = Number(data[item].price)
                incomes.push(num)
            }
        }
        resIncom = incomes.reduce((a,b)=>{
            return a + b
        }, 0)
        
        return resIncom
    }
    useEffect(()=>{
        dispatch({type:"INCOMERESULT", value: resIncom})
    },[data])
    return (
        <div className="income">
            <Card>
                <div className="income-content">
                    <h3>
                        درآمد:
                    </h3>
                    <span>
                        {income()} هزار تومان
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Income