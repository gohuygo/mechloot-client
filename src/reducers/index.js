import { combineReducers } from 'redux'

const subscribed = (state = false, action) => {
  switch (action.type) {
    case 'SET_SUBSCRIBED':
      return true
    default:
      return state
  }
}


const apiList = (state = [], action) => {
  switch (action.type) {
    case 'SET_API_LIST':
      return action.api_list
    default:
      return state
  }

}

const rootReducer = combineReducers({
  subscribed,
  apiList
})

export default rootReducer
