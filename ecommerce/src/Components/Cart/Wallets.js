import React from "react"

const Wallet=()=>{
    return(
    <div className="ui form">
        <div class="field">
            <div class="ui radio checkbox">
           
            <input type="radio" class="hidden" readonly="" tabindex="0" value="lg"/><label> <i className="amazon icon"/>Amazon Pay</label>
            </div>
             </div>
            <div class="field">
            <div class="ui radio checkbox">
           
            <input type="radio" class="hidden" readonly="" tabindex="0" value="lg"/><label><i className="google wallet icon"/>Google Wallet </label> 
            </div>
            </div>
            <button className="ui pink focused  button">SUBMIT</button>
       
   </div>
   )
}
export default Wallet