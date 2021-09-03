import { Router } from 'express'
const router = Router();
import { getAllUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/user_controllers'

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router