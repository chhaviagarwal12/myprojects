export default (state={},action)=>{
    switch(action.type){
        case 'USER_DETAILS':
           
                       return  action.payload
                    
            
               default:
                       return state
    }
}