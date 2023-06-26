import React from "react";
import {connect} from "react-redux"
import { userDetails } from "../../actions";
import LoginMessage from "../LoginMessage";
import Loader from "../Loader";

const UserProfile=({userProfile})=>{
    // console.log("user profile props",userProfile.data.name) 
    
    if(!(window.localStorage.getItem("token"))){
        return(
            <LoginMessage/>
        )
    }
    else if(userProfile.status===200){
        return(
            <div>
                <div>
                <h2 className="ui center aligned header">My Profile</h2>
                </div>
                <div className="ui divided items">
               
                <div className="item">
                    
                        <div className="content">
                          <div className="header">
                          Name:
                          <div className="meta">{((userProfile.data.name.firstname)+" "+(userProfile.data.name.lastname)).toUpperCase()}</div>
                          </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="content">
                          <div className="header">
                          Address:
                          <div className="meta"> {(userProfile.data.address.number)+","
                            +((userProfile.data.address.street)+","
                            +(userProfile.data.address.city)+","
                            +(userProfile.data.address.zipcode))}</div>
                          </div>
                       
                            </div>
                            </div>
                            <div className="item">
                        <div className="content">
                          <div className="header">
                          Email:
                          <div className="meta"> {(userProfile.data.email)}</div>
                          </div>
                       
                            </div>
                            </div>
                            <div className="item">
                        <div className="content">
                          <div className="header">
                          Contact Number:
                          <div className="meta"> {(userProfile.data.phone)}</div>
                          </div>
                       
                            </div>
                            </div>
                            </div>
            </div>
            
        )
    }
    else if(!userProfile.status){
      return <Loader/>
    }


}

const mapStateToProps=(state)=>{
    // console.log("in user profile",state.userProfile.data)
    return{
       userProfile:state.userProfile
   }
 }
export default connect(mapStateToProps,{userDetails})(UserProfile)