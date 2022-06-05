import React from "react"
import "./Income.scss"
import Card from "../../hoc/Card"
import { useSelector } from "react-redux"
const Income = () =>{
    const data = useSelector((state)=> state.data)

    const income = ()=>{
        let incomes = []
        for(let item in data){
            if(data[item].status === "income"){
                const num = Number(data[item].price)
                incomes.push(num)
            }
        }
        const res = incomes.reduce((a,b)=>{
            return a + b
        }, 0)
        
        return res
    }
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