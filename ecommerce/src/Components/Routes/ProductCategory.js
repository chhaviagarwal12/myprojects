import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategories,getSingleCategory } from "../../actions";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const Products=(props)=>{

    useEffect(()=>{
        props.getAllCategories()
    },[])
  
  
    
    const renderedList=()=>{
    if( props.allCategories){
        
            return props.allCategories.data.map((category)=>{
              
                return(
                   
                        //    <div className="ui eight wide column" key={category}>
                             <Link to={`/${category}`} id="product-category">
                    <div className="ui pink card" id="products-card" key={`${category}`} onClick={()=>{
                    props.returnCategory(category) //this function is changing url,callback function
                        props.getSingleCategory(category)}
                    }>
                    <div className="ui image" id="products-image">
                    <img src={`images/${category}.jpg`} alt={`${category}`} id="categories-image"/>   
                    <div className="content">
                    <div className="header" id="products-header">
                        {category.toUpperCase()}
                    </div>
                    </div>                               
                                </div>
                    </div>
                    </Link>
                //  </div> 
                  
                    
                )
           })
        }
    }
    if(props.allCategories.status===200){
    return(
       <div>
        <h1 className="main-header"> Shop By Category</h1>
            <div className="ui relaxed two column grid">
                
                <div className="row">
                    
                     {renderedList()}
                               </div>
               
                </div>
       </div>
        )
    }
    else if(!props.allCategories.status){
        return <Loader/>
       }
}

const mapStateToProps=(state)=>{
    // console.log("from map state to ptops of Product category",state)
return{
    allCategories:state.allCategories
    
}
}

export default connect(mapStateToProps,{getAllCategories,getSingleCategory})(Products)