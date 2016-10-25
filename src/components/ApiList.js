import React, { PropTypes } from 'react';
import { fetchApis } from '../actions/apis'
import { connect } from 'react-redux'
// import fetch from 'isomorphic-fetch'

class ApiList extends React.Component {
  componentDidMount() {
    const dispatch = this.props.dispatch
    dispatch(fetchApis())
  }

  render() {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          Hello world
        </div>
      </div>
    );
  }
}

ApiList.propTypes = {
  apiList: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    apiList: state.apiList
  }
}

const visibleApiList = connect(
  mapStateToProps
)(ApiList)

export default visibleApiList
