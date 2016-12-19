import React, { PropTypes } from 'react';
import { fetchProducts, resetProducts } from '../actions/products'
import { connect } from 'react-redux'
import Product from './Product'
import { Link } from 'react-router'

class ProductList extends React.Component {
  componentDidMount() {
    const dispatch = this.props.dispatch
    dispatch(fetchProducts())
  }

  componentDidUpdate() {
    const dispatch = this.props.dispatch

    if(!this.props.auth.isAuthenticated){
      dispatch(resetProducts())
      return
    }

    if(this.props.productList.length == 0 && this.props.auth.isAuthenticated){
      dispatch(fetchProducts())
    }
  }

  render() {
    const { productList } = this.props

    return (
      <div className='row container body-container'>
        { productList.map(product =>
          <Link key={product.id} to={`/product/${product.id}`}>
            <Product
              key={product.id}
              {...product} />
          </Link>
        )}
      </div>
    )
  }
}

// TODO: Refactor to container/presenter
ProductList.propTypes = {
  productList: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    auth: state.auth
  }
}

const visibleProductList = connect(
  mapStateToProps
)(ProductList)

export default visibleProductList
