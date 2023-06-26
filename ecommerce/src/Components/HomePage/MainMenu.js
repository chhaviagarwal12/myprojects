import React, { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom'
import { Label } from "semantic-ui-react";


const MainMenu=(props)=>{
    
    // console.log("<------------------in main menu component rendered-------------->")
  
    useEffect(()=>{
        // console.log("in use effect",window.localStorage.getItem("token"))
        if(Object.keys(props.loginResponse).length!==0 ){
            // console.log("in use effect1")
            const key=Object.keys(props.loginResponse)[0]
            const value=Object.values(props.loginResponse)[0]
            window.localStorage.setItem(key,value)
           }
           
        
    },[Object.keys(props.loginResponse)])
    
    const clearLocalStorage=()=>{
        // console.log("------")
        window.localStorage.clear()
      
        window.location.reload()
    }
 
    return(
        <>
            <div className="ui secondary menu">
            <NavLink to='/' className={({isActive})=>
                isActive ? 'pink active item':'item'} id="home" >
                     <i className="home large icon"></i>
                HOME
            </NavLink>
            <NavLink  id='products' to="/products" className={({isActive})=>
                isActive ? 'pink active item':'item'}   >
                     <i className="box large icon"></i>
                PRODUCTS
            </NavLink>
            {/* <NavLink to="/search" className={({isActive})=>
                isActive ? 'pink active item':'search item'} id="sear">
            <i className="search large icon"></i>
                SEARCH
            </NavLink> */}
            
            <NavLink to="/wishlist" className={({isActive})=>
                isActive ? 'pink active item':'item'} >
                     <Label floating color="pink">
                {props.wishlistedItems.length}</Label> 
                <i className="heart outline large icon">
                    
                </i>
                WISHLIST
            </NavLink>
            
            <NavLink to="/cart" className={({isActive})=>
                isActive ? 'pink active item':'item'} >
                   <Label floating color="pink">
                {props.cartItems.length}</Label> 
                <i className="shopping cart  large icon">
                                  </i>
                CART
            </NavLink>
            
            < NavLink to="/user" className={({isActive})=>
                isActive ? 'pink active item':'item' } >  
               
            {(Object.keys(props.loginResponse).length!==0)?
                ( <div onClick={clearLocalStorage}><i className="log out large icon"/>LOGOUT</div>)
                : ( <div><i className="sign in large icon"/>LOGIN</div>)}
               
            </NavLink>
 </div> 
     </>
 )
}
const mapStateToProps=(state)=>{
    // console.log("==from main menu component mapStateToProps==",state.userLogin)
    
   return{
   cartItems:state.addToCart,
   wishlistedItems:state.addToWishlist,
   loginResponse:state.userLogin
}
}
export default connect(mapStateToProps)(MainMenu)