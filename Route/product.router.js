import express from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

// 👉 Define routes for CRUD operations
 router.get("/products", getProducts);          // Get all products
 router.get("/products/:id", getProduct);       // Get single product
 router.post("/products", createProduct);       // Create new product
 router.put("/products/:id", updateProduct);    // Update existing product
 router.delete("/products/:id", deleteProduct); // Delete product

 export default router;
