import axios from "axios";

const Api_Url = "https://mern-stack-app-h3rj.onrender.com/api/products";

export const getProducts = async () => {
    try {
        const response = await axios.get(Api_Url);
        
        return response.data.success ? response.data.data : console.error('Something Wrong');
    } catch (error) {
        console.error(error.message);
    }
}

export const addNewProduct = async (product) => {
    try {
        const response = await axios.post(Api_Url, {
            ...product,
            price: Number(product.price)
        });

        return response.data.success ? response.data :  console.error('Something Wrong');
    } catch (error) {
        console.error(error.message)
    }
}

export const updateProduct = async (productId, product) => {
    try {
        const response = await axios.put(`${Api_Url}?id=${productId}`, {
            ...product,
            price: Number(product.price)
        })

        return response.data.success ? response.data :  console.error('Something Wrong');
    } catch (error) {
        console.error(error.message);
    }
}

export const removeProduct = async (productId) => {
    try {
        const response = await axios.delete(Api_Url, {
            params: {
                id: productId
            }
        });
        return response.data.success ? response.data :  console.error('Something Wrong');
    } catch (error) {
        console.error(error.message);
    }
}