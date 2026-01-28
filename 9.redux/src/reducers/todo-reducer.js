
const initialState={
    todos:[],
    category:[],
    filters:[],

}

const TodoReducer=(state=initialState,action)=>{
    switch(action.type){
    
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state,action.payload]
      }
   
    default: 
    return state;
    }
}
export default TodoReducer;