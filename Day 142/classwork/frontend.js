let root = ReactDOM.createRoot(document.getElementById("root"))
function Component(){
    return (
        <div id="main">
            <img id="first" src="illustration-hero.svg"></img>
            <h1>Order Summary</h1>
            <div id="p" ><p>You can now listen to millions of songs,<br></br> audiobooks, and podcasts on any device<br></br> anywhere you like!</p></div>
            
            <div id="main2">
                <img src="icon-music.svg"></img>
                <div>
                    <p><b>Annual Plan</b></p>
                    <p>$59.99/year</p>
                </div>
                <a>Change</a>
            </div>
            <button id="a" ><b>Proceed to Payment</b></button>
            <button id="b" >Cancel Order</button>
        </div>
    )
}
root.render(Component())