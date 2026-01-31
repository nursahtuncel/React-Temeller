import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const List = () => {
  const { todos } = useSelector((store) => store.todo);

  return (
    <div className="grid gap-10 mt-10">
      {todos.map((item,key) => (
     <Cart key={item.id} todo={item}/>
      ))}
    </div>
  );
};

export default List;
