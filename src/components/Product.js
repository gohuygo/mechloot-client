import React, { PropTypes } from 'react'

class Product extends React.Component {
  render() {
    const product = this.props

    return(
      <div className='col-lg-4 col-md-6 col-sm-12 product-container'>
        <a href={product.product_url} target='_blank'>
          <div className='product-image-container'>
            <img role="presentation" src={product.image_url} className='product-image'></img>
          </div>
          <div className='product-text-info-container'>
            <p className='custom-bolded padding-top-15'>{product.name}</p>
            <p className='product-description hide-overflow'>{product.description}</p>
          </div>
        </a>
      </div>
    )
  }
}

Product.propTypes = {
  product : PropTypes.object
}

export default Product
