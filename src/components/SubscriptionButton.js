import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { postSubscribed } from '../actions/subscriptions'
import Modal from 'react-modal'

class SubscriptionButton extends React.Component {
  constructor () {
    super()
    this.state = {modalIsOpen: false}
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

    const customStyles = {
      overlay : {
        backgroundColor   : 'rgba(255, 255, 255, 0.75)'
      },
      content : {
        top                        : '90px',
        left                       : '200px',
        right                      : '200px',
        bottom                     : '90px',
      }
    }

    return (
      //TODO: Refactor to SubscribeForm component
      // Look into how this works: ref={(node) => {input = node}}

      <span>
        <span className='subscribe-button' onClick={this.openModal}>SUBSCRIBE</span>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}>

          <button onClick={this.closeModal}>close</button>

          <p className='subscribe-text text-center'><span>Subscribe to get updates on Giveaways and Sales!</span></p>
          <div className='subscription-form-container'>
            <form onSubmit={(e) => handleSubmit(e, emailInput.value, this.closeModal)} className='form-inline subscription-form'>
              <input type='text' ref={(node) => {emailInput = node}} placeholder='email' className='form-control'/>
              <input type="submit" name="commit" className='btn btn-default'/>
            </form>
          </div>

        </Modal>

      </span>
    )
  }
}

SubscriptionButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, email, closeModal) => {
      e.preventDefault()

      dispatch(postSubscribed(email))
      closeModal()
    }
  };
};

const visibleSubscriptionButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionButton)

export default visibleSubscriptionButton
