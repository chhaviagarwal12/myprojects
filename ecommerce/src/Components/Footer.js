import React from "react";
import {Link} from 'react-router-dom'

const Footer=()=>{
    return(
     <div className="ui container">  
      <div className="ui pink segment">
        <div className="ui very relaxed two column grid">
          <div className="column">
          <h3>
            Registered Office Address 
            </h3>
          <p>Buildings Alyssa,Begonia and Clover situated in Embassy Tech Village,Outer Ring Road,
            Devarabeesanahalli Village,Varthur Hobli,Bengaluru – 560103, India</p>
          </div>
          <div className="column">
           
            <p> CIN: U72300KA2007PTC041799<br/>
                Telephone: +91-80-61561999</p>
         
            </div>
            </div>
            <div className="ui vertical divider"></div>
            </div>
          <div className="text-center">
            In case of any concern ,Contact Us
        <span> &nbsp;&nbsp; &copy; Copyright Shoppers World</span></div>
        </div>
        
     
    )
}
export default Footer