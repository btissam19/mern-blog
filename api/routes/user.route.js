import express from 'express'
const router=express.Router();
import { singUp ,signin ,google ,updateUser,deleteUser,signout} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
router.post('/singup',singUp)
router.post('/signin',signin)
router.post('/google', google)
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.post('/signout', signout);
export default router
