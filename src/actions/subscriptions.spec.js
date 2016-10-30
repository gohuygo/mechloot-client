import { setSubscribed } from '../actions/subscriptions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/subscriptions'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

describe('Action::Subscriptions', () => {
  describe('#postEmail()', () => {
    describe('when fetch does not return 200', () => {
      beforeEach(() =>{
        fetchMock.get('http://www.example.com', {status: 404});
      })

      afterEach(() =>{
        fetchMock.restore();
      })

      describe('when subscribed is true', () => {
        it('does nothing', () => {
          const postEmail = { type: 'POST_EMAIL', email: 'yo@example.com' }
          const store = mockStore({email: ''})

          store.dispatch(postEmail)
          const actions = store.getActions()

          expect(actions).toEqual([postEmail])
        })
      })
    })

  })
})
