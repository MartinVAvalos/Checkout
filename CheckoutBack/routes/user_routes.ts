import { Router } from 'express'
const router = Router();
import { getUsers, addUser, deleteUser } from '../controllers/user_controllers'

// getUsers
router.get('/', getUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);

export default router