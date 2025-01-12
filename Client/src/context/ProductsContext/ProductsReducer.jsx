const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "Load_Products": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "Add_Product": {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case "Edit_Product": {
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId
            ? action.payload.product
            : product
        ),
      };
    }
    case "Delete_Product": {
      return {
        ...state,
        products: state.products.filter(
          product => product._id !== action.payload.productId
        ),
      };
    }
    default:
      return state;
  }
};

export default ProductsReducer;
