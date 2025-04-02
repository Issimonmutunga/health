import Appointment from "../models/Appointment.js";

// Create a new appointment
export const createAppointment = async (req, res) => {
    try {
        const { doctorId, patientId, date, time } = req.body;

        if (!doctorId || !patientId || !date || !time) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const appointment = await Appointment.create({
            doctorId,
            patientId,
            date,
            time
        });

        res.status(201).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get all appointments for a user
export const getAppointments = async (req, res) => {
    try {
        const { userId, role } = req.query;

        let whereClause = {};
        if (role === "doctor") whereClause.doctorId = userId;
        if (role === "patient") whereClause.patientId = userId;

        const appointments = await Appointment.findAll({ where: whereClause });

        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const cancelAppointment = async (req, res) => {
    try {
        const { id } = req.params;

        const appointment = await Appointment.findByPk(id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        await appointment.destroy();
        res.json({ message: "Appointment canceled successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

