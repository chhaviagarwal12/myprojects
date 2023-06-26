export default (state=[],action)=>{
    
    switch(action.type){
      
        case "SINGLE_CATEGORY":
            if(state.length===0){
                console.log("in if condition")
                return action.payload
            }
            else{
                console.log("in else condition")
                state=[]
                return action.payload
            }
                      
            
               default:
                       return state
    }
}