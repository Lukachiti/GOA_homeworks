// ჩვენ ვიყენებთ Usestates რომ გავხადოთ ჩვენი კოდი რეაქთიული და ყოველ ცვლადის შეცვლაზე თავიდან დარენდერდს კომპონენტები სადაც ცვლადია გამოყენებული
let root = ReactDOM.createRoot(document.getElementById("root"))
let sth = document.getElementById("root")


function Div1(){
    let greeting = React.useState("Hello!")
    return (
        <>
            <h1>{greeting}</h1>
            <button onClick={() => {greeting[1]("Goodbye!")}}>Click meeeee</button>
        </>
    )
}
function Div2(){
    let count = React.useState(1)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                count[1](count[0] + 1)
            }}>+</button>
            <button onClick={() => {
                count[1](count[0] - 1)
            }}>-</button>
        </>
    )
}
function Div3(){
    
    let color = React.useState("white")
    sth.style.background = `${color[0]}`
    return (
        <>
            <button onClick={() => {if(color[0] == "white"){color[1]("green")}else{color[1]("white")}}}>Change color</button>
        </>
    )
}
function Div4(){
    let text = React.useState("Welcome to react")
    return (
        <>
            <h1>{text}</h1>
            <button onClick={() => {if(text[0] == ""){text[1]("Welcome to react")}else{text[1]("")}}}>Show/hide</button>
        </>
    )
}
function Div5(){
    
    let emojy = React.useState("😀")
    
    return (
        <>
        <h1>{emojy}</h1>
            <button onClick={() => {if(emojy[0] == "😀"){emojy[1]("😢")}else{emojy[1]("😀")}}}>Change emojy</button>
        </>
    )
}
function Div6(){
    
    return (
        <>
            
            <button onClick={() => {alert("hi im alert")}}>Click for alert</button>
        </>
    )
}
function Div7(){
    let greeting = React.useState("Hello!")
    return (
        <>
            <h1>{greeting}</h1>
            <button onClick={() => {greeting[1]("hi there")}}>Click meeeee</button>
        </>
    )
}


function App(){
    return (
        <>
        <Div1 />
        <Div2 />
        <br></br>
        <br></br>
        <Div3 />
        <Div4 />
        <Div5 />
        <Div6 />
        <Div7 />
        </>
    )
        
    
}
root.render(<App />)