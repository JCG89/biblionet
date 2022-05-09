import { createStore, combineReducers, applyMiddleware } from "redux";
import booksReducers from "./reducers/booksReducers";
import fetchBooksReducer from "./reducers/fetchBooksReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  library: booksReducers,
  search: fetchBooksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
