/* eslint-disable react/prop-types */
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products, deleteProduct }) => {
  return (
    <div className="card-wrapper">
      {products?.map((product, index) => {
        return (
          <ProductCard
            data={product}
            key={index}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Products;
