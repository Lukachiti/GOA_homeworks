let root = ReactDOM.createRoot(document.getElementById("root"))
//props read-only არის რადგან არ უნდა შევცვალოთ კომპონენტში და მარტო ერთხელ იქმნება

function Func1(sth){
    return (

        <>
            <h1>{sth.title}</h1>
        </>
    )
}
function Func2(sth){
    return (

        <>
            <h1>User: {sth.name} from {sth.origin}</h1>
        </>
    )
}

function Func3(sth){
    return (

        <>
            <h1>{sth.price + 10}</h1>
        </>
    )
}


function App(){
    return (
            <>
            <Func1 title = "69"/>
            <Func2 name = "luka" origin = "terjola"/>
            <Func3 price = {59}/>
        </>
    )
}

root.render(<App />)