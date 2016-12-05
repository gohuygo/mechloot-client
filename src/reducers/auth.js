import * as ActionType from '../actions/authentications'

export default function auth(state = {
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  isFetching: false
}, action) {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return { isFetching: true, isAuthenticated: false }
    case ActionType.LOGIN_SUCCESS:
      return { isFetching: false, isAuthenticated: true }
    case ActionType.LOGIN_ERROR:
      return { isFetching: false, isAuthenticated: false }
    case ActionType.LOGOUT_SUCCESS:
      return { isFetching: false, isAuthenticated: false }
    default:
      return state
  }
}
