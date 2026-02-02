import ACTION_TYPES  from "./actionTypes.js"
const initialState = {
  todos: [],
  category: [],
  filters: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ACTION_TYPES.DELETE:
      const deletedTodos = state.todos.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        todos: deletedTodos,
      };
    case ACTION_TYPES.TOOGLE:
      const toggled = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
      return {
        ...state,
        todos: toggled,
      };
      case ACTION_TYPES.UPDATE:

      const uptadedTodos =state.todos.map((todo)=>todo.id===action.payload.id ? action.payload:todo)
        return{
          ...state,
         todos: uptadedTodos

          
        }
        
    default:
      return state;
  }
};
export default TodoReducer;
