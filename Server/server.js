import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { Product } from "./models/product.model.js";
import dotenv from 'dotenv';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.post("/api/products", async (req, res) => {
  const product = req.body;
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.put("/api/products", async (req, res) => {
  const { id } = req?.query;
  const product = req?.body;  

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.delete("/api/products", async (req, res) => {
  const { id } = req?.query;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

if(process.env.NODE_ENV == "production"){
  console.log("Entering Loop")
  app.use(express.static(path.join(__dirname, "/Client/dist")));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Client', 'dist', 'index.html'))
  })
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server Initiated in http://localhost:5000");
});
