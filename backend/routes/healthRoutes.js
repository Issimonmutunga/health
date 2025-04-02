// routes/healthRoutes.js
import { Router } from 'express';
import HealthData from '../models/HealthData.js';

const router = Router();

// Add health record
router.post('/health', async (req, res) => {
  try {
    const { userId, weight, bloodPressure } = req.body;
    const healthData = await HealthData.create({ userId, weight, bloodPressure });
    res.status(201).json(healthData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add health record' });
  }
});

// Get health records
router.get('/health/:userId', async (req, res) => {
  try {
    const healthRecords = await HealthData.findAll({ where: { userId: req.params.userId } });
    res.json(healthRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch health records' });
  }
});

// Delete health record
router.delete('/health/:id', async (req, res) => {
  try {
    await HealthData.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Health record deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete record' });
  }
});

export default router;
