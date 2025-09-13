import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const port=8080;

const app =  express();

app.use(express.json())
app.use(cors())


app.listen(port,()=>{
  console.log(`Server is listening on port : ${port}`)
})

app.get("/",(req,res)=>{
  res.send("hello")
})

