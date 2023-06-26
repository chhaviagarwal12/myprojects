import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const Wishlist=(props)=>{
    const renderedList=()=>{
        return(
            props.wishlistedItems.map((item)=>{
                return(
                 
                    <div className="ui pink card" key={`${item.id}`}>
                    <div className="image">
                        <img src={`${item.image}`} alt="Product image" id="wishlisted-img"/>
                    </div>
                    <div className="content">
                        <div className="header">{item.title}</div>
                            <div className="extra content" id="wishlisted-btn">
                        <Button  icon color="red">
                           Remove Item
                           <i className="remove icon"></i></Button>
                        <Button color="black" icon>
                          Add To Cart
                        <i className="cart plus icon"></i></Button>
                    </div>
                       </div>
                       </div>
                        )}
            ))
}
  

    return(
        <div className="ui three cards" >
            {renderedList()}
        </div>
    )
    
}

const mapStateToProps=(state)=>{
    console.log("from wishlist component",state.addToWishlist)
    return{
        wishlistedItems:state.addToWishlist
    }
}
export default connect(mapStateToProps)(Wishlist)