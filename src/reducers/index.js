import { combineReducers } from 'redux'
import auth from './auth'
import productList from './productList'

const rootReducer = combineReducers({
  productList,
  auth
})

export default rootReducer
