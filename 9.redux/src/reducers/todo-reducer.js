const initialState = {
  todos: [],
  category: [],
  filters: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE":
      const deletedTodos = state.todos.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        todos: deletedTodos,
      };
    case "TOGGLE_TODO":
      const toggled = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
      return {
        ...state,
        todos: toggled,
      };
      case "UPDATE":
        
    default:
      return state;
  }
};
export default TodoReducer;
