// API routes
import express from "express";
import { check } from "express-validator";
import { register, login, getProfile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register Route
router.post("/register", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    check("role", "Role must either be a patient or doctor").isIn(["patient", "doctor"])
], register);

// Login Route
router.post("/login", [
    check("email", "Enter a valid email").isEmail(),
    check("password", "Password is required").exists()
], login);

// Get User Profile (Protected)
router.get("/profile", protect, getProfile);

export default router;
