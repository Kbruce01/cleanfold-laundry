import express from 'express';
import { authMiddleware } from '../middleware/middleware.js';
import { bookings } from '../controllers/bookingController.js'

const router = express.Router();

router.post('/booking', authMiddleware, bookings)

export default router;
