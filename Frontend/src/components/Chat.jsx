import "../styles/Chat.css"
import React, { useContext, useState, useEffect } from "react";
import  MyContext  from "../MyContext";
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";

function Chat(){
    const {newChat, prevChats, reply} = useContext(MyContext);

    return (
        <>
            {newChat && <h1>Let’s Chat! What’s up today?</h1>}
            


             <div className="chats">
                {
                    prevChats?.map((chat, idx) => 
                        <div className={chat.role === "user"? "userDiv" : "gptDiv"} key={idx}>
                            {
                                chat.role === "user"? 
                                <p className="userMessage">{chat.content}</p> : 
                                // <p className="gptMessage">{chat.content}</p> 
                                <Markdown  rehypePlugins={rehypeHighlight}>{chat.content}</Markdown>
                                
                            }
                        </div>
                    )
                }
             </div>
        </>
    )
}

export default Chat




