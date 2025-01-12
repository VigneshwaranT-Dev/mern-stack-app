import { create } from "zustand";
import { addNewProduct, getProducts, removeProduct, updateProduct } from "../services/ProductsServices";

const useProductsStore = create((set) => ({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async () => {
        set({
            loading: true
        })

        try {
            const response = await getProducts();
            set({
                products: response,
                loading: false
            })
        } catch (error) {
            set({
                loading: false,
                error: error.message
            })
        }
    },
    addProduct: async (product) => {
        set({
            loading: true
        })

        try {
            const response = await addNewProduct(product)
            set((state) => ({
                loading: false,
                products: [
                    ...state.products,
                    response.data
                ]
            }))
            return true
        } catch (error) {
            set({
                loading: false,
                error: error.message
            }) 
            return false  
        }
    },
    editProduct: async (productId, product) => {
        set({
            loading: true
        })

        try {
            const response = await updateProduct(productId, product)
            set((state) => ({
                loading: false,
                products: state.products.map(resProduct => resProduct._id === response.data._id ? product : resProduct)
            }))
            if(response.success){
                return true
            } else {
                return false
            }
        } catch (error) {
            set({
                loading: false,
                error: error.message
            })
            return false
        }
    },
    deleteProduct: async (productId) => {
        set({
            loading: true
        })

        try {
            await removeProduct(productId);
            set((state) => ({
                loading: false,
                products: state.products.filter(product => product._id !== productId)
            }))
        } catch (error) {
            set({
                error: error.message,
                loading: false
            })
        }
    }
}));

export default useProductsStore
