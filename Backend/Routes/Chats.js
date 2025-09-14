import express from "express";
import Thread from "../Models/Thread.js"

const router = express.Router()

router.post("/test",async (req,res)=>{
    try{
        const new_thread = new  Thread({
            threadId : "uuid122",
            title : "testing title-2"
        })

        const data = await new_thread.save()
        console.log(data)
        res.send(data)
    }
    catch(err){
        console.log(`Error while Inserion of data : ${err}`)
        res.status(500).json({error: "Failed to save in DB"});
    }
})


// thread list get route
router.get("/thread",async (req,res)=>{
    try{
        const thread = await Thread.find({}).sort({updatedAt:-1})  // it gives the threads in  decending order (-1 represents dece order)
        res.send(thread)
        console.log(thread)
    }
    catch(err){
        res.status(500).json({error :"Failed to fetch threads"})
    }

})

router.get("thread/:threadId",async(req,res)=>{
    let {threadId} = req.params;

    try{

        const thread = await Thread.findById({threadId})

        if(!thread){
            res.status(404).json({error :"Thread not found"})
        }

        res.json(thread.messages);
    }
    catch(err){
        res.status(500).json({error :"Failed to fetch messages"})
    }
})


router.delete("thread/:threadId",async(req,res)=>{
    let {threadId} = req.params;

    try{

        const thread = await Thread.findByIdAndDelete({threadId})

        if(!thread){
            res.status(404).json({error :"Thread not found"})
        }

        res.status(200).json("Thread deleted successfully")
        
    }
    catch(err){
        res.status(500).json({error :"Failed to fetch thread (delete route)"})
    }
})




export default router;