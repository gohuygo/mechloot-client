import expect from 'expect'
import deepFreeze from 'deep-freeze'
import reducer from './index.js'

describe('reducer', () => {
  describe('when initial state is not provided', () => {
    it('provides the initial state', () => {
      const action = {}

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: false })
    })

    it('handles the SET_SUBSCRIBED action', () => {
      const action = { type: 'SET_SUBSCRIBED' }

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: true })
    })

    it('handles the undefined action', () => {
      const action = { type: undefined }

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: false })
    })

    it('handles the default action', () => {
      const action = { type: 'RANDOM-123' }

      deepFreeze(action)

      expect(reducer(undefined, action)).toEqual({ subscribed: false })
    })
  })

  describe('when initial state is provided', () => {
    describe('when subscribed state is true', () => {
      it('handles the SET_SUBSCRIBED action for passed in state', () => {
        const state = { subscribed: true }
        const action = { type: 'SET_SUBSCRIBED' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: true })
      })

      it('handles the default action for passed in state', () => {
        const state =  { subscribed: true }
        const action = { type: 'RANDOM-123' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: true })
      })
    })

    describe('when subscribed state is false', () => {
      it('handles the SET_SUBSCRIBED action for passed in state', () => {
        const state = { subscribed: false }
        const action = { type: 'SET_SUBSCRIBED' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: true })
      })

      it('handles the default action for passed in state', () => {
        const state = { subscribed: false }
        const action = { type: 'RANDOM-123' }

        deepFreeze(state)
        deepFreeze(action)

        expect(reducer(state, action)).toEqual({ subscribed: false })
      })
    })
  })
})
