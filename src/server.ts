import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
