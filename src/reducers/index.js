import { combineReducers } from 'redux'
import auth from './Auth'
import productList from './ProductList'

const rootReducer = combineReducers({
  productList,
  auth
})

export default rootReducer
