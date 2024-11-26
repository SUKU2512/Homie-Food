import express from "express";
import Signup from "./Models/Signmodel.js";
import mongoose from "mongoose";
import cors from 'cors'


const app = express();
app.use(cors())

app.use(express.json()); 
app.listen(4000,()=>{
  mongoose
  .connect(
    "mongodb+srv://sukanyadevi15:UNtLYk6N8rmDOySS@cluster0.n5wma.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
   console.log("Connected");
  })
  .catch(() => {
    console.log("Disconnected");
  })
})

app.post('/Products',async(req,res)=>{
    try {
        await Signup.create(req.body);
        res.status(200).json("ADDED");
    } catch (error) {
        res.status(500).json({message:error.message});
        console.log(error);
    }
})

app.get("/" , async(req , res) => {
  const posts=await Signup.find({})
  res.send(posts)
})

