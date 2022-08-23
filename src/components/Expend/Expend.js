import React, { useEffect } from "react"
import {  useDispatch,useSelector } from "react-redux"
import { Stack } from "@mui/material"
import {Typography} from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { red } from "@mui/material/colors"
const Expend = () =>{
    const dispatch = useDispatch()
    const stringStorage = localStorage.getItem("expence-tracker-local")
    const data = JSON.parse(stringStorage)
    const notification = useSelector((state)=> state.notification)
    let resExpend = null
    const expend = ()=>{
        let expends = []
        for(let item in data){
            if(data[item].status === "expend"){
                const num = Number(data[item].amount)
                expends.push(num)
            }
        }
        resExpend = expends.reduce((a,b)=>{
            return a + b
        }, 0)
        const res = resExpend.toLocaleString()
        return res
    }

    useEffect(()=>{
        dispatch({type:"EXPENDRESULT", value: resExpend})
    },[notification])

    return (
        <div >
            <Stack direction={"row"} alignItems={"center"} >
                <ArrowUpwardIcon  htmlColor={red.A200} sx={{
                    padding: "4px",
                    backgroundColor: "#ffffff40",
                    borderRadius: "100%",
                    mr: "8px",
                }}/>
                <Stack>
                    <Typography variant="span" color={"white"} component="span">
                        Expenses
                    </Typography>
                    <Typography variant="span" color={"white"} component="span" fontWeight={"bold"}>
                        {expend()} 
                    </Typography>
                </Stack>
            </Stack>
        </div>
    )
}

export default Expend