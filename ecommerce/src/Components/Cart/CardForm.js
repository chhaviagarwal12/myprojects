import React from "react"

const CardForm=()=>{
    return(
        <div className="ui form">
            <div className="field">
            <label>Card Number</label>
            <div className="ui fluid icon input">
         
                <input type="text" placeholder="Card Number"/>
                <i aria-hidden="true" class="credit card icon"></i>
            </div>
            </div>
            
         <div className="field">
         <label>Name on card</label>
         <div className="ui fluid input">
                
                <input type="text" placeholder="Name on card"/>
            </div>
         </div>
           
         
            
            <div className="equal width fields">
                <div className="field">
                <label>Expiry Date</label>
                <input type="text" placeholder="Valid Thru(MM/YY)"/>
                </div>
                <div className="field">
                <label>CVV</label>
                <input type="password" placeholder="CVV"/>
                </div>
            </div>
            <button className="ui pink focused  button">SAVE</button>
       </div>
    )
}
export default CardForm