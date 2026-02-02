import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import ACTION_TYPES from "../reducers/actionTypes";
import api from "../services/api";

const Modal = ({ isOpen, close, todo }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value.trim();
    if (!text) return toast.warning("içerik boş olamaz");

    const updatedTodo = {
      ...todo,
      text: text,
    };
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => {
        dispatch({ type: ACTION_TYPES.UPDATE, payload: updatedTodo });
        close();
      })
      .catch((err) => {
        toast.error("hatalı bir işlem yaptınız");
      });
  };

  return (
    <>
      <div className="overflow-y-hidden overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full backdrop-blur-sm">
        <div className="relative p-4 w-full max-w-2xl max-h-full bg-black rounded-md">
          {/* <!-- Modal content --> */}
          <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
              <h3 className="text-lg font-medium text-heading text-amber-800">Düzenle</h3>
              <button
                onClick={close}
                type="button"
                className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                X
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 mt-5 "
              action=""
            >
              <label htmlFor="">Texti Güncelle</label>
              <input
                type="text"
                defaultValue={todo.text}
                className="bg-gray-600 border-gray-500 text-gray-900 p-2.5 rounded-md"
              />
              {/* <!-- Modal footer --> */}
              <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                     <button  className="btn !bg-orange-500">Düzenle</button>
                <button
                  onClick={close}
                  className="btn bg-amber-950">Kapat</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
