import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const List = () => {
  const { todos,isLoading,error } = useSelector((store) => store.todo);
if(isLoading) return <h1>Yükleniyor..</h1>
if (error) return <h1 className="mt-5">HATA! {error}</h1>;

  return (
    <div className="grid gap-10 mt-10">
      {todos.map((item,key) => (
     <Cart key={item.id} todo={item}/>
      ))}
    </div>
  );
};

export default List;
