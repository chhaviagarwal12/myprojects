import { combineReducers } from "redux";

import allProducts from "./allProductsReducer"
import allCategories from "./allCategoriesReducer"
import singleCategory from "./singleCategoryReducer"
import addToCartReducer from "./addToCartReducer";
import userDetailsReducer from "./userDetailsReducer";
import addToWishlistReducer from "./addToWishlistReducer";
import userLoginReducer from "./userLoginReducer";
import getUserCartReducer from "./getUserCartReducer"


export default combineReducers({
    allCategories:allCategories,
    singleCategory:singleCategory,
    allProducts:allProducts,
    addToCart:addToCartReducer,
    userProfile:userDetailsReducer,
    addToWishlist:addToWishlistReducer,
    userLogin:userLoginReducer,
    getUserCart:getUserCartReducer
})