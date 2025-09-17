import "../styles/ChatWindow.css"
import Chat from "./Chat";
import {SyncLoader} from "react-spinners";

import  MyContext  from "../MyContext.jsx";
import { useContext, useState, useEffect } from "react";




function ChatWindow(){

     const {prompt, setPrompt, reply, setReply, currThreadId, setPrevChats, setNewChat} = useContext(MyContext);
     const [Loading,setLoading] = useState(false)

    const getReply = async () => {

        setLoading(true);
        console.log("message ", prompt, " threadId ", currThreadId);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };

        try {
            const response = await fetch("http://localhost:8080/api/chat", options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    
    return(
        <div className="chatWindow">
            <div className="navbar">
                <span>SigmaGPT <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv">
                    <span className="userIcon"><i className="fa-solid fa-user"></i></span>
                </div>
            </div>
            
            <Chat></Chat>
            <SyncLoader loading={Loading} color="white" ></SyncLoader>
            
            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask anything" 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter'? getReply() : ''} ></input>
                    <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    CognitAI can make mistakes. Check important info.
                </p>
            </div>
            {/* ChatWindow */}
        </div>
    )
}


export default ChatWindow;