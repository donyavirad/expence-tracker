import React, { useEffect } from "react"
import "./Expend.scss"
import Card from "../../hoc/Card"
import { useSelector, useDispatch } from "react-redux"
import { motion } from "framer-motion"
const Expend = () =>{
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.data)
    let resExpend = null
    
    const expend = ()=>{
        let expends = []
        for(let item in data){
            if(data[item].status === "expend"){
                const num = Number(data[item].price)
                expends.push(num)
            }
        }
        resExpend = expends.reduce((a,b)=>{
            return a + b
        }, 0)

        return resExpend
    }

    useEffect(()=>{
        dispatch({type:"EXPENDRESULT", value: resExpend})
    },[data])

    return (
        <motion.div 
            className="expend"
            initial={{y: -50,opacity:0}}
            animate={{y: 0,opacity:1}}
            transition={{delay:.5,duration:1}} >
            <Card>
                <div className="expend-content">
                    <h3 className="expend-element">
                        خرج:
                    </h3>
                    <span>
                        {expend()} هزار تومان
                    </span>
                </div>
            </Card>
        </motion.div>
    )
}

export default Expend