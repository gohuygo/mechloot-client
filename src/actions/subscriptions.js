import fetch from 'isomorphic-fetch'
import { apiUrlStringBuilder } from '../utilities/apiUrlStringBuilder'

export const SET_SUBSCRIBED = 'SET_SUBSCRIBED'

export const postSubscribed = (email) => {
  return function(dispatch) {
    var url = apiUrlStringBuilder() + '/api/v1/subscriptions?email=' + email

    return fetch(url, { method: 'post' })
      .then(result => {
        if (result.status === 200) return true
        return true //TODO
      }, error => {
        return false
      })
  }
}