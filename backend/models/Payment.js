import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Payment extends Model {}

Payment.init(
  {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields as necessary
  },
  {
    sequelize,
    modelName: 'Payment',
  }
);

export default Payment;
