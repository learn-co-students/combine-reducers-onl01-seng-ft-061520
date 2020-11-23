import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer ;

function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case `ADD_BOOK`:
      console.log(`Adding ${action.book.title} to db..`)
      return [...state, action.book];


    case "REMOVE_BOOK":
        console.log(`Removing ${action.book.title} from db`)
        idx = state.findIndex(book => book.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)
        ];
    default:
      return state; 
  }
}

function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state.authors, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}