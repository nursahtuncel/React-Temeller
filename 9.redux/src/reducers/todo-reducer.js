import ACTION_TYPES from "./actionTypes.js";
const initialState = {
  todos: [],
  category: [],
  isLoading: false,
  filters: [],
  error: null,
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
      const uptadedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
      return {
        ...state,
        todos: uptadedTodos,
      };
    case ACTION_TYPES.SET:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case ACTION_TYPES.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload

      };
    default:
      return state;
  }
};
export default TodoReducer;
