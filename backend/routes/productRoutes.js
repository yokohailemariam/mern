import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js ";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/top", getTopProducts);
router.get("/:id", getProductById);
router.delete("/:id", protect, admin, deleteProduct);
router.post("/", protect, admin, createProduct);
router.post("/:id/reviews", protect, createProductReview);
router.put("/:id", protect, admin, updateProduct);

export default router;
