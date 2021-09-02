import { Router } from 'express'
const router = Router();
import { getUsers, addUser, updateUser, deleteUser } from '../controllers/user_controllers'

// getUsers
router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router