import "../styles/Sidebar.css"

function Sidebar(){
    return(
        <section className="sidebar">

            <button>
                <img src="./src//assets/black brain logo.svg" className="logo"></img>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
            </button>
            

            <ul className="history">
                <li>sample 1</li>
                <li>sample 2</li>
                <li>sample 3</li>
            </ul>

            <div className="sign in">
                <p>CognitAI  &trade;</p>
            </div>

        </section>
    )
}

export default Sidebar