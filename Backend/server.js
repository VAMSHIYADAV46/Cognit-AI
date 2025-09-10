import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY, // your Groq API key
});

const response = await client.chat.completions.create({
  model: "deepseek-r1-distill-llama-70b", // Groq’s Llama model
  messages: [
    {
      role: "user",
      content: "give the merge sort code in python without comments with steps in detail",
    },
  ],
});

console.log(response.choices[0].message.content);
