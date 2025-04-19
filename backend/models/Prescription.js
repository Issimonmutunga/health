import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Prescription extends Model {}

Prescription.init(
  {
    medication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dosage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields as necessary
  },
  {
    sequelize,
    modelName: 'Prescription',
  }
);

export default Prescription;
