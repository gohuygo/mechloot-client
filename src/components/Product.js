import React, { PropTypes } from 'react'

class Product extends React.Component {
  render() {
    const product = this.props

    return(
      <div className='col-lg-4 product-container'>
        <a href={product.product_url} target='_blank'>
          <img role="presentation" src={product.image_url} className='product-image'></img>
          <p>{product.name}</p>
          <p className='product-description hide-overflow'>{product.description}</p>
        </a>
      </div>
    )
  }
}

Product.propTypes = {
  product : PropTypes.object
}

export default Product
