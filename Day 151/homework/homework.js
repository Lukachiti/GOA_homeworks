let root = ReactDOM.createRoot(document.getElementById("root"))
//props არის "მახასიათებლები" 
//შეგვიძლია მშობლიდან მონაცემი გადავცეთ შვილს
function Func1(name){
    return (
        <>
            <h1>hello {name.text}</h1>
        
        </>
    )
}
function Func2(name){
    return (
        <>
            <h1>name: {name.name} 
                age: {name.age}
            </h1>
        
        </>
    )
}
function Func3(cnt){
    return (
        <>
            <h1>{cnt.num + 5}</h1>
        
        </>
    )
}
function App(){
    return (
        <>
            <Func1 text = "kocho!"/>
            <Func2 name = "kocho " age = {19}/>
            <Func3 num = {251}/>
        </>
    )
}

root.render(<App />)