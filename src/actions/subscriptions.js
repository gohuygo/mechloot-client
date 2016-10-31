import 'isomorphic-fetch'
import { apiUrlStringBuilder } from '../utilities/apiUrlStringBuilder'

// export const POST_EMAIL = 'POST_EMAIL'

export const postEmail = (email) => {
  return (dispatch) => {
    var url = apiUrlStringBuilder() + '/api/v1/subscriptions?email=' + email
    return fetch(url, { method: 'post' })
      .then(response => response)
      .catch(error => error)
  }
}