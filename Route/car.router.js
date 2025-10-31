import express from "express";
 import { getCarts, getCart, createCart, updateCart, deleteCart } from "../controllers/cart.controller.js";

const router = express.Router();

// 👉 Define basic CRUD routes for cart
 router.get("/carts", getCarts);           // Get all carts
 router.get("/carts/:id", getCart);        // Get single cart
 router.post("/carts", createCart);        // Create new cart
 router.put("/carts/:id", updateCart);     // Update cart items
 router.delete("/carts/:id", deleteCart);  // Delete a cart


 export default router;
