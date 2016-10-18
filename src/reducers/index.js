import { combineReducers } from 'redux'

const subscribed = (state = false, action) => {
  switch (action.type) {
    case 'SET_SUBSCRIBED':
      return true
    default:
      return state
  }
}

const rootReducer = combineReducers({
  subscribed
})

export default rootReducer
