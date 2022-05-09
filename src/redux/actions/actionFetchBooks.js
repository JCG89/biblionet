import axios from "axios";
import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../constants";

export const FetchBooksLoading = () => {
  return {
    type: FETCH_BOOKS_LOADING,
  };
};
export const fetchBooksSucces = (data) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: data,
  };
};
export const fetchBooksError = (error) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error,
  };
};

const GOOGLE_API_KEY = "AIzaSyCC519lG864PErL-ZbeWWWaQ6cOP_At_CQ";

export const fetchBooksInApi = (title) => {
  return (dispatch) => {
    dispatch(FetchBooksLoading());

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=&${GOOGLE_API_KEY}&maxResults=20`
      )
      .then((res) => {
        const bookItemssArr = res.data.items;
        dispatch(fetchBooksSucces(bookItemssArr));
      })
      .catch((error) => {
        dispatch(fetchBooksError(error.message));
      });
  };
};
