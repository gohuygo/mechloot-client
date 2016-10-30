import { combineReducers } from 'redux'

const productList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return action.productList
    default:
      return state
  }
}

const rootReducer = combineReducers({
  productList
})

export default rootReducer
