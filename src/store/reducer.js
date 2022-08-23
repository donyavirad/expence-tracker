
const initialState = {
    data: null,
    form : {
        price: "",
        desc: "",
        status: "income",
        loading: false,
    },
    modal: false,
    income: 0,
    expend: 0,
    notification: "",
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "DESCCHANGE":
            return {
                ...state,
                form: {
                    ...state.form,
                    desc : action.value
                }
            }
        case "NUMBERCHANGE":
            return {
                ...state,
                form: {
                    ...state.form,
                    price : action.value
                }
            }
        case "INCOME":
            return {
                ...state,
                form: {
                    ...state.form,
                    status : action.value
                }
            }
        case "EXPEND":
            return {
                ...state,
                form: {
                    ...state.form,
                    status : action.value
                }
            }

            // end form 

            // modal 

        case "CLOSEMODAL":
            return {
                ...state,
                modal: false,
            }
        case "SHOWMODAL":
            return {
                ...state,
                modal: true,
            }

            // end modal 

            // notifications 
    
        case "SUCCESS":
            return{
                ...state,
                notification: "success"
            }
        case "CLEARNOTIFICATION":
            return{
                ...state,
                notification: ""
            }

            // end notifications 

        case "INCOMERESULT":
            return {
                ...state,
                income: action.value,
            }
        case "EXPENDRESULT":
            return {
                ...state,
                expend: action.value,
            }
        case "LOADDATA":
            return {
                ...state,
                data: action.value
            }


        default:
            return state
    }
}

export default reducer