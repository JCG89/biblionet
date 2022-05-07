import { createStore, combineReducers } from "redux";
import booksReducers from "./reducers/booksReducers";

const rootReducer = combineReducers({ library: booksReducers });

const store = createStore(rootReducer);

export default store;
