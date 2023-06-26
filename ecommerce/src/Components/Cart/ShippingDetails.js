import React from "react"
import { connect } from "react-redux"

const ShippingDetails=({userProfile,setActiveStep})=>{
    return(
        <div >
            <div className="ui pink  segment">
             
                    <div>
                        <h3>
                 Deliver to {((userProfile.data.name.firstname)+" "+(userProfile.data.name.lastname)).toUpperCase()}
                        </h3>
                        
                    </div>
                        
                <div>
                {(userProfile.data.address.number)}<br/>
                {(userProfile.data.address.street)}<br/>
                {(userProfile.data.address.city)}<br/>
                {(userProfile.data.address.zipcode)}<br/>
                </div>
                </div>
                <div className="extra content">
                <button className="ui pink focused  button" onClick={()=>setActiveStep(true)}>CONFIRM</button>
                </div>
            </div>
                            
    
             
    )
}
const mapStateToProps=(state)=>{
    return{
       userProfile:state.userProfile
   }
 }
export default connect(mapStateToProps)(ShippingDetails)