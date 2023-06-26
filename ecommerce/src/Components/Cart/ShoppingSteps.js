import React from "react"


const ShoppingSteps=(props)=>{
    // console.log("from shopping steps component",props.completed1,props.completed2,props.completed3)
    return(
        <div className="ui fluid steps">
            <div className={(props.completed1)?"disabled step":"active step"}>
        <i aria-hidden="true" className="cart icon"></i>
        <div className="content">
            <div className="title">Cart Details</div>
            </div>
            </div>
            <div className={(props.completed1 && props.completed2===false)?"active step":"disabled step"}><i aria-hidden="true" className="truck icon"></i>
            <div className="content"><div className="title">Shipping Details</div>
    
            </div>
            </div>
            <div className={(props.completed1 && props.completed2)?"active step":"disabled step"}><i aria-hidden="true" className="payment icon"></i>
            <div className="content"><div className="title">Payment</div>
            </div>
        </div>
        </div>
    )
}

export default ShoppingSteps

