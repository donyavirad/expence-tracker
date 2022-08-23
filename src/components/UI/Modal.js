import React from "react"
import "./Modal.css"
import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux"
import Modal from '@mui/material/Modal';
const ModalElement = (props)=>{
    const dispatch = useDispatch()
    const modal = useSelector((state) => state.modal)
    return(
        <Modal
            open={modal}
            onClose={() =>dispatch({type:"CLOSEMODAL"})}
        >
        <Box className="modal-content">
            {props.children}
        </Box>
        </Modal>
    )

}

export default ModalElement