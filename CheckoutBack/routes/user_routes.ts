import { Router } from 'express'
const router = Router();
import { getUsers, addUser } from '../controllers/user_controllers'

// getUsers
router.get('/', getUsers);
router.post('/', addUser);

export default router