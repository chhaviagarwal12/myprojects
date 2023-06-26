import React from "react"

const UPIForm=()=>{
return(
    <div className="ui form">
        <div className="field">
        <label>Enter UPI ID</label>
        <div className="ui fluid icon input">
                <input type="text" placeholder="UPI ID"/>
                <i aria-hidden="true" class="amazon pay icon"></i>
            </div>
        </div>
        <button className="ui pink focused  button">SUBMIT</button>
    </div>
)
}
export default UPIForm