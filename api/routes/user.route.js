import express from 'express'
const router=express.Router();
import { singUp } from '../controllers/user.controller.js';

// router.get('/singup',"hello)
router.post('/singup',singUp)

export default router
