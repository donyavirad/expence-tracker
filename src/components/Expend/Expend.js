import React from "react"
import "./Expend.scss"
import Card from "../../hoc/Card"
import { useSelector, useDispatch } from "react-redux"
const Expend = () =>{
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.data)
    const expend = ()=>{
        let expends = []
        for(let item in data){
            if(data[item].status === "expend"){
                const num = Number(data[item].price)
                expends.push(num)
            }
        }
        const res = expends.reduce((a,b)=>{
            return a + b
        }, 0)
        dispatch({type:"EXPENDRESULT", value: res})
        return res
    }

    return (
        <div className="expend">
            <Card>
                <div className="expend-content">
                    <h3>
                        خرج:
                    </h3>
                    <span>
                        {expend()} هزار تومان
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Expend