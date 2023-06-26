import React, {  useState } from 'react'
import {slide as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const BurgerMenu=(props)=>{
  const [open,setOpen]=useState(false)

  const handleStateChange=(state)=>{
    setOpen(state.isOpen)
  }

  const closeMenu =()=> {
    console.log("in close menu",open)
    setOpen(false)
  }

    return(
<div id="outer-container">
 
  <Menu  isOpen={open}  customBurgerIcon={<i className='bars large icon'/>} 
  onStateChange={(state) => handleStateChange(state)}>
            <Link to='/userprofile' className='menu-item' onClick={()=>closeMenu()}>
                {window.localStorage.getItem("token") && (props.userProfile)?
            `${(props.userProfile.name.firstname)} ${(props.userProfile.name.lastname)}`:"User Profile"}
             <i className="user large icon" >
                    </i></Link>
            <hr/>
         <Link to='/orders' className='menu-item' onClick={()=>closeMenu()}> Orders <i className="large boxes icon"></i></Link>
         <hr/> 
       </Menu>

  <div id="page-wrap">
    <div id="content">
    </div>
  </div>
</div>


       
        
    )
 }


const mapStateToProps=(state)=>{
//  console.log("from burger menu map state to props",state.userProfile)
    return{
       userProfile:state.userProfile.data
   }
 }
export default connect(mapStateToProps)(BurgerMenu)