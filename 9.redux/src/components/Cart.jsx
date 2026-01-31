import React from "react";
import { useDispatch } from "react-redux";

const Cart = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: todo.id });
  };
 const handleStatus=()=>{
  dispatch({type:"TOGGLE_TODO",payload:todo.id})
 }
  return (
    <div className="flex flex-col border border-zinc-700 rounded p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <h3> {todo.text}</h3>
        <h5>{todo.isDone ? "Tamamlandı" : "Devam Ediyor"}</h5>
        <h6>
          {" "}
          {new Date(todo.createdAt).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h6>
      </div>
      <div className="flex gap-2.5 mt-5">
        <button className="btn !bg-orange-500">Düzenle</button>
        <button onClick={handleStatus} className="btn !bg-green-500">
          {todo.isDone ? "Geri al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn !bg-red-500 ">
          Sil
        </button>
      </div>
    </div>
  );
};

export default Cart;
