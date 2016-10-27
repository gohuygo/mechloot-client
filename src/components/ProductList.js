import React, { PropTypes } from 'react';
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'
import Product from './Product'

class ProductList extends React.Component {
  componentDidMount() {
    const dispatch = this.props.dispatch
    dispatch(fetchProducts())
  }

  render() {
    const { productList } = this.props

    return (
      <div className='row container body-container'>
        { productList.map(product =>
          <Product
            key={product.id}
            {...product} />
        )}
      </div>
    );
  }
}

// TODO: Refactor to container/presenter

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
