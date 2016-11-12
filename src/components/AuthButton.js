import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestLogin, requestLogout, receiveLogout } from '../actions/authentications'
import AuthService from '../utils/AuthService'

class AuthButton extends React.Component {
  render() {

    const { isAuthenticated, handleLogin, handleLogout } = this.props

    return (
      <span>
        { isAuthenticated ?
          <span className='login-button default-flashy-button' onClick={handleLogout}>LOGOUT</span>
          :
          <span className='login-button default-flashy-button' onClick={handleLogin}>LOGIN</span>
        }

      </span>
    )
  }
}

AuthButton.propTypes = {
  location: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  const auth = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN)

  return {
    handleLogin: () => {
      auth.login()
      dispatch(requestLogin())
    },
    handleLogout: () => {
      dispatch(requestLogout())
      auth.logout()
      dispatch(receiveLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)
