import React from "react"
import "./Controls.css"
import History from '../History/History'
import Modal from "../UI/Modal"
import NewTransaction from "../NewTransaction/NewTransaction"
import Balance from "../Balance/Balance"
import { Container, Box } from "@mui/material"
import { grey } from "@mui/material/colors"

const Controls = () =>{
    return(
        <Box sx={{
            width:"100%",
            backgroundColor: grey[100]
        }} >
            <Container>
                <Box className="controls-container">
                    <Balance />
                    <History/>
                    <Modal>
                        <NewTransaction  />
                    </Modal>
                </Box>
            </Container>
        </Box>
    )
}

export default Controls