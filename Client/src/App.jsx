import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import { Providers } from "./context";

const App = () => {
  return (
    <>
      <Header />
      <Providers>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product">
            <Route index element={<Navigate to="create-product" replace />} />
            <Route path="create-product" element={<CreateProductPage />} />
            <Route path="edit-product/:id" element={<EditProductPage />} />
          </Route>
          <Route path="*" element={<p>Page Not Found...</p>} />
        </Routes>
      </Providers>
    </>
  );
};

export default App;
