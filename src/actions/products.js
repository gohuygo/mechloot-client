import 'isomorphic-fetch'
import { apiUrlStringBuilder } from '../utils/apiUrlStringBuilder'

export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST'

export const fetchProducts = () => {
  return (dispatch) => {
    var url = apiUrlStringBuilder() + '/api/v1/products'
    // how to catch for errors?
    return fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
      },
      method: 'GET',
      // cache: false
    }).then(response => response.json())
      .then(productList => dispatch({ type: SET_PRODUCT_LIST,
                                      productList: productList }))
  }
}
