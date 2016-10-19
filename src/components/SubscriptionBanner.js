import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { setSubscribed } from '../actions/subscriptions'

const SubscriptionBanner = ({handleSubmit, subscribed}) => {
  if(subscribed){
    return (
     //TODO: Refactor as generic BannerMessage component
      <div className='row'>
        <div className='cover-container col-lg-12'>
          <p className='cta-text thank-you-text text-center'><span>Thank you for subscribing!</span></p>
        </div>
      </div>
    )
  }else{
    return (
      //TODO: Refactor to SubscribeForm component
      <div className='row'>
        <div className='cover-container col-lg-12'>
          <p className='cta-text text-center'><span>Subscribe to get updates on Giveaways and Sales!</span></p>

          <div className='subscription-form-container'>
            <form onSubmit={(e) => handleSubmit(e)} className='form-inline subscription-form'>
              <input type='text' placeholder='email' className='form-control'/>
              <input type="submit" name="commit" className='btn btn-default'/>
            </form>
          </div>
        </div>
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
