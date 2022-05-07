import { ADD_BOOKS, DELETE_BOOKS } from "../constants";

export const addBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data /*objet ( const initialState = {
      titre: "",
      auteur: "",
    };)*/,
  };
};
export const deleteBooks = (id) => {
  return {
    type: DELETE_BOOKS,
    payload: id,
  };
};
