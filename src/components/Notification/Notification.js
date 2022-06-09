import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Notification.scss"
import { ToastContainer, toast } from "react-toastify"
 import "react-toastify/dist/ReactToastify.css"

const Notification = ()=>{
    let notification = useSelector((state)=> state.notification)
    const dispatch = useDispatch()
    useEffect(()=>{
        const typeOfNotification = () =>{
            switch(notification){
                case "success":
                    toast.success('تسک شما با موفقیت اضافه گردید.🥳', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
                    break
            }
        }
        typeOfNotification()
        dispatch({type:"CLEARNOTIFICATION"})
    },[notification])

    return(
        <div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    )
}

export default Notification