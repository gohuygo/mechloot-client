import { combineReducers } from 'redux'
import auth from './auth'

const productList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return action.productList
    default:
      return state
  }
}

const rootReducer = combineReducers({
  productList,
  auth
})

export default rootReducer
