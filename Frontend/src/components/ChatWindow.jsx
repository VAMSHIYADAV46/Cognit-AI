import "../styles/ChatWindow.css"
import Chat from "./Chat";



function ChatWindow(){
    return(
        <div className="chatWindow">
            <div className="navbar">
                <span>SigmaGPT <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv">
                    <span className="userIcon"><i className="fa-solid fa-user"></i></span>
                </div>
            </div>
            
            <Chat></Chat>
            
            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask anything"></input>
                    <div id="submit" ><i className="fa-solid fa-paper-plane"></i></div>
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