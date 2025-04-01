import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createAppointment, getAppointments } from "../controllers/appointmentController.js";

const router = express.Router();

// Create a new appointment (Only authenticated users)
router.post("/", protect, createAppointment);

// Get all appointments (Only authenticated users)
router.get("/", protect, getAppointments);

export default router;
