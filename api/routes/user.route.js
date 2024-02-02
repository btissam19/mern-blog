import express from 'express'
const router=express.Router();
import { singUp ,signin } from '../controllers/user.controller.js';


// router.get('/singup',"hello)
router.post('/singup',singUp)
router.post('/singin',signin)

export default router
