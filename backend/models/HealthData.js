//Tracking ----
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const HealthData = sequelize.define('HealthData', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  weight: { type: DataTypes.FLOAT },
  bloodPressure: { type: DataTypes.STRING },
  recordedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export default HealthData;
