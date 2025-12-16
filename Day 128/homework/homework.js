let users = document.getElementById("h4")
let emails = document.getElementById("email_h4")
let arr = []
let arr2 = []
let img = document.getElementById("img")
async function fetc(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const result = await response.json();
    console.log(result)
    
    
}
fetc()

async function fetc2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    for(let i=0;i<10;i++){
    console.log(result[i].username)
    }
    
}
fetc2()


async function fetc3(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const result = await response.json();
    console.log(result.username)
    
    
    
}
fetc3()

async function fetc4(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    for(let i=0;i<10;i++){
    arr.push(result[i].username + "___")
    arr2.push(result[i].email + "___")
    }
    users.textContent = arr
    emails.textContent = arr2
    
    
    
    
}
fetc4()

async function fetc5(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const result = await response.json();
    img.src = result.message
    
    
    
}
fetc5()
