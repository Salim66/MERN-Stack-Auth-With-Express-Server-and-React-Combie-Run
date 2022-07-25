import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';



// init router
const router = express.Router();


// route
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getSingleUser).put(updateUser).patch(updateUser).delete(deleteUser);


// Export default router
export default router;