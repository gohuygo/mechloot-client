import fetch from 'isomorphic-fetch'
import { apiUrlStringBuilder } from '../utilities/apiUrlStringBuilder'
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST'

export const fetchProducts = () => {
  return (dispatch) => {
    var url = apiUrlStringBuilder() + '/api/v1/products'
    // how to catch for errors?
    return fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(json => dispatch({type: SET_PRODUCT_LIST,api_list: json}))
  }
}
