import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import ProductDescription from "./ProductDescription";
import { useState } from "react";
import Loader from "../Loader";


const SingleCategory=(props)=>{
   
    const [show,setShow] =useState(false)
    const [idx,setIdx]=useState(null)
    const [dropdownValue,setDropdownValue]=useState(false)

    useEffect(()=>{
        console.log("in useEffect")
    },[dropdownValue])
    const handleModalState=(props)=>{
        // console.log(props)
        setShow(props)
    }
    

    const renderedList=()=>{
        if(props.singleCategory){
            // props.singleCategory.forEach(element=>element["qty"]=qty)
            return props.singleCategory.data.map((product,index)=>{
                return(
                    <div className="ui raised pink card" id="category-card" key={`${product.id}`} onClick={()=>{
                        setShow(!show);
                        setIdx(index);
                    } }>
                    
                        {/* <div className="card"> */}
                        <div className="ui fluid image" id="category-image">
                        <img src={product.image} alt={`${product.title}`} id="product-image"/>   
                            <div className="content">
                                <div className="header" id="category-header">
                                    {product.title.toUpperCase()}
                                    </div>
                                    <div className="extra content">
                                        <span>Price:&#x20b9;
                                        {product.price}</span>
            
                                    </div>
                                    <div className="extra">
                                      Rating: {product.rating.rate} 
                                      {/* <div class="ui star rating" data-rating={`${Math.round(product.rating.rate)}`}></div>  */}
                                    </div>
                                  
                                    </div>                               
                                </div>
                        {/* </div> */}
                    
                    </div>
                //  </div>       
                )
           })
        }
      
    }
    if(props.singleCategory.status===200){
        return(
        
            <div>
               
                
                 <h1 className="main-header">{props.selectedCategory.toUpperCase()}</h1>
               
                 <div className="ui relaxed three column  grid">
                 <div className="row" >
                 {renderedList()}
                  <ProductDescription show={show} handleModalState={handleModalState} productDescription={props.singleCategory.data[idx]}/>
     
                            </div>
            
             </div>
            </div>
            
           )
    }
   else if(!props.singleCategory.status){
    return <Loader/>
   }

}
const mapStateToProps=(state)=>{
// console.log("from map state to props of single category",state.singleCategory)

return{
    singleCategory:state.singleCategory
}
}


export default connect(mapStateToProps)(SingleCategory)