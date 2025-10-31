import express from "express";
 import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from "../controllers/order.controller.js";

const router = express.Router();

// 👉 Define routes for order operations
 router.get("/orders", getOrders);             // Get all orders
 router.get("/orders/:id", getOrder);          // Get single order by ID
 router.post("/orders", createOrder);          // Create new order
 router.put("/orders/:id", updateOrder);       // Update order status or info
 router.delete("/orders/:id", deleteOrder);    // Delete or cancel an order

 export default router;
