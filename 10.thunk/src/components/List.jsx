import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";


const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, users } = useSelector((store) => store.userReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  if (isLoading) return <h1>Yükleniyor..</h1>;
  if (error) return <h1>Hata {error.message}</h1>;

  return (
    <div>
      {users.map((user, key) => (
        <div key={user.id}>
          <h1>{user.firstName}</h1>
        </div>
      ))}
    </div>
  );
};

export default List;
