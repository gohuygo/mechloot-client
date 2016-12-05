import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { postEmail } from '../actions/subscriptions'
import Modal from 'react-modal'

class Subscription extends React.Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { handleSubmit } = this.props
    let emailInput

    return (
      //TODO: Refactor to SubscribeForm component
      // Look into how this works: ref={(node) => {input = node}}

      <span>
        <span className='subscribe-button default-flashy-button' onClick={this.openModal}>SUBSCRIBE</span>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel='Subscribe Modal'
          className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body'>
              <i className='glyphicon glyphicon-remove mouse-cursor close' onClick={this.closeModal}></i>
              <p className='subscribe-text text-center'><span>Subscribe to get the latest news and updates on your favorite podcasts.</span></p>
              <div className='subscription-form-container'>
                <form onSubmit={(e) => handleSubmit(e, emailInput.value, this.closeModal)} className='form-inline subscription-form'>
                  <input type='text' ref={(node) => {emailInput = node}} placeholder='email' className='form-control'/>
                  <input type="submit" name="commit" className='btn default-flashy-button'/>
                </form>
              </div>
            </div>
          </div>
        </Modal>

      </span>
    )
  }
}

Subscription.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, email, closeModal) => {
      e.preventDefault()

      dispatch(postEmail(email))
      closeModal()
    }
  }
}

const visibleSubscription = connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscription)

export default visibleSubscription
