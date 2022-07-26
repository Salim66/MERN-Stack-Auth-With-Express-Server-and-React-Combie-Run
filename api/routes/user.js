import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';



// init router
const router = express.Router();


// route
router.route('/').get(authMiddleware, getAllUser).post(authMiddleware, createUser);
router.route('/:id').get(authMiddleware, getSingleUser).put(authMiddleware, updateUser).patch(authMiddleware, updateUser).delete(authMiddleware, deleteUser);

// Auth Route
router.post('/login', userLogin);
router.post('/register', userRegister);


// Export default router
export default router;