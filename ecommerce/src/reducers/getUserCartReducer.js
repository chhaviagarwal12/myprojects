export default (state=[],action)=>{
 switch(action.type){
     case 'CART_DETAILS':
         return action.payload
         default:
             return state
 }
}