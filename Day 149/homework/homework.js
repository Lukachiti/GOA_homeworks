let root = ReactDOM.createRoot(document.getElementById("root"))


function Cnt(){
    let count = React.useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                count[1](count[0] + 1)
            }}>+</button>
            <button onClick={() => {
                count[1](count[0] - 1)
            }}>-</button>
            <button onClick={() => {
                count[1](0)
            }}>reset</button>
        </>
    )
}
function Func3(){
    let stat = React.useState(true)
    const helper = () => {
        if(stat[0]){stat[1](false)}
        else{stat[1](true)}
    }
    return (


        <div>
            <button onClick={helper}>show/hide</button>
            <h1>{stat[0] ? "Hello": "Goodbye"}</h1>
            
        </div>
    )
}
function Func4(){
    let [inpu, setInpu] = React.useState("")
    
    return (
        <>
            <h3>you typed: {inpu}</h3>
            <input id="i" type="text" onInput={() => {setInpu(document.getElementById("i").value)}} ></input>
        </>
    )
}
function Func5(){
    let [inpu, setInpu] = React.useState("")
    let arrr = ["luka", "lazare", "lika"]
    const xelper = () => {
        let ans = []
        console.log(inpu)
        for(let i of arrr){
            if(i.includes(inpu) && inpu != ""){
                ans.push(i)
            }
        }
        return ans
    }
    
    return (
        <>
            <h3 id="k">{xelper()}</h3>
            <input id="i" type="text" onChange={(e) => {setInpu(e.target.value); 
                
            }} ></input>
        </>
    )
}
function App() {
    return <>
        <Func3 />
        <Cnt />
        <Func4 />
        <Func5 />
    </>
}

root.render(App())