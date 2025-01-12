import { useEffect } from "react";
import "./HomePage.css";
import Products from "../../components/Products/Products";
import useProductsStore from "../../store/useProductsStore";
// import { useEffect, useState } from "react";
// import useProducts from "../../hooks/useProducts";
// import { getProducts, removeProduct } from "../../services/ProductsServices";

const HomePage = () => {
  // const [loading, setLoading] = useState(true);
  // const {state, loadProducts, deleteProduct} = useProducts();
  const { products, fetchProducts, deleteProduct, loading, error } = useProductsStore()

  const fetchProduct = async () => {
    // setLoading(true);
    // const products = await getProducts();
    // loadProducts(products);
    // setLoading(false);
    await fetchProducts();
  };

  const RemoveProduct = async (id) => {
    // const response = await removeProduct(id)

    // if(response.success) {
    //   deleteProduct(id)
    // }

    await deleteProduct(id)
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div>
        {loading && (
          <>
            <h3>Loading...</h3>
          </>
        )}
        {error && (
          <>
            <h3>Something Went Wrong</h3>
          </>
        )}
        {/* <Products products={state.products} deleteProduct={RemoveProduct}/> */}
        <Products products={products} deleteProduct={RemoveProduct}/>
      </div>
    </>
  );
};

export default HomePage;
