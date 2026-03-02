import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/admin.js'
import authRoutes from './routes/auth.js'
import bookingRoutes from './routes/booking.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'CleanFold API is running!' });
});

// API Routes 
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/bookings', bookingRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

console.log(process.env.SUPABASE_URL)
console.log(process.env.SUPABASE_KEY)