import React from "react"
import "./NewTransaction.scss"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import Input from "../Input/Input"
const NewTransaction = React.memo((props)=>{
    const dispatch = useDispatch()
    const desc = useSelector((state)=> state.form.desc)
    const price = useSelector((state)=> state.form.price)
    const status = useSelector((state)=> state.form.status)
    const loading = useSelector((state)=> state.form.loading)

    const formData = {
        priceInput: {
            config: {
                className: "form-input",
                id: "priceInput",
                type: "number",
                placeholder:"مقدار پول به تومان می باشد",
                min: 0,
                required: true,
            },
            label: "مقدار پول",
            value:''
        },
        descInput: {
            config: {
                className: "form-input",
                id: "descInput",
                type: "text",
                placeholder:"توضیحات را وارد کنید.",
                required: true,
            },
            label: "توضیحات ",
            value:''
        },
        incomeRadioInput: {
            config: {
                class:"form-input-radio",
                type: "radio",
                id: "income",
                name: "status-price",
            },
            value:"income",
            label: "درآمد"
        },
        expendRadioInput: {
            config: {
                class:"form-input-radio",
                type: "radio",
                id: "expend",
                name: "status-price",
            },
            value: "expend",
            label: "خرج"
        }
    }

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
                    <Input 
                        change={(e)=> dispatch({type: "NUMBERCHANGE",value: e.target.value})}
                        config={formData.priceInput.config}
                        value={useSelector((state)=> state.number)}
                        label={formData.priceInput.label}
                    />
                    <Input 
                        change={(e)=> dispatch({type: "DESCCHANGE",value: e.target.value})}
                        config={formData.descInput.config}
                        value={useSelector((state)=> state.desc)}
                        label={formData.descInput.label}
                    />
                    <div className="form-radio">
                        <div className="form-radio-button">
                            <Input
                                config={formData.incomeRadioInput.config}
                                value={formData.incomeRadioInput.value}
                                change={(e)=> dispatch({type: "INCOME" , value: e.target.value})}
                                checked={status === "income" ? true : false}
                                label={formData.incomeRadioInput.label}
                            />
                        </div>
                        <div className="form-radio-button">
                            <Input
                                config={formData.expendRadioInput.config}
                                value={formData.expendRadioInput.value}
                                change={(e)=> dispatch({type: "EXPEND" , value: e.target.value}) }
                                checked={status === "expend" ? true : false}
                                label={formData.expendRadioInput.label}
                            />
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