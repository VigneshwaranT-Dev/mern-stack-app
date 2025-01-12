export const loadProducts = (products) => {
    return {
        type: 'Load_Products',
        payload: products
    }
}

export const addProduct = (product) => {
    return {
        type: 'Add_Product',
        payload: product
    }
}

export const editProduct = (product, productId) => {
    return {
        type: 'Edit_Product',
        payload: {
            product: product,
            productId: productId
        }
    }
}

export const deleteProduct = (productId) => {
    return {
        type: 'Delete_Product',
        payload: {
            productId
        }
    }
}