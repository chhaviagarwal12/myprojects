export default (state=[],action)=>{
    
    switch(action.type){
        case "ADD_WISHLIST":
           
            console.log("add wishlist reducer")
       const index= state.findIndex(element=>element.id===action.payload.id)
    
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
                return  state
            }
                      
            default:
            return state
    }
}