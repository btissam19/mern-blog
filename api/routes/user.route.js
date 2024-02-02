import express from 'express'
const router=express.Router();
import { singUp ,signin } from '../controllers/user.controller.js';

router.post('/singup',singUp)
router.post('/signin',signin)

export default router
