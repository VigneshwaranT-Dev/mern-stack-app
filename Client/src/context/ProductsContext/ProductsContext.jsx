import { useReducer } from "react";
import { createContext } from "react";
import ProductsReducer from "./ProductsReducer";
import { addProduct, loadProducts, editProduct, deleteProduct } from "./ProductsAction";

const InitialValue = {
    products: []
}

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductsReducer, InitialValue)

    const values = {
        state,
        loadProducts: (products) => dispatch(loadProducts(products)),
        addProduct: (product) =>  dispatch(addProduct(product)),
        editProduct: (product, productId) =>  dispatch(editProduct(product, productId)),
        deleteProduct: (productId) =>  dispatch(deleteProduct(productId))
    }

    return <ProductsContext.Provider value={values}> {children} </ProductsContext.Provider>
}

export default ProductsContext;