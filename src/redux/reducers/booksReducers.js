import { ADD_BOOK, DELETE_All, DELETE_BOOK } from "../constants";
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
const removeBook = (state, id) => {
  const books = state.filter((book) => book.id !== id);

  return books;
};

//reducers
const booksReducers = (state = initialState.books, action) => {
  //verification des données dans le localSorage
  if (localStorage.getItem("booksData")) {
    state = JSON.parse(localStorage.getItem("booksData"));
  }
  switch (action.type) {
    case ADD_BOOK:
      state = [...state, helperData(action)];
      // enrigistrement dans localStorage
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    case DELETE_BOOK:
      state = removeBook(state, action.payload);
      localStorage.setItem("booksData", JSON.stringify(state));

      return state;

    case DELETE_All:
      state = [];
      localStorage.setItem("booksData", JSON.stringify(state));

    default:
      return state;
  }
};
export default booksReducers;
