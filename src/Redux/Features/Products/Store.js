import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import rootReducer from './reducers';


const rootReducer = combineReducers({

})
const store = configureStore({
    reducer: rootReducer,
});

export default store;