import { Router } from 'express';
import { register } from '../handlers/users';

const router = Router();

router.post('/register', register);

export default router;
