import React from "react"
import "./NewTransaction.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
const NewTransaction = React.memo((props)=>{
    const dispatch = useDispatch()
    const desc = useSelector((state)=> state.desc)
    const price = useSelector((state)=> state.price)
    const submitHandler = (e)=>{
        e.preventDefault()
        const data = {
            description: desc,
            price: price,
        }
        axios.post("https://expense-tracker-62236-default-rtdb.firebaseio.com/notes.json", data)
        .then(()=>{
            dispatch({type:"CLOSEMODAL"})
            dispatch({type:"ONADD", value: data})
        })
    }
    return(
        <React.Fragment>
            <h2 className="form-title">افزودن مقدار جدید</h2>
            <form className="form" onSubmit={submitHandler}>
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="توضیحات"
                    value={useSelector((state)=> state.desc)}
                    onChange={(e)=> dispatch({type: "DESCCHANGE",value: e.target.value})}
                    required
                />
                <input 
                    className="form-input" 
                    type="number" 
                    placeholder="مقدار"
                    value={useSelector((state)=> state.number)}
                    onChange={(e)=> dispatch({type: "NUMBERCHANGE",value: e.target.value})}
                    required
                />
                <button className="price-button">افزودن</button>
            </form>
        </React.Fragment>
    )
})


export default NewTransaction