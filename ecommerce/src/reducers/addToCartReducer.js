export default (state=[],action)=>{
    
    switch(action.type){
        //for adding new product in cart
        case "ADD_CART":
      
       const index= state.findIndex(element=>element.data.id===action.payload.data.id)
      
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
              
        const newState = state.map(
        element=> element.data.id === action.payload.data.id ?  
        {"data": element.data, "quantity": element.quantity+1}: 
        {"data": element.data, "quantity": element.quantity})
        return newState 
            }
            //for existing cart of user
             case 'SINGLE_PRODUCT': 
            return(
                state=[...state,action.payload]
            )

            case 'INCREASE_QTY':
              const newState1 = state.map(
                element=> element.data.id === action.payload ?  
                {"data": element.data, "quantity": element.quantity+1}: 
                {"data": element.data, "quantity": element.quantity})
                return newState1    
        
                case 'DECREASE_QTY':
                    const newState2 = state.map(
                        element=> (element.data.id === action.payload)?  
                        {"data": element.data, "quantity": element.quantity-1}: 
                        {"data": element.data, "quantity": element.quantity})                 
                        return newState2.filter(i=>i.quantity>0)  
                        // let state1=[];
                        // let idx=-1;
                        // for(let i=0;i<state.length;i++){
                            
                        // if(state[i].data.id === action.payload) 
                        //   {
                        //     if(state[i].quantity>0){
                        //         state1[i]= {"data": state[i].data, "quantity": state[i].quantity-1} 
                        //         if(state1[i].quantity===0){
                        //             idx=i
                        //         }
                        //     }
                        //   } 
                        //   else{
                        //     state1[i]= {"data": state[i].data, "quantity": state[i].quantity} 
                        //   }
                         
                        // }
                        // if(idx!==-1){
                        //     return state1.splice(idx,1)
                        //   }
                        //   else{
                        //     return state1
                        //   }
            // case 'RESET_STATE':
            //     console.log("reset state",state)
            //     return(
            //         state
            //     )
            default:
            return state
    }
}