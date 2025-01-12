import { useContext } from "react";
import ProductsContext from "../context/ProductsContext/ProductsContext";

const useProducts = () => {
    const context = useContext(ProductsContext);

    if(!context){
        console.error("useProducts must be used within a ProductProvider")
    }

    return context;
}

export default useProducts;