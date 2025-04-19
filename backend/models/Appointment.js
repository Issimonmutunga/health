import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Appointment extends Model {}

Appointment.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields as necessary
  },
  {
    sequelize,
    modelName: 'Appointment',
  }
);

export default Appointment;
