import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain)
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult){
    this.setToken(authResult.idToken)
    browserHistory.replace('/dashboard')

  }

  login() {
    this.lock.show()
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  logout(){
    localStorage.removeItem('id_token');
  }
}
