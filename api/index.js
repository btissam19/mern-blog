import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import userRoute from "./routes/user.route.js"
import error from "./middlewares/error.js"
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import path from 'path';

mongoose.connect(process.env.MONGO)
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use('/api/user',userRoute);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
app.use(error);

app.listen(3000,()=>console.log("app listen in port 3000"))