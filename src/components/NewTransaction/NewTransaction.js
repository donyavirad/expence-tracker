import React, {useState} from "react"
import "./NewTransaction.scss"

const NewTransaction = React.memo((props)=>{
    const [desc,setDesc] = useState("")
    const [price,setPrice] = useState(0)
    const submitHandler = (e)=>{
        e.preventDefault()
        const data = {
            description: desc,
            price: price,
        }
        props.onAddTransaction(data)
    }
    
    return(
        <React.Fragment>
            <h2 className="form-title">افزودن مقدار جدید</h2>
            <form className="form" onSubmit={submitHandler}>
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="توضیحات"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                />
                <input 
                    className="form-input" 
                    type="number" 
                    placeholder="مقدار"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <button className="price-button">افزودن</button>
            </form>
        </React.Fragment>
    )
})



export default NewTransaction