const mainn = ReactDOM.createRoot(document.getElementById("root"))

function Header(){
    return (
        <div>
            <h1>Welcome to my site!</h1>
        </div>
    )
}
function Main(){
    return (
        <div>
            <p>this is a small react site... soooo... heres a 5090</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUthIhWyIGuKQfT1MJ69uXrm2TjFTtKgPaw&s"></img>
            <br></br>
            <button onClick={() => {
                document.querySelector("p").textContent = "did something change?"
            }}>click me to change the text</button>
            <br></br>
        </div>
    )
}

function Footer(){
    return (
        <div>
            <div id="1">
                <div id="2">
                    <div id="3">
                        
                    </div>
                </div>
            </div>
            <p>end of site</p>
        </div>
    )
}

function App(){
    return(
        <>
            <Header />
            <Main />
            <Footer />
            
        </>
    )
}

mainn.render(<App />)



