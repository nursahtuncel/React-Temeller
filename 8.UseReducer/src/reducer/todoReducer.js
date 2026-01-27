export const initialState = { theme: "KOYU", todos: [] };

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      const newTheme = state.theme === "KOYU" ? "AÇIK" : "KOYU";
      return { ...state, theme: newTheme };

    case "CREATE":
      const newTodo = { text: action.payload, id: new Date().getTime() };
    const   uptadedTodos = state.todos.concat(newTodo);
      return { ...state, todos: uptadedTodos };
    case "DELETE":
      const filteredTodos = state.todos.filter((item)=>item.id!==action.payload)
     
      return {...state,todos:filteredTodos}

  }

  return state;
};
export default TodoReducer;
