// usestate არის ცვლადის შექმნის ტიპი როდესაც მისი შეცვლისთანავე განახლდება რენდერი
// წეღან ვთქვი
let root = ReactDOM.createRoot(document.getElementById("root"))

function Print(){
    let Hello = React.useState('hello');
    return (
        <div>
            <h1>{Hello[0]}</h1>
            <button onClick={() => {Hello[1]("World")}} >click</button>
        </div>
    )
}
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
function App() {
    return <>
        <Print />
        <Cnt />
    </>
}

root.render(App())
