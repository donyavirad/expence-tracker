import React from "react"

const Input = (props) => {
    switch(props.config.type) {
        case "radio":
            return (
                <React.Fragment>
                    <input 
                        value={props.value}
                        onChange={props.change}
                        checked={props.checked}
                        {...props.config}
                    />
                    <label className="form-label-radio" htmlFor={props.config.id}>{props.label}</label>
                </React.Fragment>
            )
            break
        default:
            return(
                <React.Fragment>
                    <label className="form-label" htmlFor={props.config.id}>{props.label}</label>
                    <input 
                        value={props.value}
                        onChange={props.change}
                        {...props.config}
                    />
                </React.Fragment>

            )
            break
    }
}

export default Input