import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AddNewProductReducer from "./AddNewProductSlice";

const rootReducer = combineReducers({
    newProduct: AddNewProductReducer
})
const store = configureStore({
    reducer: rootReducer,
});

export default store;