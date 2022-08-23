import React, { useState } from "react"
import "./NewTransaction.css"
import { useSelector, useDispatch } from "react-redux"
import Typography from '@mui/material/Typography';
import { grey } from "@mui/material/colors"
import { Stack, TextField,  Button, RadioGroup, Radio, FormControlLabel, Select, InputLabel, MenuItem, FormControl } from "@mui/material"
const NewTransaction = React.memo((props)=>{
    const dispatch = useDispatch()
    const [category, setCategory] = useState("other")
    const desc = useSelector((state)=> state.form.desc)
    const price = useSelector((state)=> state.form.price)
    const status = useSelector((state)=> state.form.status)
    const stringStorage = localStorage.getItem("expence-tracker-local")
    const submitHandler = (e)=>{
        e.preventDefault()
        const createdAt = new Date().getTime()
        const data = {
            amount: price,
            note: desc,
            category: status === "income"? "income" : category,
            status: status,
            createdAt: createdAt,
        }
        const Storage = JSON.parse(stringStorage)
        Storage.push(data)
        const newStorage = JSON.stringify(Storage)
        localStorage.setItem("expence-tracker-local", newStorage)
        dispatch({type:"CLOSEMODAL"})
        dispatch({type:"SUCCESS", value: "success"})
    }
    return(
            <div className="form">
                <Typography variant="h3" component="h3" sx={{
                    color: grey[600], 
                    mb: "32px",
                    fontSize: "24px"
                }}>
                    Add New Transaction
                </Typography>
                
                <Stack>
                <form className="form-container" onSubmit={submitHandler}>
                    <TextField 
                        label={"Amount"}
                        variant="outlined"
                        type={"number"}
                        onChange={(e)=> dispatch({type: "NUMBERCHANGE",value: e.target.value})}
                        value={useSelector((state)=> state.number)}
                        required={true}
                        sx={{mb: "16px", width: "300px"}}
                    />
                    <TextField
                        label={"Note"}
                        variant="outlined"
                        type={"text"}
                        onChange={(e)=> dispatch({type: "DESCCHANGE",value: e.target.value})}
                        value={useSelector((state)=> state.desc)}
                        sx={{mb: "16px"}}
                        required={true}
                    />
                    <FormControl >
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select 
                            labelId={"category-label"}
                            label={"Category"}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={status === "income"}
                            >
                            <MenuItem value="food">Food</MenuItem>
                            <MenuItem value="shopping">Shopping</MenuItem>
                            <MenuItem value="travel">Travel</MenuItem>
                            <MenuItem value="pet">Pet</MenuItem>
                            <MenuItem value="other">other</MenuItem>
                        </Select>
                    </FormControl>
                    <RadioGroup sx={{mb: "16px"}}>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <FormControlLabel   control={
                                <Radio 
                                    onChange={(e)=> dispatch({type: "INCOME" , value: e.target.value})}
                                    value={"income"}
                                    checked={status === "income" ? true : false}
                            />} label="Income"/>
                            <FormControlLabel control={
                                <Radio
                                    onChange={(e)=> dispatch({type: "EXPEND" , value: e.target.value})}
                                    value={"expend"} 
                                    checked={status === "expend" ? true : false}
                            />} label="Expend"/>
                        </Stack>
                    </RadioGroup>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            background: "rgb(28,176,225)",
                            background: "linear-gradient(135deg, rgba(28,176,225,1) 0%, rgba(134,132,243,1) 25%, rgba(197,105,254,1) 50%, rgba(226,123,191,1) 75%, rgba(254,150,109,1) 100%)",}}>
                        SAVE
                    </Button>
                </form>
                </Stack>
            </div>
    )
})


export default NewTransaction