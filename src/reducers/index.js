import { combineReducers } from 'redux'

const subscribed = (state = false, action) => {
  switch (action.type) {
    case 'SET_SUBSCRIBED':
      return true
    default:
      return state
  }
}


const productList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return action.api_list
    default:
      return state
  }

}

const rootReducer = combineReducers({
  subscribed,
  productList
})

export default rootReducer
