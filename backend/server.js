import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import './models/index.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';

dotenv.config();
const app = express();

// Configuration
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.use("/api/appointments", appointmentRoutes);

app.use(`/api`, healthRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Database synchronization with safe migration handling
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully');

    if (NODE_ENV === 'development') {
      // Safer sync options for development
      await sequelize.sync({
        alter: {
          drop: false, // Prevent dropping columns
          add: true    // Only add new columns
        },
        logging: console.log
      });
      console.log('Database schema synchronized (safe mode)');
    } else {
      console.log('Running in production - no automatic schema changes');
      // In production, you should use migrations instead
      // await sequelize.sync();
    }
  } catch (error) {
    console.error('Database synchronization error:', error);
    throw error; // Re-throw to handle in startServer
  }
};

// Server startup
const startServer = async () => {
  try {
    await syncDatabase();
    
    app.listen(PORT, () => {
      console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    
    // Handle specific error for Users.role column
    if (error.original && error.original.code === '23502' && error.original.column === 'role') {
      console.error('\nSOLUTION REQUIRED:');
      console.error('The Users table already contains data but needs a "role" column with NOT NULL constraint.');
      console.error('You need to either:');
      console.error('1. Add a default value to the role column in your User model');
      console.error('2. Manually migrate existing data to include role values');
      console.error('3. Temporarily allow NULL values during migration');
    }
    
    process.exit(1);
  }
};

// Start the application
startServer();