import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Appointment = sequelize.define("Appointment", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    patientId: { type: DataTypes.UUID, allowNull: false },
    doctorId: { type: DataTypes.UUID, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.ENUM("pending", "confirmed", "completed", "canceled"), defaultValue: "pending" }
}, { timestamps: true });

export default Appointment;
