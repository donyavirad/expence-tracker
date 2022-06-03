import React from "react"
import "./Income.scss"
import Card from "../../hoc/Card"
const Income = () =>{
    return (
        <div className="income">
            <Card>
                <div className="income-content">
                    <h3>
                        درآمد:
                    </h3>
                    <span>
                        230 هزار تومان
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Income