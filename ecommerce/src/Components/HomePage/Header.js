import React from "react";
import "semantic-ui-css/semantic.min.css"
import BurgerMenu from "./BurgerMenu";
import MainMenu from "./MainMenu";

const Header=()=>{
  
    return(
        <div className='ui three column grid' id="header-grid">
      <div className='ui segment row'>
      <div className='left floated one wide column'>
      <BurgerMenu />
      </div>
       <div className='six wide column'>
        <h1 id='appName'><i className="very large pink shopping bag icon"></i>Shoppers World
        </h1>
       </div>
       <div className='right floated eight wide column'>
       
        <MainMenu/>
        
       
        </div>
      </div>
    </div>
    )
}
export default Header