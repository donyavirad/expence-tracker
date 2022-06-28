import React, { useEffect } from "react"
import HistoryItem from "../HistoryItem/HistoryItem"
import "./History.scss"
import axios from "axios"
import Card from "../../hoc/Card"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
const History = React.memo(()=>{
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.data)
    useEffect(()=>{
        axios.get("https://expense-tracker-62236-default-rtdb.firebaseio.com/notes.json")
            .then((response)=>{
                const document = []
                for(let item in response.data){
                    document.push(response.data[item])
                }
                document.sort((a,b)=>{
                    if(a.createdAt < b.createdAt){
                        return 1
                    }
                    if(a.createdAt > b.createdAt){
                        return -1
                    }
                    return 0
                })
                console.log(document)
                dispatch({type: "LOADDATA", value: document})
            }).catch((error)=>{
                console.log(error)
            })
    },[])

    return (
            <Card className="history">
                    <h2>تاریخچه:</h2>
                    <div className="history-container">
                        <ul className="history-list">
                            {data ? data.map((item,id)=>{
                                return(
                                    <HistoryItem
                                        key={id}
                                        price={item.price}
                                        description={item.description}
                                        status={item.status}
                                    />
                                )
                            }) : null}
                        </ul>
                    </div>
            </Card>
    )
})

export default History