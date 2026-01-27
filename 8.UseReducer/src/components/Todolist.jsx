import React from "react";
import { useReducer } from "react";
import TodoReducer, { initialState } from "../reducer/todoReducer";

const Todolist = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

const handleSubmit = (e) => {
  e.preventDefault();

  const text = e.target.elements.content.value.trim();

  if (!text) {
    alert("Lütfen içerik giriniz");
    return;
  }
  dispatch({type:"CREATE",payload:text})

 
};

  return (
    <div>
      <h1>Yapılacaklar listesi</h1>

      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>Değiş</button>

      <h1>Tema :{state.theme}</h1>

   <form onSubmit={handleSubmit}>

        <input name="content" placeholder="todo.." type="text" />
        <button type="submit">Oluştur</button>
      </form>
<ul className="todo-list">
  {state.todos.map((item) => (
    <li className="todo-item" key={item.id}>
      <span className="todo-text">{item.text}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch({ type: "DELETE", payload: item.id })}
      >
        Sil
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Todolist;
