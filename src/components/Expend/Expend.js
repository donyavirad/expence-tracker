import React from "react"
import "./Expend.scss"
import Card from "../../hoc/Card"
const Expend = () =>{
    return (
        <div className="expend">
            <Card>
                <div className="expend-content">
                    <h3>
                        خرج:
                    </h3>
                    <span>
                        230 هزار تومان
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Expend