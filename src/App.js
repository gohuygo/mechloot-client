import React, { PropTypes } from 'react'
import Navbar from './components/Navbar.js'
import ProductList from './components/ProductList.js'
import CoverImage from './components/CoverImage.js'
import CssDebugger from './utils/CssDebugger.js'
import './App.css';
import './styles/CustomPaddings.css'
import { connect } from 'react-redux'
import { loginError, receiveLogin } from './actions/authentications'
import AuthService from './utils/AuthService'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.props.checkLogin()
  }

  render() {
    return(
      <div>
        <Navbar brand='FRACTAL'/>
        <CoverImage />
        <ProductList />
        <CssDebugger />
      </div>
    )
  }
}

App.propTypes = {
  checkLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => {
      const authService = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN)

      authService.lock.on('authenticated', (authResult) => {
        authService.lock.getProfile(authResult.idToken, (error, profile) => {
          if (error) {
            return dispatch(loginError(error))
          }
          authService.setToken(authResult.idToken)
          return dispatch(receiveLogin(authResult.idToken))
        })
      })

      authService.lock.on('authorization_error', (error) => dispatch(loginError(error)))
    }
  }
}

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App)

export default AppContainer
