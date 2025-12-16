let root = ReactDOM.createRoot(document.getElementById("root"))

function Func(){
    let stat = React.useState(true)
    const helper = () => {
        if(stat[0]){stat[1](false)}
        else{stat[1](true)}
    }
    return (
        <div>
            <button onClick={helper}>show/hide</button>
            <h1>{stat[0] ? "hii": ""}</h1>
            
        </div>
    )
}
function Func2(){
    let stat = React.useState(true)
    const helper = () => {
        if(stat[0]){stat[1](false)}
        else{stat[1](true)}
    }
    return (
        <div>
            <button onClick={helper}>show/hide</button>
            <input type={stat[0] ? "text": "password"} placeholder={stat[0] ? "text": "password"}></input>
            
        </div>
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
            <h1>{stat[0] ? "welcome user": ""}</h1>
            
        </div>
    )
}
function Func4(){
    let stat = React.useState(true)
    const helper = () => {
        if(stat[0]){stat[1](false)}
        else{stat[1](true)}
    }

    return (
        <div style={{background: stat[0] ? "black": "white"}}>
            <button onClick={helper}>Toggle Theme</button>
            
            
        </div>
    )
}
// function Func5(){
//     let stat = React.useState(true)
//     if(stat[0]){stat[1](false)
//         return (
//             <div>
//                 <h2>teacher</h2>
//                 <button>change</button>
//             </div>
//     )

        
//     }
//     else{stat[1](true)
//         return (
//             <div>
//                 <h2>student</h2>
//                 <button>change</button>
//             </div>
//     )
//     }
    
    

    
// }
function App(){
    return (
        <>
            <Func />
            <Func2 />
            <Func3 />
            <Func4 />
            
            
            
        </>
    )
}

root.render(App())
