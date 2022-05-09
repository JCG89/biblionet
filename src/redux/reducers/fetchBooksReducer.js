import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../constants";

const initialeState = {
  isLoading: false,
  fetchBooks: [],
  error: "",
};
const fetchBooksReducer = (state = initialeState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        fetchBooks: action.payload,
        isLoading: false,
        error: "",
      };
    case FETCH_BOOKS_ERROR:
      return {
        error: action.payload,
        isLoading: false,
        fetchBooks: [],
      };
    default:
      return state;
  }
};
export default fetchBooksReducer;
