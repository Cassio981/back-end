import { Router } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

// Rota para registrar usuário
router.post('/register', register);

// Rota para login de usuário
router.post('/login', login);

export default router;
