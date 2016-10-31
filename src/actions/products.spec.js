import { fetchProducts, SET_PRODUCT_LIST } from '../actions/products'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { apiUrlStringBuilder } from '../utilities/apiUrlStringBuilder'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

describe('Action::Products', () => {

  describe('#fetchProducts()', () => {
    it('posts the correct url and dispatches action', () => {
      var expectedAction = { type: SET_PRODUCT_LIST, productList: 'hello'}

      fetchMock.get(
        apiUrlStringBuilder() + '/api/v1/products',
        { body: 'hello' }
      );

      const store = mockStore({productList: []})

      store.dispatch(fetchProducts())
        .then(response => expect(store.getActions()).toEqual([expectedAction]))
      fetchMock.restore();
    })
  })
})
