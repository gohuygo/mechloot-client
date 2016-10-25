// describe('PENDING::Action::Subscriptions', () => {
//   it('pending to do', () => {
//     expect(true).toEqual(true)
//   })
// })
import { setSubscribed } from '../actions/subscriptions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/subscriptions'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

describe('Action::Subscriptions', () => {
  describe('#setSubscribed()', () => {
    // describe('when fetch returns result 200', () => {
    //   beforeEach(() => {
    //     fetchMock.get('https://api.github.com/users/1/repos', { status: 200 })
    //   })

    //   afterEach(() =>{
    //     fetchMock.restore()
    //   })

    //   describe('when subscribed is true', () => {
    //     it('returns SET_SUBSCRIBED type and subscribed true', () => {
    //       const subscribed = { type: 'SET_SUBSCRIBED', subscribed: true }
    //       const store = mockStore({})

    //       store.dispatch(subscribed)

    //       const actions = store.getActions()

    //       expect(actions).toEqual([subscribed])
    //     })
    //   })

    //   describe('when subscribed is false', () => {
    //     it('returns SET_SUBSCRIBED type and subscribed false', () => {
    //       const subscribed = { type: 'SET_SUBSCRIBED', subscribed: false }
    //       const store = mockStore({})

    //       store.dispatch(subscribed)

    //       const actions = store.getActions()

    //       expect(actions).toEqual([subscribed])
    //     })
    //   })

    //   describe('when subscribed is undefined', () => {
    //     it('returns SET_SUBSCRIBED type and subscribed false', () => {
    //       const subscribed = { type: 'SET_SUBSCRIBED', subscribed: undefined }
    //       const store = mockStore({})

    //       store.dispatch(subscribed)

    //       const actions = store.getActions()

    //       expect(actions).toEqual([subscribed])
    //     })
    //   })
    // })

    describe('when fetch does not return 200', () => {
      beforeEach(() =>{
        fetchMock.get('http://www.example.com', {status: 200});
      })

      afterEach(() =>{
        fetchMock.restore();
      })

      describe('when subscribed is true', () => {
        it('does nothing', () => {
          const subscribed = { type: 'SET_SUBSCRIBED', subscribed: true }
          const store = mockStore({subscribed: false})

          store.dispatch(subscribed)
          const actions = store.getActions()

          expect(actions).toEqual([])
        })
      })
    })

  })
})
