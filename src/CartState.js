import { createStore } from "redux";
let initialState = {
	                  data:[]

                   }
let reducer=(state=initialState,action)=>{
	switch(action.type){
	case "ADD": return {
		
		...state,
		data:[...state.data ,
		           {
		           	  
		               	product:action.payload,
		               	count:action.count,
		           }
                            
			 ]

	}
	case "UPDATE-": 
        let subArray = state.data.map((item,i)=>{
        	if(i==action.id){
        		return{
                   ...item,
                   count:state.data[action.id].count-1,
        		}
        	}
        	else{
        		return{
        			...item
        		}
        	}
        })
        return{
        	...state.data,
        	data:subArray
        }

     case "UPDATE+": 
        let addArray = state.data.map((item,i)=>{
        	if(i==action.id){
        		return{
                   ...item,
                   count:state.data[action.id].count+1,
        		}
        	}
        	else{
        		return{
        			...item
        		}
        	}
        })
        return{
        	...state.data,
        	data:addArray
        }
     case "DELETE":
     	 return{
     	 	...state,
     	 	data:state.data.filter((item)=>{
     	 		return item!=action.payload
     	 	})
     	 }
		
		

    default: return state
	}
    



}

let store = createStore(reducer)

export default store