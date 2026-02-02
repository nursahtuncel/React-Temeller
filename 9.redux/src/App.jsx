import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect } from "react";
import api from "./services/api";
import ACTION_TYPES from "./reducers/actionTypes";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTION_TYPES.LOADING });
    api
      .get("./todos")
      .then((res) => dispatch({ type: ACTION_TYPES.SET, payload: res.data }))
      .catch((err) =>    {
        console.log(err.message)
           toast.error("birhata oluştu"),
      dispatch({type:ACTION_TYPES.ERROR,payload:err.message})
      }

   
    )
  
  });
  return (
    <div
      className="h-screen flex flex-col
 items-center justify-start mt-10"
    >
      <div>
        <h1>
          Redux <span>CRUD</span>
        </h1>
      </div>

      <Form />
      <List />
    </div>
  );
};

export default App;
