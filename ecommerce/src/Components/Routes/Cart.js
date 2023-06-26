import React ,{useState} from "react";
import Shopping from "../Cart/ShoppingSteps"
import LoginMessage from "../LoginMessage";
import CartDetails from "../Cart/CartDetails"
import ShippingDetails from "../Cart/ShippingDetails";
import PaymentDetails from "../Cart/PaymentDetails";

const Cart=()=>{
    const[completedStep1,setCompletedStep1]=useState(false);
    const[completedStep2,setCompletedStep2]=useState(false);
   
    const setActiveStep1=(activeFlag)=>{
        setCompletedStep1(activeFlag)
    }
    const setActiveStep2=(activeFlag)=>{
        setCompletedStep2(activeFlag)
    }
   
           if(window.localStorage.getItem("token")){
            console.log("from cart component",completedStep1,completedStep2)
        return(
            <div>
                <Shopping completed1={completedStep1} completed2={completedStep2} />
                {(completedStep1 && !completedStep2)?<ShippingDetails setActiveStep={setActiveStep2}/>:
                 (completedStep1 && completedStep2)? <PaymentDetails />:
                <CartDetails setActiveStep={setActiveStep1}/>
                }
                
               
 </div>
        )
    }
    else{
        return(
          <LoginMessage/>
        )
        
    }
    
}


export default Cart