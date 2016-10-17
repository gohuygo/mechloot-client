import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { setSubscribed } from '../actions'

const SubscriptionBanner = ({handleSubmit, subscribed}) => {
  if(subscribed){
    return <div>Thank you</div> //TODO: Refactor as generic BannerMessage component
  }else{
    return (
      //TODO: Refactor to SubscribeForm component
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className='subscription-form'>
          <input type='text' placeholder='email' />
          <input type="submit" name="commit" />
        </form>
      </div>
    )
  }
}

SubscriptionBanner.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  subscribed: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    subscribed: state.subscribed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault()
      dispatch(setSubscribed(true))
      // TODO: persist to DB with API call
    }
  };
};

const visibleSubscriptionBanner = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionBanner)

export default visibleSubscriptionBanner;
