import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import Food  from "../../assets/images/food.svg"
import Shopping  from "../../assets/images/shopping.svg"
import Travel  from "../../assets/images/travel.svg"
import Pet  from "../../assets/images/pet.svg"
import Other  from "../../assets/images/other.svg"
import Money  from "../../assets/images/income.svg"
import { green, grey } from "@mui/material/colors"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const HistoryItem = (props)=>{
    const price = props.amount
    const res = Number(price).toLocaleString()
    let source = null
    switch(props.category){
        case "food":
            source = Food
            break
        case "shopping": 
            source = Shopping
            break
        case "travel":
            source = Travel
            break
        case "pet":
            source = Pet
            break
        case "other":
            source = Other
            break
        case "income":
            source = Money
            break
    }
    return(
        <div className="history-item">
            <Stack direction={"row"} alignItems={"center"} justifyContent="space-between">
                <Box display={"flex"} flexDirection={"row"} alignItems="center">
                    <img src={source} className="history-item-image"/>
                    <Typography color={grey[600]} ml="8px" fontWeight={"bold"}>{props.note}</Typography>
                </Box>
                <Typography color={grey[400]}>{props.status === "expend"? "- ": null}${res}</Typography>
            </Stack>
        </div>
    )
}

export default HistoryItem