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
        const appointments = await Appointment.findAll();
        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
