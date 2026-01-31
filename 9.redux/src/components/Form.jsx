import React from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";


const Form = () => {
    const dispatch =useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    if (!text) return toast.warning("İçerik boş bırakılamaz");
    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime()
    };
  dispatch({type:"CREATE", payload:newTodo})
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit} action="">
        <input
          placeholder="Bir görev ekle"
          className="bg-zinc-500 border border-zinc-400  text-white rounded-md p-2 outline-none "
          type="text"
        />
        <button
          type="submit"
          className="bg-yellow-600 px-4 py-2 hover:bg-yellow-500 cursor-pointer"
        >
          Ekle
        </button>
      </form>
    </div>
  );
};

export default Form;
