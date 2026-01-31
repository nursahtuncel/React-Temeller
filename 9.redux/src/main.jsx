
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./store/store"
import { Provider } from "react-redux";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
     <App/>
     <ToastContainer autoClose={2000} theme="dark" position='bottom-left' 
     hideProgressBar/>

    </Provider>
   
  )

