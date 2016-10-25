import fetch from 'isomorphic-fetch'
import { apiUrlStringBuilder } from '../utilities/apiUrlStringBuilder'
export const SET_API_LIST = 'SET_API_LIST'

export const fetchApis = () => {
  return function(dispatch) {
    var url = apiUrlStringBuilder() + '/api/v1/apis'

    return fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(json => dispatch({type: SET_API_LIST,api_list: json}))
  }
}