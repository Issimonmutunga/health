import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class MedicalRecord extends Model {}

MedicalRecord.init(
  {
    diagnosis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treatment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Add other fields as necessary
  },
  {
    sequelize,
    modelName: 'MedicalRecord',
  }
);

export default MedicalRecord;
