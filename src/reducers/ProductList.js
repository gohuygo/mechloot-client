const productList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return action.productList
    default:
      return state
  }
}

export default productList
