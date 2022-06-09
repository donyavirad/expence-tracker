
const initialState = {
    data: null,
    form : {
        price: "",
        desc: "",
        status: "income",
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
        case "ONSUBMIT":
            return {
                ...state,
                data: [...state.data, action.value]
            }
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
        case "EXPENDRESULT":
            return {
                ...state,
                expend: action.value,
            }
        case "INCOMERESULT":
            return {
                ...state,
                income: action.value,
            }
        case "LOADDATA":
            return {
                ...state,
                data: action.value
            }

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

        default:
            return state
    }
}

export default reducer