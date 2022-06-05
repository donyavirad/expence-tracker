
const initialState = {
    data: null,
    desc: "",
    price: "",
    modal: false,
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "DESCCHANGE":
            return {
                ...state,
                desc: action.value
            }
        case "NUMBERCHANGE":
            return {
                ...state,
                price: action.value
            }
        case "ONADD":
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