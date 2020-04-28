import { combineReducers } from 'redux'
import appReducer from '../components/app/reducer'
import booksReducer from '../components/book-list/reducer'

export default combineReducers({
  app: appReducer,
  books: booksReducer,
})
