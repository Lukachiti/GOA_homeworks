let arr = []
let root = ReactDOM.createRoot(document.getElementById("root"))
async function fetc(){
    const response = await fetch('https://fakestoreapi.com/products/');
    const result = await response.json();
    console.log(result)
    for(let i of result){
    arr.push((
        <div class="a">
            <h1>{i.title}</h1>
            <img src={i.image}></img>
            <p>category: {i.category}</p>
            <p>{i.description}</p>
            <p>price {i.price}</p>
            
        </div>
    )
    )
    root.render(arr)
    
    
}
    
    
}
fetc()
console.log(arr)



