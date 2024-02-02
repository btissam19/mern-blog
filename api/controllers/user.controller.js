import User from "../models/User.model.js";
import errorHandler from "../utils/errorHandler.js"
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs'
export const singUp=async(req,res,next)=>{
     const user={username:req.body.username,email:req.body.email,password:req.body.password}
     if(!user.username||!user.password ||!user.email || user.username===""||user.email===""||user.password===""){
        next(errorHandler("400","you must provide all fileds "))
    }
    else {
        const newuser =new User({
            username:user.username,
            email:user.email,
            password:bcryptjs.hashSync(user.password , 10)
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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'));
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, 'Invalid information'));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, 'Invalid information'));
      }
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
  
      const { password: pass, ...rest } = validUser._doc;
  
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } catch (error) {
      next(error);
    }
}


export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password, ...rest } = user._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username:
            name.toLowerCase().split(' ').join('') +
            Math.random().toString(9).slice(-4),
          email,
          password: hashedPassword,
          profilePicture: googlePhotoUrl,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const { password, ...rest } = newUser._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
  };

