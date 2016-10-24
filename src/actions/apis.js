import fetch from 'isomorphic-fetch'

export const SET_API_LIST = 'SET_API_LIST'

export const fetchApis = () => {
  return function(dispatch) {
    var url = process.env.REACT_APP_HOST + ':' + process.env.REACT_APP_PORT
          + '/api/v1/apis'

    return fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(json => dispatch({type: SET_API_LIST,api_list: json}))
  }
}