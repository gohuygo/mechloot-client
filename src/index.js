import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Router, Route, browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import ProductShow from './components/ProductShow'
import UserDashboard from './components/UserDashboard'

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />

      <Route path='products' component={ProductShow}>
        <Route path='/product/:productId' component={ProductShow}/>
      </Route>

      <Route path='dashboard' component={UserDashboard}>
        <Route path='/dashboard' component={UserDashboard}/>
      </Route>

    </Router>
  </Provider>,

  document.getElementById('root')
)
