import React from "react"
import "./NewTransaction.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
const NewTransaction = React.memo((props)=>{
    const dispatch = useDispatch()
    const desc = useSelector((state)=> state.form.desc)
    const price = useSelector((state)=> state.form.price)
    const status = useSelector((state)=> state.form.status)
    const submitHandler = (e)=>{
        e.preventDefault()
        const data = {
            description: desc,
            price: price,
            status: status
        }
        axios.post("https://expense-tracker-62236-default-rtdb.firebaseio.com/notes.json", data)
        .then(()=>{
            dispatch({type:"CLOSEMODAL"})
            dispatch({type:"ONSUBMIT", value: data})
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
                    min="0"
                    required
                />
                <input 
                    className="form-radio-button"
                    type="radio"
                    id="income"
                    name="status-price"
                    value="income"
                    onChange={(e)=> dispatch({type: "INCOME" , value: e.target.value})}
                    checked={status === "income" ? true : false}
                />
                <label htmlFor="income">درآمد</label>
                <input 
                    className="form-radio-button"
                    type="radio"
                    id="expend"
                    name="status-price"
                    value="expend"
                    onChange={(e)=> dispatch({type: "EXPEND" , value: e.target.value}) }
                    checked={status === "expend" ? true : false}
                />
                <label htmlFor="expend">خرج</label>
                <button className="form-button">افزودن</button>
            </form>
        </React.Fragment>
    )
})


export default NewTransaction