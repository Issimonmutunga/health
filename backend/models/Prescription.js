import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Prescription = sequelize.define("Prescription", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    patientId: { type: DataTypes.UUID, allowNull: false },
    doctorId: { type: DataTypes.UUID, allowNull: false },
    medication: { type: DataTypes.STRING, allowNull: false },
    dosage: { type: DataTypes.STRING, allowNull: false },
    instructions: { type: DataTypes.TEXT }
}, { timestamps: true });

export default Prescription;


