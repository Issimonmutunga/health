import express from "express";
import { protect, authorize } from "../middleware/authMiddleware.js";
import { createAppointment, getAppointments } from "../controllers/appointmentController.js";

const router = express.Router();

// Create a new appointment (Only patients)
router.post("/", protect, authorize("patient"), createAppointment);

// Get all appointments (Only doctors)
router.get("/", protect, authorize("doctor"), getAppointments);

export default router;
