import './App.css'
import  ChatWindow from "./components/ChatWindow.jsx"
import  Sidebar from "./components/Sidebar.jsx"
import MyContext from './MyContext.jsx'

function App() {
  const providerValues = {};


  return (
    <>
    <div className='app'>
      <MyContext.Provider value={providerValues}>
        <ChatWindow></ChatWindow>
        <Sidebar></Sidebar>
      </MyContext.Provider>
    </div>
    </>
  )
}

export default App
