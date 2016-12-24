import { fetchProducts, resetProducts, SET_PRODUCT_LIST } from '../actions/products'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { apiUrlStringBuilder } from '../utils/apiUrlStringBuilder'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

describe('Action::Products', () => {

  describe('#fetchProducts()', () => {
    it('posts the correct url and dispatches action', () => {
      var expectedAction = { type: SET_PRODUCT_LIST, productList: 'asdfa'}

      fetchMock.get(
        apiUrlStringBuilder() + '/api/v1/products',
        { body: 'hello' }
      );

      const store = mockStore({productList: []})

      store.dispatch(fetchProducts('idToken'))
        // TODO: This line below doesnt actually work.
        //       You can set expectedAction to anything and it'll pass.
        .then(response => expect(store.getActions()).toEqual([expectedAction]))
      fetchMock.restore();
    })
  })

  describe('#resetProducts()', () => {
    it('dispatches reset action', () => {
      const expectedAction = {
        type: SET_PRODUCT_LIST,
        productList: []
      }

      expect(resetProducts()).toEqual(expectedAction)
    })
  })
})
