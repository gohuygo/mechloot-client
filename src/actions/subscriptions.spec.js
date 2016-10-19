import { setSubscribed } from '../actions/subscriptions';

describe('Action::Subscriptions', () => {
  describe('#setSubscribed()', () => {
    describe('when subscribed is true', () => {
      it('returns SET_SUBSCRIBED type and subscribed true', () => {
        expect(setSubscribed(true)).toEqual({type: 'SET_SUBSCRIBED', subscribed: true})
      });
    });

    describe('when subscribed is false', () => {
      it('returns SET_SUBSCRIBED type and subscribed false', () => {
        expect(setSubscribed(false)).toEqual({type: 'SET_SUBSCRIBED', subscribed: false})
      });
    });

    describe('when subscribed is undefined', () => {
      it('returns SET_SUBSCRIBED type and subscribed undefined', () => {
        expect(setSubscribed(undefined)).toEqual({type: 'SET_SUBSCRIBED', subscribed: undefined})
      });
    });
  });
});