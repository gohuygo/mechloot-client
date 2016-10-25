import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { setSubscribed } from '../actions/subscriptions'

const SubscriptionBanner = ({handleSubmit, subscribed}) => {
  let input
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
      // Look into how this works: ref={(node) => {input = node}}
      <div className='row'>
        <div className='cover-container col-lg-12'>
          <p className='cta-text text-center'><span>Subscribe to get updates on Giveaways and Sales!</span></p>

          <div className='subscription-form-container'>
            <form onSubmit={(e) => handleSubmit(e, input.value)} className='form-inline subscription-form'>
              <input type='text' ref={(node) => {input = node}} placeholder='email' className='form-control'/>
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
  subscribed: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    subscribed: state.subscribed,
    email: state.email
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, email) => {
      e.preventDefault()
      dispatch(setSubscribed(true, email))
    }
  };
};

const visibleSubscriptionBanner = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionBanner)

export default visibleSubscriptionBanner
