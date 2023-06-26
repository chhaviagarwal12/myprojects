export default (state=[],action)=>{
    switch(action.type){
       
        case "ALL_PRODUCTS":
            return action.payload;
      
        default:
            return state
    }
}