import { combineReducers } from 'redux'

const initialSubscription = {
  subscribed: false
}

const subscribed = (state = initialSubscription, action) => {
  switch (action.type) {
    case 'SET_SUBSCRIBED':
      return true
    default:
      return state.subscribed
  }
}

const rootReducer = combineReducers({
  subscribed
})

export default rootReducer
