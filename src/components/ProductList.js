import React, { PropTypes } from 'react';
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'
// import fetch from 'isomorphic-fetch'

class ProductList extends React.Component {
  componentDidMount() {
    const dispatch = this.props.dispatch
    dispatch(fetchProducts())
  }

  render() {
    let productList = this.props.productList
    return (
      <div className='row container body-container'>
        {productList.map(product => (
          product.name ?
            <div className='col-lg-4'>
              <p>{product.name}</p>
            </div>
          :
          '')
        )}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList
  }
}

const visibleProductList = connect(
  mapStateToProps
)(ProductList)

export default visibleProductList
