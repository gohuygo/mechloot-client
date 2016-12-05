import 'isomorphic-fetch'
import { apiUrlStringBuilder } from '../utils/apiUrlStringBuilder'

export const postEmail = (email) => {
  return (dispatch) => {
    var url = apiUrlStringBuilder() + '/api/v1/subscriptions?email=' + email
    return fetch(url, { method: 'post' })
      .then(response => response)
      .catch(error => error)
  }
}
