import { ADD_BOOK, DELETE_BOOK, DELETE_All } from "../constants";

export const addBook = (data) => {
  console.log(data);
  return {
    type: ADD_BOOK,
    payload: data /*objet ( const initialState = {
      titre: "",
      auteur: "",
    };)*/,
  };
};
export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};
export const deleteAll = () => {
  return {
    type: DELETE_All,
  };
};
