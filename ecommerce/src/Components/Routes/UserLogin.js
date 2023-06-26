import React, { useEffect ,useRef} from "react";
import { useState } from "react";
import { Button,Label } from "semantic-ui-react";
import fakeStore from "../../apis/fakeStore"
import { userDetails } from "../../actions";
import { connect } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { userLogin,getSingleProduct } from "../../actions";


const UserLogin=(props)=>{

    const [username,setUsername]=useState("")
    const [passwd,setPassword]=useState("")
    const [responseStatus,setResponseStatus]=useState(null)
   const [userId,setUserId]=useState(0)
   const ref=useRef()
   const navigate=useNavigate()
 
   useEffect(()=>{
      if(props.getUserCart){
         // console.log("props.getUserCart",props.getUserCart)
         for(let idx of props.getUserCart.products ){
             props.getSingleProduct(idx.productId,idx.quantity)
                           
              } 
     }
     
   },[userId])
   async  function userLoginRequest(){
                  await props.userLogin(username,passwd)
                     getUserList()
                 }
      
 
   const getUserList=async()=>{
      try{
         const response=await fakeStore.get('/users')
         setResponseStatus(response.status) 
         // console.log("from get user list function response",response)
         for(const userdata of response.data) {
            if(Object.is(username,userdata.username)) {
               // console.log("userdata id",userdata.id)
              
               window.localStorage.setItem("id",userdata.id)
               setUserId(userdata.id)
               props.userDetails(userdata.id)
               getCartDetails(userdata.id)
              
               break
            }
         }
         navigate("/")
                   
      }
      catch(error){
         console.log("from get user list function",error)
      }
   }
   
const getCartDetails=async(userId)=>{
   try{
      const response=await fakeStore.get(`/carts/${userId}`)
      for(let idx of response.data.products){
         props.getSingleProduct(idx.productId,idx.quantity)
         // console.log("cart details -userlogin",idx)
      }
     
   }
   catch(error){

   }

}
 const handleSubmit=(event)=>{
   // console.log("in handle submit")
    event.preventDefault();
 
    
 }
 const handleUsername=(event)=>{
   //  console.log("username")
    setUsername(event.target.value)
 }
 const handlePassword=(event)=>{
   //  console.log("password")
    setPassword(event.target.value)
 }
    return(
        
        <div>
           <div className="ui pink segment" >
            <div className="ui form">
                <div className="ui field">
                <label className="left floated">Enter Username</label>
                <div className="ui focus input">  
                <input 
                type="text"
                value={username}
                error={{ content: 'Please enter user name', pointing: 'below' }}
                name='Username'
                placeholder='username'
                id='form-input-user-name'
                onChange={handleUsername}/>
                </div>
                </div>
           
               <div className="ui field">
               <label className="left floated">Enter Password</label>
               <div className="ui fluid focus input">
                
                <input 
                type="password"
                value={passwd}
                error={{ content: 'Please enter password', pointing: 'below' }}
                label='Password'
                placeholder='password'
                id='form-input-passwd'
                onChange={handlePassword}/>
                </div>
               </div>
                
               <div className="ui field">
                  
               <Button ref={ref} type="submit" color="pink"  onClick={(event)=>{
                  handleSubmit(event)
                  userLoginRequest()
                   }}>SUBMIT</Button>
                  {/* {(responseStatus===200)?<div></div>:<Loader/>} */}
               </div>
                 
            </div>
            </div> 
            
            </div>
    )
}
// const mapStateToProps=(state)=>{
//    console.log("in user login component",state.getUserCart) 
//    return{
//       getUserCart:state.getUserCart
//    }
// }

export default connect(null,{userDetails,userLogin,getSingleProduct})(UserLogin)