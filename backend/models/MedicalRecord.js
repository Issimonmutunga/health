import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const MedicalRecord = sequelize.define("MedicalRecord", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    patientId: { type: DataTypes.UUID, allowNull: false },
    diagnosis: { type: DataTypes.TEXT },
    treatment: { type: DataTypes.TEXT },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: true });

export default MedicalRecord;
