import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from "./Routes/ProductCategory"

import Wishlist from './Routes/Wishlist'
import Cart from './Routes/Cart'
import Users from './Routes/UserLogin'
import Orders from './Routes/Orders'

import HomeImage from './HomePage/HomeImage'
import UserProfile from './Routes/UserProfile'
import { useState } from 'react'
import SingleCategory from './Routes/ProductCatalogue'
import ErrorPage from './Routes/ErrorPage'


// export const SelectedProductContext=createContext()
const Navigation=()=>{
    const [selectedCategory,setSelectedCategory]=useState("")
    
   
  const setCategoryCallback=(category)=>{
      setSelectedCategory(category)
    }
  
    return(
        <div>
           
            <Routes>
             <Route path="/" element={<HomeImage/>}/>   
            <Route path="/products"  element={<Products returnCategory={setCategoryCallback}/>}></Route>
            <Route path={`/${selectedCategory}`} element={<SingleCategory selectedCategory={selectedCategory} />}/>
           
            <Route path="/wishlist"  element={<Wishlist/>}></Route>
            <Route path="/cart"  element={<Cart/>}></Route>
            <Route path="/user" element={<Users/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
           
            <Route path="/userprofile" element={<UserProfile/>}></Route>
            <Route path="*" element={<ErrorPage/>} />
            </Routes>
          
            
       
        </div>
        
        
        
  
        
    )
}
export default Navigation