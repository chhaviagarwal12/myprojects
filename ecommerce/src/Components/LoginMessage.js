import React from "react";
import { Link } from "react-router-dom";
const LoginMessage=()=>{
    return(
        <div className="ui pink warning message">
        <h2>Please Login First!!</h2>
        <p><Link to="/user">Redirect to Login Page</Link></p>
        </div>
    )
}
export default LoginMessage