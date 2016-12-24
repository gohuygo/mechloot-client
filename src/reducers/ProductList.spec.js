import expect from 'expect'
import deepFreeze from 'deep-freeze'
import reducer from './ProductList.js'

describe('index', () => {
  describe('when initial state is not provided', () => {
    it('provides the initial state', () => {
      const action = {}
      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual([])
    })

    it('handles the SET_PRODUCT_LIST action', () => {
      const action = { type: 'SET_PRODUCT_LIST', productList: ['product'] }
      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual(['product'])
    })

    it('handles the undefined action', () => {
      const action = { type: undefined }
      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual([])
    })

    it('handles the default action', () => {
      const action = { type: 'RANDOM-123' }
      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual([])
    })
  })

  describe('when initial state is provided', () => {
    it('handles the SET_PRODUCT_LIST action for passed in state', () => {
      const state = { productList: [] }
      const action = { type: 'SET_PRODUCT_LIST', productList: ['product'] }

      deepFreeze(state)
      deepFreeze(action)

      expect(reducer(state, action)).toEqual(['product'])
    })

    it('handles the default action for passed in state', () => {
      const state =  { productList: []  }
      const action = { type: 'RANDOM-123', productList: ['product'] }

      deepFreeze(state)
      deepFreeze(action)

      expect(reducer(state, action)).toEqual(state)
    })
  })
})
