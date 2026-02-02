import axios from "axios";

export const getUsers = () =>{
    return async (dispatch)=>{
        dispatch({type:"USERS_LOADING"});
           axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        dispatch({ type: "USERS_SUCCESS", payload: res.data.users });
  
      })
      .catch((err) => {
        dispatch({ type: "USERS_ERROR", payload: err.message });
      });
    }
}