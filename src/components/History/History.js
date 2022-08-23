import React, { useEffect, useState } from "react"
import HistoryItem from "../HistoryItem/HistoryItem"
import "./History.css"
import { useDispatch, useSelector } from "react-redux"
import { IconButton, Stack, Typography, Box } from "@mui/material"
import { grey } from "@mui/material/colors"
import AddIcon from '@mui/icons-material/Add';
const History = React.memo(()=>{
     const dispatch = useDispatch()
     const notification = useSelector((state)=> state.notification)
    const [data, setData] = useState(null)
    const stringStorage = localStorage.getItem("expence-tracker-local")
    useEffect(()=>{
        const storage = JSON.parse(stringStorage)
        storage.sort((a,b)=>{
            if(a.createdAt < b.createdAt){
                return 1
            }
            if(a.createdAt > b.createdAt){
                return -1
            }
            return 0
        })
        setData(storage)
    },[notification])

    return (
            <Box className="history">
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="h2" component="h2" sx={{color: grey[800], fontSize: "32px"}} >
                        History
                    </Typography>
                    <IconButton variant={"contained"} onClick={() => dispatch({type:"SHOWMODAL"})}  className="history-add-button">
                        <AddIcon htmlColor={grey[50]} />
                    </IconButton>
                </Stack>
                {data ? data.map((item,id)=>{
                    return(
                        <HistoryItem
                            key={id}
                            amount={item.amount}
                            note={item.note}
                            category={item.category}
                            status={item.status}
                        />
                    )
                }) : null}
            </Box>
    )
})

export default History