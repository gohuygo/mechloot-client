import expect from 'expect'
import deepFreeze from 'deep-freeze'
import reducer from './index.js'

describe('reducer', () => {
  describe('when initial state is not provided', () => {
    it('should provide the initial state', () => {
      const action = {}

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: false })
    })

    it('should handle the SET_SUBSCRIBED action', () => {
      const action = { type: 'SET_SUBSCRIBED' }

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: true })
    })

    it('should handle the undefined action', () => {
      const action = { type: undefined }

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: false })
    })

    it('should handle the default action', () => {
      const action = { type: 'RANDOM-123' }

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: false })
    })
  })

  describe('when initial state is provided', () => {
    describe('when subscribed state is true', () => {
      it('should handle the SET_SUBSCRIBED action for passed in state', () => {
        const state = { subscribed: true }
        const action = { type: 'SET_SUBSCRIBED' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: true })
      })

      it('should handle the default action for passed in state', () => {
        const state =  { subscribed: true }
        const action = { type: 'RANDOM-123' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: true })
      })
    })

    describe('when subscribed state is false', () => {
      it('should handle the SET_SUBSCRIBED action for passed in state', () => {
        const state = { subscribed: false }
        const action = { type: 'SET_SUBSCRIBED' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: true })
      })

      it('should handle the default action for passed in state', () => {
        const state = { subscribed: false }
        const action = { type: 'RANDOM-123' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: false })
      })
    })
  })
})
