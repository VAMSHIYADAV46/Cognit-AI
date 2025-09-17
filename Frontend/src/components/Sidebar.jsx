import "../styles/Sidebar.css"

function Sidebar(){
    return(
        <section>

            <button>
                <img src="./src//assets/black brain logo.svg"></img>
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            

            <ul>
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