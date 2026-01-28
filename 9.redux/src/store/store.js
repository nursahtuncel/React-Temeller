import { configureStore } from "@reduxjs/toolkit";

import ThemeReducer from "../reducers/theme-reducer";
import TodoReducer from "../reducers/todo-reducer";

const store = configureStore({

    reducer:{
        theme:ThemeReducer,
        todo:TodoReducer
    }
})
export default store;