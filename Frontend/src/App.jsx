import './App.css'
import  ChatWindow from "./components/ChatWindow.jsx"
import  Sidebar from "./components/Sidebar.jsx"
import  MyContext  from "./MyContext.jsx";


import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function App() {

  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv4());


  const providerValues = {
     prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId
  };


  return (
    <>
    <div className='app'>
      <MyContext.Provider value={providerValues}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </MyContext.Provider>
    </div>
    </>
  )
}

export default App
