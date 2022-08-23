import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Stack } from "@mui/material"
import {Typography} from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { green } from "@mui/material/colors"
const Income = () =>{
    const dispatch = useDispatch()
    const stringStorage = localStorage.getItem("expence-tracker-local")
    const data = JSON.parse(stringStorage)
    const notification = useSelector((state)=> state.notification)
    let resIncom = null
    
    const income = ()=>{
        let incomes = []
        for(let item in data){
            if(data[item].status === "income"){
                const num = Number(data[item].amount)
                incomes.push(num)
            }
        }
        resIncom = incomes.reduce((a,b)=>{
            return a + b
        }, 0)
        const res = resIncom.toLocaleString()
        return res
    }
    useEffect(()=>{
        dispatch({type:"INCOMERESULT", value: resIncom})
    },[notification])
    return (
            <div >
                <Stack direction={"row"} alignItems={"center"} >
                <ArrowDownwardIcon htmlColor={green.A200} sx={{
                    padding: "4px",
                    backgroundColor: "#ffffff40",
                    borderRadius: "100%",
                    mr: "8px",
                }}/>
                <Stack>
                    <Typography variant="span" color={"white"} component="span">
                        Income
                    </Typography>
                    <Typography variant="span" color={"white"} component="span" fontWeight={"bold"}>
                        {income()} 
                    </Typography>
                    </Stack>
                </Stack>
            </div>
    )
}

export default Income