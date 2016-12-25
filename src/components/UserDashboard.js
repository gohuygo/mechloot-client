import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar.js'

class UserDashboard extends React.Component {

  render() {
    return(
      <div>
        <Navbar brand='FRACTAL'/>
        <div className='row container body-container'>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            "Hello Artist LOL"
          </div>
        </div>
      </div>
    )
  }
}

export default UserDashboard
