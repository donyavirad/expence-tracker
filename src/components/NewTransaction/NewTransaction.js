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
    const loading = useSelector((state)=> state.form.loading)
    const submitHandler = (e)=>{
        e.preventDefault()
        const createdAt = new Date().getTime()
        const data = {
            description: desc,
            price: price,
            status: status,
            createdAt: createdAt,
        }
        dispatch({type:"STARTLOADING"})

        axios.post("https://expense-tracker-62236-default-rtdb.firebaseio.com/notes.json", data)
        .then(()=>{
            dispatch({type:"ENDLOADING"})
            dispatch({type:"CLOSEMODAL"})
            dispatch({type:"ONSUBMIT", value: data})
            dispatch({type:"SUCCESS", value: "success"})
        })
    }
    return(
            <div className="form">
                <h2 className="form-title">افزودن مقدار جدید</h2>
                <form className="form-container" onSubmit={submitHandler}>
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
                    <div className="form-radio">
                        <div className="form-radio-button">
                            <input
                                type="radio"
                                id="income"
                                name="status-price"
                                value="income"
                                onChange={(e)=> dispatch({type: "INCOME" , value: e.target.value})}
                                checked={status === "income" ? true : false}
                            />
                            <label htmlFor="income">درآمد</label>
                        </div>
                        <div className="form-radio-button">
                            <input
                                type="radio"
                                id="expend"
                                name="status-price"
                                value="expend"
                                onChange={(e)=> dispatch({type: "EXPEND" , value: e.target.value}) }
                                checked={status === "expend" ? true : false}
                            />
                            <label htmlFor="expend">خرج</label>
                        </div>
                    </div>
                    <button 
                        className={loading ? "form-button form-loading": "form-button"}
                            disabled={loading? true : false}>
                            افزودن
                    </button>
                </form>
            </div>
    )
})


export default NewTransaction