import "./ProductForm.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import useProducts from "../../hooks/useProducts";
// import { addNewProduct, updateProduct } from "../../services/ProductsServices";
import useProductsStore from "../../store/useProductsStore";

const productSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Please Provide Product Name",
    })
    .max(20),
  price: z.union([
    z.string().min(1, { message: "Please Provide Price For this Product" }),
    z.number(),
  ]),
  image: z
    .string()
    .min(20, {
      message: "Please Provide Image Url For this Product",
    })
    .max(500),
});

const ProductForm = ({ initialValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...initialValues,
    },
  });

  const { addProduct, editProduct } = useProductsStore();
  // const { addProduct, editProduct } = useProducts();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      if (initialValues?._id) {
        const response = editProduct(initialValues?._id, values);
        if (response) {
          navigate("/");
        } else {
          window.alert("Something Went wrong");
        }
        // if (response.success) {
        //   // editProduct(values, initialValues?._id);
        //   navigate("/");
        // }
      } else {
        const response = await addProduct(values);

        if (response) {
          // addProduct(response.data);
          navigate("/");
        } else {
          window.alert("Something Went wrong");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form className="form-container">
        <div>
          <input
            className={`form-input${errors?.name ? " input-error" : ""}`}
            {...register("name")}
            placeholder="Product Name"
          />
          {errors?.name && (
            <span className="form-span" style={{ display: "block" }}>
              *{errors?.name?.message}
            </span>
          )}
        </div>
        <div>
          <input
            className={`form-input${errors?.price ? " input-error" : ""}`}
            {...register("price")}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            placeholder="Product's Price"
          />
          {errors?.price && (
            <span className="form-span" style={{ display: "block" }}>
              *{errors?.price?.message}
            </span>
          )}
        </div>
        <div>
          <input
            className={`form-input${errors?.image ? " input-error" : ""}`}
            {...register("image")}
            placeholder="Product's Image Url"
          />
          {errors?.image && (
            <span className="form-span" style={{ display: "block" }}>
              *{errors?.image?.message}
            </span>
          )}
        </div>
        <button className="form-button" onClick={handleSubmit(onSubmit)}>
          {initialValues?._id ? "Update Product" : "Create Product"}
        </button>
      </form>
    </>
  );
};

export default ProductForm;
