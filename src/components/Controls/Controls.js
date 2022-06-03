import React, { useState } from "react"
import "./Controls.scss"
import Title from "../Title/Title"
import Price from "../Price/Price"
import History from '../History/History'
import Modal from "../UI/Modal"
import NewTransaction from "../NewTransaction/NewTransaction"
import axios from "axios"
import { connect } from "react-redux"
import Income from "../Income/Income"
import Expend from "../Expend/Expend"
import Balance from "../Balance/Balance"
const Controls = () =>{
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const showModal = ()=>{
        setModal(true)
    }
    const closeModal = () =>{
        setModal(false)
    }

    const addTransaction = (item)=>{
        axios.post("https://expense-tracker-62236-default-rtdb.firebaseio.com/notes.json", item)
            .then((response)=>{
                setData([...data,item])
                setModal(false)
            })
    }
    const historyHandler = (items)=>{
        setData(items)
    }
    return(
            <div className="controls" >
                <Income/>
                <Expend/>
                <Balance showModal={showModal}/>
                {/* <Price showModal={showModal} data={data}/> */}
                <History onLoaded={historyHandler} data={data}/>
                <Modal show={modal} close={closeModal}>
                    <NewTransaction  onAddTransaction={addTransaction}/>
                </Modal>
            </div>
    )
}
export default connect()(Controls)