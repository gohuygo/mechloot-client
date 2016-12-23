import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar.js'

const RADIX = 10

class ProductShow extends React.Component {
  constructor() {
    super()
    this.state = { currentProduct: null }
  }

  // Instead of iterating, maybe actually fetch data from server
  componentWillMount() {
    const productId = parseInt(this.props.params.productId, RADIX)
    const productList = this.props.productList
    productList.map(product => {
      if(product.id === productId){
        this.setState({currentProduct: product})
      }
    })
  }

  render() {
    const currentProduct = this.state.currentProduct
    return(
      <div>
        <Navbar brand='FRACTAL'/>

        <div className='col-lg-4 col-md-6 col-sm-12 product-container'>
          {currentProduct.name}
        </div>
      </div>
    )
  }
}

ProductShow.propTypes = {
  currentProduct : PropTypes.object,
  productList : PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList
  }
}

const visibleProductShow = connect(
  mapStateToProps
)(ProductShow)

export default visibleProductShow
