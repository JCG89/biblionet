import { ADD_BOOKS } from "../constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  books: [],
};
const helperData = (action) => {
  return {
    id: uuidv4(),
    titre: action.payload.titre,
    auteur: action.payload.auteur,
  };
};

//reducers
const booksReducers = (state = initialState.books, action) => {
  //verification des données dans le localSorage
  if (localStorage.getItem("booksData")) {
    state = JSON.parse(localStorage.getItem("booksData"));
  }
  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperData(action)];
      // enrigistrement dans localStorage
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
export default booksReducers;
