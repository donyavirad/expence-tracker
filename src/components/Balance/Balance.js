import React from "react"
import "./Balance.css"
import { useSelector } from "react-redux"
import { Typography } from "@mui/material"
import Income from "../Income/Income"
import Expend from "../Expend/Expend"
import { Stack, Box } from "@mui/material"
const Balance = () =>{
    const income = useSelector((state)=> state.income)
    const expend = useSelector((state)=> state.expend)
    const balance = ()=>{
        const num = income - expend
        const res = num.toLocaleString()
        return res
    }
    return (
        <Box sx={{
            position: "sticky",
            top: "1rem",
            background: "rgb(28,176,225)",
            background: "linear-gradient(135deg, rgba(28,176,225,1) 0%, rgba(134,132,243,1) 25%, rgba(197,105,254,1) 50%, rgba(226,123,191,1) 75%, rgba(254,150,109,1) 100%)",
            padding: "16px 8px",
            borderRadius: "4px",
        }} className="balance">
            <Stack alignItems={"center"}>
                <Typography variant="span" component="span" sx={{color: "white"}}>
                    Total Balance
                </Typography>
                <Typography variant="h2" component="h2" color={"white"} sx={{fontSize: "32px", mb: "16px"}} fontWeight={"bold"}>
                    $ {balance()}
                </Typography>
                <Stack width={"100%"} direction={"row"} justifyContent={"space-around"}>
                    <Income/>
                    <Expend/>
                </Stack>
            </Stack>
        </Box>
        
    )
}

export default Balance