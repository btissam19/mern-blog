import express from 'express'
const router=express.Router();
import { singUp ,signin ,google} from '../controllers/user.controller.js';

router.post('/singup',singUp)
router.post('/signin',signin)
router.post('/google', google)

export default router
