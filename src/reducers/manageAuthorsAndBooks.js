import { combineReducers } from "redux";
import booksReducer from './booksReducer'
import authorsReducer from './authorsReducer'

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
 
export default rootReducer;
 