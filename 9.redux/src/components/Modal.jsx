import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import ACTION_TYPES  from "../reducers/actionTypes"

const Modal = ({ isOpen, close, todo }) => {
    const dispatch =useDispatch()
  if (!isOpen) return null;

  const handleSubmit = (e) => {
e.preventDefault();
const text =e.target[0].value.trim();
if(!text) return toast.warning("içerik boş olamaz")

    const updatedTodo={
        ...todo,
        text:text
    }
dispatch({type:ACTION_TYPES.UPDATE,payload:updatedTodo})
close()

  }


  return (

<>




<div  className="overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-3xl">
    <div className="relative p-4 w-full max-w-2xl max-h-full  bg-amber-50">
        {/* <!-- Modal content --> */}
        <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 className="text-lg font-medium text-heading">
            Düzenle
                </h3>
                <button onClick={close} type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                X
                </button>
            </div>
            {/* <!-- Modal body --> */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5 " action="">
            <label htmlFor="">Texti Güncelle</label>
            <input type="text" defaultValue={todo.text} className="bg-gray-600 border-gray-500 text-gray-900 p-2.5 rounded-md" />
                  {/* <!-- Modal footer --> */}
            <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                <button  type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Kaydet</button>
                <button onClick={close} data-modal-hide="default-modal" type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Kapat</button>
            </div>
          </form>
    
        </div>
    </div>
</div>
</>
  );
};

export default Modal;
