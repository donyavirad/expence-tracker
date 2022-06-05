import React, { useState } from "react"
import "./Controls.scss"
import History from '../History/History'
import Modal from "../UI/Modal"
import NewTransaction from "../NewTransaction/NewTransaction"
import axios from "axios"
import Income from "../Income/Income"
import Expend from "../Expend/Expend"
import Balance from "../Balance/Balance"

const Controls = () =>{
    return(
            <div className="controls" >
                <Income/>
                <Expend/>
                <Balance />
                <History/>
                <Modal>
                    <NewTransaction  />
                </Modal>
            </div>
    )
}

export default Controls