import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";
import bcrypt from "bcryptjs";

class User extends Model {
  // Define associations here
  static associate(models) {
    User.hasMany(models.Appointment, { foreignKey: "patientId", as: "appointments" });
    User.hasMany(models.Appointment, { foreignKey: "doctorId", as: "doctorAppointments" });
    User.hasMany(models.MedicalRecord, { foreignKey: "patientId", as: "medicalRecords" });
    User.hasMany(models.Payment, { foreignKey: "patientId", as: "payments" });
    User.hasMany(models.Prescription, { foreignKey: "doctorId", as: "prescriptions" });
    User.hasMany(models.Prescription, { foreignKey: "patientId", as: "patientPrescriptions" });
  }

  // Hash password before saving a new user
  static async beforeCreate(user) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  // Compare provided password with stored password
  async comparePassword(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
}

// Initialize the User model
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("patient", "doctor"),
      allowNull: false,
      defaultValue: "patient",
    },
    specialty: {
      type: DataTypes.STRING, // Only for doctors
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true,
  }
);

// Hash password before creating a new user
User.beforeCreate(User.beforeCreate);

export default User;
