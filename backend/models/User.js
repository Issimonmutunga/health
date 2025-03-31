import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("patient", "doctor"), allowNull: false, defaultValue: "patient" },
    specialty: { type: DataTypes.STRING }, // Only for doctors
    phone: { type: DataTypes.STRING },
}, { timestamps: true });

export default User;
