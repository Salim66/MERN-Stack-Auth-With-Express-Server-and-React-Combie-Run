import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';



// init router
const router = express.Router();


// route
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getSingleUser).put(updateUser).patch(updateUser).delete(deleteUser);

// Auth Route
router.post('/login', userLogin);
router.post('/register', userRegister);


// Export default router
export default router;