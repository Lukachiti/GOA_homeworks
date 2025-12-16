
async function fetc(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result = await response.json();
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
        h2.textContent = result.title
        p.textContent = result.body
        div.append(h2)
        div.append(p)
        document.body.append(div)

    
    }
    catch{
        console.log(error)
    }
    
    
    
}

fetc()