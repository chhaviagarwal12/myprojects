import React ,{useState} from "react";
import { connect } from "react-redux";
import { getSingleProduct,increaseQty,decreaseQty } from "../../actions"



const CartDetails=(props)=>{
   
    let totalPrice=0;
    const [count,setCount]=useState()
    const handleChange=(event)=>{
        setCount(event.target.value)
    }
    const renderedList=()=>{
     let arr=[]
            return(
                props.cartItems.map((item)=>{             
                arr=[...arr,item.data.price*item.quantity] 
                const initialValue=0;
                totalPrice=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
                
                return(
                <div className="ui divided items" key={item.data.id}>
                <div className="item">  
                <div className="ui tiny image">
                <img src={`${item.data.image}`}/>
                </div>
                <div className="content">
                <a className="header">{item.data.title}</a>
                <div className="meta">
                    <span>Price:${item.data.price}</span>
                        {/* <span>Qty:{props.quantity.map((itemQty)=>item.data.id===itemQty.id?itemQty.quantity:item.quantity)}</span> */}
                    <span>Qty:{item.quantity}</span>
                     
                    <div className="ui right floated mini input">
                        <button className="ui pink  mini icon button" onClick={()=>props.decreaseQty(item.data.id)}>
                        <i aria-hidden="true" className="minus icon"></i>
                        </button>
                        <input type="text" value={item.quantity} onChange={handleChange}/>
                        <button className="ui pink  mini icon button" onClick={()=>props.increaseQty(item.data.id)}>
                        <i aria-hidden="true" className="add icon"></i>
                        </button>
                        </div>
                    </div>
                        </div>
                        </div>
                            </div>
                )
                
            })
        )
    }
   
        return(
            <div>
                <div className="ui vertical segment">
                {renderedList()}
                </div>
                <table className="ui pink three column table">
                    <tbody className="">
                        <tr>
                            <td className=""> <h3>Price Details</h3></td>
                        </tr>
                        <tr>
                            <td className=""> Bag MRP {(props.cartItems.length>1)?`(${props.cartItems.length} items)`:`(${props.cartItems.length} item)`}</td>
                            <td></td>
                            <td className="right aligned">${totalPrice}</td>
                        </tr>
                        <tr>
                            <td className="">Bag Discount</td>
                            <td></td>
                            <td className="right aligned">$0</td>
                            </tr>
                        <tr>
                            <td className="">Shipping</td>
                            <td></td>
                            <td className="right aligned">{(totalPrice>100)?("Free"):`$${totalPrice*0.2}`}</td>
                            </tr>
                        <tr>
                        <td></td>
                          <td className="center aligned"><button className="ui pink focused  button" onClick={()=>{
                            props.setActiveStep(true)
                          }}>PROCEED</button></td>
                          <td></td>
                        </tr>
                        </tbody>
                        </table>
                </div>
        )}
    

const mapStateToProps=(state)=>{
    console.log("from cart component",state.addToCart)
    return{
    cartItems:state.addToCart
 }
}


export default connect(mapStateToProps,{getSingleProduct,increaseQty,decreaseQty})(CartDetails)