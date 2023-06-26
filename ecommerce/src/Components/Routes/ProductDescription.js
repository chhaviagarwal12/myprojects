import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { useState } from "react";
import { Image, Modal,Button } from 'semantic-ui-react'
import { addToCart, increaseQty,addToWishlist } from "../../actions";
import {connect} from "react-redux"



const ProductDescription=({show,handleModalState,productDescription,addToCart,increaseQty,addToWishlist})=>{
// console.log("From modal",productDescription)
 const [open,setOpen] =useState(false)
const date=new Date()
const productDate=date.getFullYear()+""+date.getMonth()+""+date.getDate()

//  const setItem=useContext(SelectedProductContext)
//  const getWishlistedItem=useContext(SelectedProductContext)
 
    if(show){
           return(
        <Modal
        onClose={() => {
          setOpen(false);
         handleModalState(false)//telling parent component about click on close icon
        }}
        onOpen={() =>{
          setOpen(true);
          handleModalState(true)
        } }
        closeIcon
        open={!open}
       >
        <Modal.Header>{productDescription.title}</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={`${productDescription.image}`} wrapped />
          <Modal.Description size="large">
            <b><p>{productDescription.description}</p></b>
             <h3>Price:${productDescription.price}</h3>
            <h3>Rating:{productDescription.rating.rate}</h3>
            <h3>Reviewed by:{productDescription.rating.count} people</h3>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
     <Button  color="red" animated onClick={()=>{
      addToWishlist(productDescription)
       handleModalState(false)
     }}>
      <Button.Content visible >Wishlist</Button.Content>
      <Button.Content hidden><i className="ui heart icon"></i></Button.Content>
     </Button>
         
           <Button color='black' animated onClick={() =>{
        // setItem(productDescription)
        // addToCart(window.localStorage.getItem("id"),productDate,{productId:productDescription.id,quantity:1})
            addToCart(productDescription,1)
        increaseQty(productDescription.id,1)
        handleModalState(false)
      }}>
         <Button.Content visible>Add to Cart</Button.Content>
      <Button.Content hidden><i className="ui cart icon"></i></Button.Content>
        </Button>
       
        <Button color='green' animated onClick={() => handleModalState(false)}>
        <Button.Content visible>Buy Now</Button.Content>
      <Button.Content hidden><i className="ui shopping basket  icon"></i></Button.Content></Button>
      </Modal.Actions>
      </Modal>
    ) 
    }
  }

 
export default connect(null,{addToCart,increaseQty,addToWishlist})(ProductDescription)