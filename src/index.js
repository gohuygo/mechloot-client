import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Router, Route, browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import ProductShow from './components/ProductShow'


ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />

      <Route path='products' component={ProductShow}>
        <Route path='/product/:productId' component={ProductShow}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
