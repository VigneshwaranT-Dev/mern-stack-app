import './EditProductPage.css'
import '../PageCommon.css'
import { useParams } from "react-router-dom";
import ProductForm from "../../components/ProductForm/ProductForm";
import useProducts from '../../hooks/useProducts';
import useProductsStore from '../../store/useProductsStore';

const EditProductPage = () => {
  // const { state } = useProducts();
  const {products} = useProductsStore()
  const { id } = useParams();
  
  const data = products.find((x) => x._id === id);

  return (
    <>
      <div className="form-wrapper">
        <h1 className="title">Edit Product</h1>
        { Object.keys(data).length && <ProductForm initialValues={data}/>}
      </div>
    </>
  );
};

export default EditProductPage;
