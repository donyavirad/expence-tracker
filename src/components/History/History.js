import React, { useEffect } from "react"
import HistoryItem from "../HistoryItem/HistoryItem"
import "./History.scss"
import axios from "axios"
import Card from "../../hoc/Card"
const History = React.memo((props)=>{
    const {onLoaded, data} = props
    useEffect(()=>{
        axios.get("https://expense-tracker-62236-default-rtdb.firebaseio.com/notes.json")
            .then((response)=>{
                const document = []
                for(let item in response.data){
                    document.push(response.data[item])
                }
                onLoaded(document)

            }).catch((error)=>{
                console.log(error)
            })
    },[])

    return (
        <div className="history">
            <Card>
                    <h2>تاریخچه:</h2>
                    <div className="history-container">
                        <ul>
                            {data ? data.map((item,id)=>{
                                return(
                                    <HistoryItem
                                        key={id}
                                        price={item.price}
                                        description={item.description}
                                    />
                                )
                            }) : null}
                        </ul>
                    </div>
            </Card>
        </div>
    )
})

export default History