import "./CreateProductPage.css";
import "../PageCommon.css";
import ProductForm from "../../components/ProductForm/ProductForm";

const CreateProductPage = () => {
  return (
    <>
      <div className="form-wrapper">
        <h1 className="title">Create Product</h1>
        <ProductForm />
      </div>
    </>
  );
};

export default CreateProductPage;
