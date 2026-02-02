import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import ACTION_TYPES  from "../reducers/actionTypes"
import api from "../services/api";
import { toast } from "react-toastify";

const Cart = ({ todo }) => {
  const [IsOpen ,setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
  api.delete(`/todos/${todo.id}`)
  .then(()=>{
    dispatch({ type: ACTION_TYPES.DELETE, payload: todo.id });
    toast.success("todo silindi")
  })
  .catch((err)=> toast.error("silme işlemi başarısız"))

  };
 const handleStatus=()=>{
  api.patch(`/todos/${todo.id}`,{isDone:!todo.isDone})
  .then(()=>{
  dispatch({type:ACTION_TYPES.TOOGLE,payload:todo.id})

  })
  .catch((err)=>{
    toast.error("hatalı bir işlem yaptınız")
  })


 }
 const handleUpdate = () => {
  setIsOpen(true)

 }
  return (
    <>
  

    <div className="flex flex-col border border-zinc-700 rounded p-4 shadow-lg backdrop-blur-sm">
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
        <button onClick={handleUpdate}  className="btn !bg-orange-500">Düzenle</button>
        <button onClick={handleStatus} className="btn !bg-green-500">
          {todo.isDone ? "Geri al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn !bg-red-500 ">
          Sil
        </button>
      </div>
    </div>
<Modal isOpen={IsOpen} close={()=>setIsOpen(false)} todo={todo}/>
      </>
  );
};

export default Cart;
