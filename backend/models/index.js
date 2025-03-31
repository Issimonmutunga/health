import sequelize from "../config/db.js";
import User from "./User.js";
import Appointment from "./Appointment.js";
import MedicalRecord from "./MedicalRecord.js";
import Payment from "./Payment.js";
import Prescription from "./Prescription.js"


// Relationships
User.hasMany(Appointment, { foreignKey: "patientId", as: "appointments"});
User.hasMany(Appointment, { foreignKey: "doctorId", as: "doctorAppointments"});

User.hasMany(MedicalRecord, { foreignKey: "patientId", as: "medicalRecords"});

User.hasMany(Payment, {foreignKey: "patientId", as: "payments"});

User.hasMany(Prescription, { foreignKey: "doctorId", as: "prescription"});
User.hasMany(Prescription, { foreignKey: "patientId", as:"patientPrescriptions"});

sequelize.sync()
    .then(() => console.log("Database synced successfully"))
    .catch(err => console.error("Error syncing database: ", err));



export{ sequelize, User , Appointment, MedicalRecord, Payment, Prescription};