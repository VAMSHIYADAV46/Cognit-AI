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

app.get("/test",async (req,res)=>{
  
  const options = {
    method : "POST",
    headers : {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    },
    body : JSON.stringify({
      "model": "llama-3.3-70b-versatile",
      "messages": [{
      "role": "user",
      "content": `${req.body.message}`
  }]
})
  }


  try{
   const response = await fetch("https://api.groq.com/openai/v1/chat/completions",options)
   const data = await response.json()
   console.log(data.choices[0].message.content)
   res.send(data.choices[0].message.content)
    
  }
  catch(err){
    console.log(`error while fetching : ${err}`)
  }
})