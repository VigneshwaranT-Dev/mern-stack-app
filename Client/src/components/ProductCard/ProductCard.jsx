/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data, key, deleteProduct }) => {
  const navigate = useNavigate();
  return (
    <div key={key} className="card-container">
      <div className="image-container">
        <img className="card-image" src={data?.image} alt={data?.name} />
      </div>
      <div className="details-container">
        <h3>{data?.name}</h3>
        <p>₹ {data?.price}</p>
        <div className="card-buttons">
          <button onClick={() => {
            navigate(`/product/edit-product/${data?._id}`)
          }}>Edit</button>
          <button
            onClick={() => {
              deleteProduct(data?._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
