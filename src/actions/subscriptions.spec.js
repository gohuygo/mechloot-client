import { postEmail } from '../actions/subscriptions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { apiUrlStringBuilder } from '../utilities/apiUrlStringBuilder'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

describe('Action::Subscriptions', () => {

  describe('#postEmail()', () => {
    it('calls the correct url', () => {
      const email = 'test@example.com'

      fetchMock.post(
        apiUrlStringBuilder()+'/api/v1/subscriptions?email='+email,
        { status: 200 }
      );

      const store = mockStore({email: ''})

      store.dispatch(postEmail(email))

      fetchMock.restore();
    })
  })
})
