import fetch from 'isomorphic-fetch'

export const SET_SUBSCRIBED = 'SET_SUBSCRIBED'

export const setSubscribed = (subscribed, email) => {
  return function(dispatch) {
    var url = process.env.REACT_APP_HOST + ':' + process.env.REACT_APP_PORT
              + '/api/v1/subscriptions?email=' + email

    return fetch(url, { method: 'post' })
      .then(function(result) {
        if (result.status === 200) {
          dispatch({
            type: SET_SUBSCRIBED,
            subscribed: subscribed
          })
          return 'result'
        }
        return 'failed' //todo
      }, function(error) {
        console.log(error)
      })
  }
}
