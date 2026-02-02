import { useEffect } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";



const List2 = () => {
  const dispatch = useDispatch();
  const {isLoading,error,users}=useSelector((store)=>store.userReducer)

  useEffect(() => {
    dispatch({ type: "USERS_LOADING" });

    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        dispatch({ type: "USERS_SUCCESS", payload: res.data.users });
        
      })
      .catch((err) => {
        dispatch({ type: "USERS_ERROR", payload: err.message });
      });
  }, [dispatch]);
  if(isLoading) return <h1>Yükleniyor..</h1>
  if(error) return <h1>Hata {error.message}</h1>

  return <div>
    {users.map((user,key)=> <div key={user.id}>
        <h1>{user.firstName}</h1>
    </div>)}
  </div>;
};

export default List2;
