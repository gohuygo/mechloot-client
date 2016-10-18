export const SET_SUBSCRIBED = 'SET_SUBSCRIBED'

export const setSubscribed = (subscribed) => {
  return {
    type: SET_SUBSCRIBED,
    subscribed: subscribed
  }
}
