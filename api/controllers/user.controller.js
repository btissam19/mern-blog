import User from "../models/User.model.js";
import errorHandler from "../utils/errorHandler.js"
import bcrypt from 'bcrypt'
export const singUp=async(req,res,next)=>{
     const user={username:req.body.username,email:req.body.email,password:req.body.password}
     if(!user.username||!user.password ||!user.email || user.username===""||user.email===""||user.password===""){
        next(errorHandler("400","you must provide all fileds "))
    }
    else {
        const newuser =new User({
            username:user.username,
            email:user.email,
            password:bcrypt.hashSync(user.password , 10)
        })
         try {
            await newuser.save()
            res.status(200).json({message:"singup succsusfully "})
            
         } catch (error) {
            res.status(500).json({ message: error.message });
            next(error)
         }
    }
}

