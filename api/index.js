import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import userRoute from "./routes/user.route.js"
import error from "./middlewares/error.js"

mongoose.connect(process.env.MONGO)
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))

const app = express();
app.use(express.json());


app.use('/api/user',userRoute);
app.use(error);

app.listen(3000,()=>console.log("app listen in port 3000"))