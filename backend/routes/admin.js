import express from 'express'
import { staffMiddleware } from '../middleware/middleware.js'
import { getAllBookings, getSingleBooking } from '../controllers/adminController.js'

const router = express.Router();

router.get('/bookings', staffMiddleware, getAllBookings)
router.get('/bookings/:id', staffMiddleware, getSingleBooking)

export default router;
