let root = ReactDOM.createRoot(document.getElementById("root"))

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
    const arr = ["arr", 'str', "number", "boolean"]
    return (
        <>
            <ul>{arr.map((num) => <li>{num}</li>)}</ul>
        </>
    )
}
function Func6() {

    const [text, setText] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    function addTask(i) {
        i.preventDefault();
        setTasks([...tasks, text]);
        setText('');
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (<div>
        <form onSubmit={addTask}>
            <input type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter Task"
            />
            <button>add</button>
        </form>
        <ul>
            {tasks.map((task, i) => (
                <li key={i}>{task}
                    <button onClick={() => deleteTask(i)}>delete</button>
                </li>
            ))}
        </ul>
    </div>)
}
function Func7() {

    const [text, setText] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    function addTask(i) {
        i.preventDefault();
        setTasks([...tasks, {name: text, count: 1}]);
        setText('');
        console.log(tasks)
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    const cnttask = (index, idk) => {
        if(idk == "plu"){
            tasks[index].count = tasks[index].count + 1
        }
        else{
            tasks[index].count = tasks[index].count - 1
        }
        
    };
    

    return (<div>
        <form onSubmit={addTask}>
            <input type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter item"
            />
            <button>add</button>
        </form>
        <ul>
            {tasks.map((task, i) => (
                <li key={i}>{task.name}, count: {task.count}
                    <button onClick={() => deleteTask(i)}>delete</button>
                    <button onClick={() => cnttask(i, "plu")} >+</button>
                    <button onClick={() => cnttask(i, "min")}>-</button>
                </li>
            ))}
        </ul>
    </div>)
}
function App() {
    return <>
        
        <Func4 />
        <Func5 />
        <Func6 />
        <Func7 />
        
    </>
}

root.render(App())